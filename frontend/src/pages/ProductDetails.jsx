import { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleBar from "../components/TitleBar";
import QuantityInput from "../components/QuantityInput";
import PhotoNavigator from "../components/PhotoNavigator";
import VariationSelect from "../components/VariationSelect";
import { DiscountMiniView } from "../components/DiscountViews";
import ImageNotAvailable from "../assets/images/products/no-image-provided.jpg";
import {
  ArrowDownCircleIcon,
  ArrowsRightLeftIcon,
  ShareIcon,
  HeartIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const useVariation = (prod, defaultChecked) => {
  if (prod) {
    if (prod.variations) {
      if (defaultChecked) {
        prod = {
          ...prod,
          price: prod.variations[0].price
            ? prod.variations[0].price
            : prod.price,
          quantity: prod.variations[0].quantity
            ? prod.variations[0].quantity
            : prod.quantity,
          discount: prod.variations[0].discount
            ? prod.variations[0].discount
            : prod.discount,
          extraDisc: prod.variations[0].extraDisc
            ? prod.variations[0].extraDisc
            : prod.extraDisc,
          shipping: prod.variations[0].shipping
            ? prod.variations[0].shipping
            : prod.shipping,
        };
      } else {
        prod = {
          ...prod,
          quantity: prod.variations
            .map((v) => v.quantity)
            .reduce((x, y) => x + y, 0),
        };
      }
    }
  }
  return prod;
};

const useAvailability = (qty) => {
  var status = {};
  if (!isNaN(qty)) {
    if (qty >= 25) {
      status = { class: "text-[#31CB00]", text: "In Stock" };
    } else if (qty >= 5) {
      status = { class: "text-orange-500", text: "Limited Quantity" };
    } else {
      status = { class: "text-[#fd384f]", text: "Out of Stock" };
    }
  } else {
    status = { class: "text-gray-500", text: "Status Unknown" };
  }
  return status;
};

const useQuantity = (diff, quantity, displayMin) => {
  if (!quantity) return 0;
  const qty = quantity < displayMin ? 0 : quantity;
  return diff.val === 0 && !diff.varMode ? qty : diff.val;
};

const useCareers = (shipping) => {
  shipping &&
    shipping.forEach((s) => {
      if (s.method && s.method === "HOME_DELIVERY") {
        if (s.careers) {
          return s.careers;
        }
      }
    });
  return null;
};

const calcExtraDisc = (unitPrice, quantity, mainDiscount, extraDiscs = []) => {
  var disc = mainDiscount && Number(mainDiscount).toFixed(2);
  var discUnitPrice = Number(unitPrice * ((100 - disc) / 100)).toFixed(2);
  var total = Number(quantity * discUnitPrice).toFixed(2);
  var saved = Number(quantity * (unitPrice - discUnitPrice)).toFixed(2);
  if (extraDiscs && extraDiscs.length > 0) {
    var i;
    var extraDiscRule;
    const matchedMinQtys = [];

    for (i = 0; i < extraDiscs.length; i++) {
      if (quantity >= extraDiscs[i].minQty) {
        matchedMinQtys.push(extraDiscs[i]);
      }
    }
    const maxMinQty = Math.max(...matchedMinQtys.map((q) => q.minQty));

    for (i = 0; i < extraDiscs.length; i++) {
      if (maxMinQty === extraDiscs[i].minQty) {
        extraDiscRule = extraDiscs[i];
        break;
      }
    }

    if (extraDiscRule) {
      disc = Number(Number(disc) + Number(extraDiscRule.discPerEach)).toFixed(
        2
      );
      discUnitPrice = Number(unitPrice * ((100 - disc) / 100)).toFixed(2);
      total = Number(quantity * discUnitPrice).toFixed(2);
      saved = Number(quantity * (unitPrice - discUnitPrice)).toFixed(2);
    }
  }

  return { total: total, saved: saved };
};

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  const defaultChecked = true;
  // default selected variation

  const [product, setProduct] = useState(
    useVariation(location.state, defaultChecked)
  );
  const [selectedPhoto, setSelectedPhoto] = useState(
    product && product.images.length > 0
      ? product.images[0]
      : { src: ImageNotAvailable }
  );
  const [varExtraDisc, setVarExtraDisc] = useState(
    product && product.extraDisc
  );
  const [varQuantity, setVarQuantity] = useState({ val: 0, varMode: false });
  const [varShipping, setVarShipping] = useState(product && product.shipping);
  const [shipCareers, setShipCareers] = useState(
    product && useCareers(product.shipping)
  );
  const [selectedShipping, setSelectedShipping] = useState(
    shipCareers && shipCareers[0]
  );
  const [deliveryMode, setDeliveryMode] = useState(
    product &&
      product.shipping &&
      product.shipping.length > 0 &&
      product.shipping[0].method
  );
  const [outOfStock, setOutOfStock] = useState(product && product.quantity < 5);
  const [discCalcResult, setDiscCalcResult] = useState(null);
  const [variationData, setVariationData] = useState(null);
  const [varDiscount, setVarDiscount] = useState(0);
  const [varPrice, setVarPrice] = useState(0);
  const [insideModal, setInsideModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const qtyInputRef = useRef(null);
  const addrInputRef = useRef(null);
  const discountView = useRef(null);
  const delModal = useRef(null);
  const actionButtons = [];
  const deliveryInputs = [];

  const userAddressList = [
    `Apt D56, Devil's Castle Rd, Mount Lavinia, Colombo`,
    `253-4, Green Residencies, Hikkaduwa, Galle`,
    `'PentHouse', 6th Cross Rd, Kiribathgoda, Gampaha`,
  ];
  const [addrInput, setAddrInput] = useState(userAddressList[0]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:4000/products/${id}`);
    const json = await res.json();
    if (res.ok) {
      setProduct(useVariation(json, defaultChecked));
    }
  };

  const formatVarName = (vn) => {
    const capFirst = [];
    vn.toString()
      .replace("-", " ")
      .replace("_", " ")
      .replace(".", " ")
      .split(" ")
      .forEach((w) => {
        if (!"with, without, a, and, each".includes(w)) {
          capFirst.push(w.charAt(0).toUpperCase() + w.slice(1));
        } else capFirst.push(w);
      });
    return capFirst.join(" ");
  };

  const setServiceIndex = (delivery, shipping) => {
    var i = 0;
    shipping &&
      shipping.forEach((s, index) => {
        if (s.method === delivery) {
          i = index;
        }
      });
    return i;
  };

  const setBtnStyles = (id, s) => {
    return `${id && s && id.includes(s) && `after:border after:border-gray-400`}
    p-1.5 flex items-center justify-center rounded-lg focus:outline-none relative after:block after:absolute after:right-0 after:left-0 after:mx-auto after:w-full after:h-full after:rounded-lg after:bg-transparent`;
  };

  const hideModal = () => {
    document.body.style.overflowY = "scroll";
    delModal.current.classList.remove("block");
    delModal.current.classList.add("hidden");
  };

  const showModal = () => {
    document.body.style.overflowY = "hidden";
    delModal.current.classList.remove("hidden");
    delModal.current.classList.add("block");
  };

  var initialized = false;
  const varNext = [];

  const updateVarData = (data) => {
    if (defaultChecked || initialized) {
      for (var i = 0; i < varNext.length; i++) {
        if (
          Object.keys(data.return).toString() ===
          Object.keys(varNext[i]).toString()
        ) {
          varNext[i] = data.return;
          break;
        }
      }

      for (var i = 0; i < data.vars.length; i++) {
        var count = 0;
        varNext.forEach((vn) => {
          if (
            data.vars[i].name &&
            Object.values(data.vars[i].name)
              .toString()
              .includes(Object.values(vn).toString())
          ) {
            count++;
          }
        });
        if (count === varNext.length) {
          setSelectedPhoto(
            data.vars[i].image ? data.vars[i].image : { src: ImageNotAvailable }
          );
          break;
        } else {
          setSelectedPhoto({ src: ImageNotAvailable });
        }
      }
    }

    if (!defaultChecked || varNext.length < data.varNames.length) {
      if (!initialized) {
        if (varNext.length === 0) {
          varNext.push(data.return);
        } else if (varNext.length < data.varNames.length) {
          var count = 0;
          varNext.forEach((ex, cur) => {
            if (
              Object.keys(data.return).toString() === Object.keys(ex).toString()
            ) {
              count++;
              varNext[cur] = data.return;
            }
          });
          if (count === 0) {
            varNext.push(data.return);
          }
          initialized = varNext.length === data.varNames.length;
        }
        if (initialized) {
          updateVarData(data);
        } else {
          setSelectedPhoto(data.single);
        }
      }
    }

    var vnList = "";
    varNext.forEach((vn) => {
      vnList += Object.values(vn).toString() + ",";
    });
    vnList = vnList.substring(0, vnList.length - 1).split(",");

    const qtyList = [];
    const discList = [];
    const priceList = [];
    const extraDiscList = [];
    const shipList = [];
    data.vars.forEach((v) => {
      var count = 0;
      vnList.forEach((vn) => {
        if (Object.values(v.name).toString().includes(vn)) {
          count++;
        }
      });
      if (count === vnList.length) {
        qtyList.push(v.quantity);
        v.discount && discList.push(v.discount);
        v.price && priceList.push(v.price);
        v.extraDisc && extraDiscList.push(v.extraDisc);
        v.shipping && shipList.push(v.shipping);
      }
    });

    setVarShipping(shipList.length === 1 ? shipList[0] : data.shipping);
    setVarExtraDisc(
      extraDiscList.length === 1 ? extraDiscList[0] : data.extraDisc
    );
    setVarPrice(priceList.length === 1 ? priceList.toString() : 0);
    setVarDiscount(discList.length === 1 ? discList.toString() : 0);
    setVarQuantity({
      val: qtyList.reduce((x, y) => x + y, 0),
      varMode: true,
    });
  };

  const handleClick = useCallback(() => {
    hideModal();
  }, []);

  useEffect(() => {
    if (!product) {
      fetchData();
    }
  }, [product]);

  useEffect(() => {
    if (qtyInputRef.current && product) {
      qtyInputRef.current.addEventListener(
        "input",
        () => {
          discountView.current.classList.remove("hidden");
        },
        { once: true }
      );
      if (varExtraDisc) {
        setDiscCalcResult(
          calcExtraDisc(
            varPrice === 0 ? product.price : varPrice,
            qtyInputRef.current.value,
            varDiscount === 0 ? product.discount : varDiscount,
            varExtraDisc
          )
        );
      }
    }
  }, [varExtraDisc, varDiscount, varPrice]);

  useEffect(() => {
    if (deliveryInputs && deliveryInputs.length > 0) {
      deliveryInputs[0].click();
    }
  }, [varShipping]);

  useEffect(() => {
    if (actionButtons.length === 3) {
      actionButtons.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
          btn.children[0].classList.remove("text-gray-400");
          btn.children[0].classList.add("text-[#fd384f]");
        });
        btn.addEventListener("mouseleave", () => {
          btn.children[0].classList.remove("text-[#fd384f]");
          btn.children[0].classList.add("text-gray-400");
        });
      });
    }
  }, [actionButtons]);

  useEffect(() => {
    if (insideModal) {
      delModal.current.children[1].removeEventListener("click", handleClick);
    } else {
      delModal.current.children[1].addEventListener("click", handleClick);
    }
  }, [insideModal]);

  useEffect(() => {
    if (product && varQuantity) {
      setOutOfStock(
        varQuantity && useQuantity(varQuantity, product.quantity, 5) < 5
      );
    }
  }, [varQuantity, product]);

  useEffect(() => {
    if (shipCareers && shipCareers.length > 0) {
      setSelectedShipping(shipCareers[0]);
    }
  }, [shipCareers]);

  useEffect(() => {
    if (product) {
      setSelectedPhoto(
        product.images.length > 0
          ? product.images[0]
          : { src: ImageNotAvailable }
      );
      setOutOfStock(useVariation(product, defaultChecked).quantity < 5);
      setVarExtraDisc(useVariation(product, defaultChecked).extraDisc);
      setVarShipping(useVariation(product, defaultChecked).shipping);
      setDeliveryMode(
        product.shipping &&
          product.shipping.length > 0 &&
          product.shipping[0].method
      );
      setShipCareers(
        useCareers(useVariation(product, defaultChecked).shipping)
      );

      varShipping &&
        varShipping.forEach((s) => {
          if (s.method === "HOME_DELIVERY") {
            s.careers && setShipCareers(s.careers);
          }
        });

      const vars = product.variations;

      if (vars) {
        var vnList = "";
        vars.forEach((v) => {
          vnList += Object.keys(v.name).toString() + ",";
        });
        const varNames = Array.from(
          new Set(vnList.substring(0, vnList.length - 1).split(","))
        )
          .join()
          .split(",");

        if (defaultChecked && varNext.length === 0) {
          varNames.forEach((vName) => {
            var init = {};
            if (vars[0].name[vName]) {
              init[`${vName}`] = vars[0].name[vName];
              varNext.push(init);
            }
          });
        }
        const varData = [];
        varNames.forEach((vName) => {
          const vItems = [];
          Array.from(new Set(vars.map((v) => v.name[vName]))).forEach((val) => {
            for (var i = 0; i < vars.length; i++) {
              if (
                vars[i].name &&
                Object.values(vars[i].name).toString().includes(val)
              ) {
                vItems.push({
                  item: val,
                  image: vars[i].image
                    ? vars[i].image
                    : { src: ImageNotAvailable },
                  defaultChecked:
                    defaultChecked && vars[0].name[vName] !== undefined,
                  action: (ret) => {
                    updateVarData({
                      vars,
                      varNames,
                      extraDisc: product.extraDisc ? product.extraDisc : null,
                      shipping: product.shipping ? product.shipping : null,
                      return: ret.itemData,
                      single: ret.single,
                    });
                  },
                });
                break;
              }
            }
          });
          varData.push({ name: vName, items: vItems });
        });
        setVariationData(varData);
      }
    }
  }, [product]);

  return (
    <>
      <Header />
      <div className="p-5 pt-10 relative mt-[138px] bg-slate-100">
        {product && selectedPhoto ? (
          <div className="max-w-[1400px] mx-auto flex flex-col gap-y-5">
            <div className="flex items-start gap-x-5">
              <div
                className={`${
                  varShipping && varShipping.length > 0
                    ? `max-w-[66.67%]`
                    : `w-full`
                } relative bg-white shadow-[0px_0px_3px_0.5px] shadow-gray-300 rounded-lg py-5 px-10 flex gap-x-5 items-center justify-between`}
              >
                <div className="main-photo-view w-[45%] flex flex-col items-center justify-between">
                  <div className="p-5 min-w-[300px] w-[300px] h-[300px]">
                    <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                  </div>

                  <PhotoNavigator
                    buttons={product.images.map((p) => ({
                      id: p.id,
                      onClick: () => {
                        setSelectedPhoto(p);
                      },
                      style: setBtnStyles(
                        p && p.id,
                        selectedPhoto && selectedPhoto.id
                      ),
                      photo: p,
                    }))}
                    containerGap="gap-x-2"
                    gridCols="grid-cols-5"
                    containerSpacing={`${
                      product.variations ? `mt-20` : `mt-10`
                    }`}
                  />
                </div>

                <div className="absolute flex flex-col gap-y-3 z-[2] p-5 top-0 right-0">
                  {[
                    { icon: ShareIcon, tip: "Share this Product" },
                    { icon: ArrowsRightLeftIcon, tip: "Add to Compare" },
                    { icon: HeartIcon, tip: "Add to Wishlist" },
                  ].map((option, index) => (
                    <button
                      type="button"
                      title={option.tip}
                      className={`bg-white h-10 w-10 flex items-center justify-center border-2 border-gray-400 hover:border-[#fd384f] rounded-full duration-300`}
                      key={`${index}-${option.tip
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      ref={(actionBtn) => {
                        actionBtn && actionButtons.push(actionBtn);
                      }}
                    >
                      <option.icon className="h-6 text-gray-400 duration-300"></option.icon>
                    </button>
                  ))}
                </div>
                <div
                  style={{ fontFamily: "Open Sans" }}
                  className="w-[55%] relative z-[0] text-[15px] px-5"
                >
                  <p className="font-semibold text-gray-800">
                    <span className="text-gray-500">Brand: </span>
                    {product.brand ? product.brand : `Unknown`}
                  </p>
                  <TitleBar
                    title={product.title}
                    padding="p-3 pr-8 pl-0"
                    backgroundColor="bg-transparent"
                    shadowOptions="shadow-none"
                    cornerRadius="rounded-none"
                    textOptions="text-2xl font-bold text-gray-800"
                  ></TitleBar>
                  <div className="flex gap-3 mt-1.5 mb-5 items-center">
                    {(varDiscount || product.discount) && (
                      <p className="flex items-center bg-[#fd384f] px-2 py-[3px] text-white font-bold rounded-sm shadow-sm">
                        {varDiscount === 0 ? product.discount : varDiscount}%
                        <ArrowDownCircleIcon className="h-7"></ArrowDownCircleIcon>
                      </p>
                    )}
                    <div className="flex gap-3 items-end">
                      <span className="text-gray-800 font-bold text-nowrap text-xl">
                        LKR{" "}
                        {(varPrice || product.price) &&
                        (varDiscount || product.discount)
                          ? Number(
                              Number(
                                varPrice === 0 ? product.price : varPrice
                              ) *
                                ((100 -
                                  Number(
                                    varDiscount === 0
                                      ? product.discount
                                      : varDiscount
                                  )) /
                                  100)
                            ).toFixed(2)
                          : 0}
                      </span>
                      <span className="text-gray-500 text-nowrap font-bold">
                        LKR{" "}
                        {varPrice || product.price
                          ? Number(
                              varPrice === 0 ? product.price : varPrice
                            ).toFixed(2)
                          : 0}
                      </span>
                    </div>
                  </div>
                  {varExtraDisc && !outOfStock && (
                    <ul className="my-3 text-[14px] leading-[25px] font-semibold text-gray-500 border border-slate-200 rounded-lg max-w-[300px] p-3">
                      {varExtraDisc.map((mqDisc, index) => (
                        <li
                          key={`${mqDisc.minQty}-${mqDisc.discPerEach}-${index}`}
                          className="flex justify-between text-nowrap"
                        >
                          Buy {mqDisc.minQty} or more:{" "}
                          <span className="text-gray-800">
                            extra{" "}
                            <span className="font-bold">
                              {Number(mqDisc.discPerEach).toFixed(2)}%
                            </span>{" "}
                            off each
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p
                    className={`${
                      useAvailability(
                        useQuantity(varQuantity, product.quantity, 5)
                      ).class
                    } font-bold text-[16.5px] my-3`}
                  >
                    {
                      useAvailability(
                        useQuantity(varQuantity, product.quantity, 5)
                      ).text
                    }
                  </p>
                  <hr className="border-slate-200" />
                  <div className="flex items-center gap-5 my-5">
                    <p className="text-gray-800 font-bold">Quantity:</p>
                    <div className="flex gap-2.5 items-center">
                      <QuantityInput
                        name="quantity-select"
                        min="1"
                        id="qty-select"
                        width="w-1/2"
                        paddingY="py-1.5"
                        cornerRadius="rounded-full"
                        refInput={qtyInputRef}
                        disabled={outOfStock}
                        onInput={(qty) => {
                          setDiscCalcResult(
                            calcExtraDisc(
                              varPrice === 0 ? product.price : varPrice,
                              qty,
                              varDiscount === 0
                                ? product.discount
                                : varDiscount,
                              varExtraDisc
                            )
                          );
                        }}
                        onIncrease={() => {
                          discountView.current.classList.remove("hidden");
                        }}
                      ></QuantityInput>
                      <p className="text-gray-500 text-nowrap text-[12.5px] leading-[18px] font-semibold">
                        {useQuantity(varQuantity, product.quantity, 5)}{" "}
                        remaining <span className="text-gray-800">|</span>{" "}
                        <br /> 50+ sold
                      </p>
                    </div>
                  </div>
                  {variationData && <hr />}
                  {variationData &&
                    variationData.map((d, index) => (
                      <VariationSelect data={d} key={`${d.name}-${index}`} />
                    ))}

                  <div ref={discountView} className="hidden">
                    {discCalcResult && !outOfStock && (
                      <DiscountMiniView data={discCalcResult} />
                    )}
                  </div>
                  <div className="flex gap-5 w-full mt-5">
                    <button
                      className="h-auto flex-grow rounded-lg text-red-600 font-semibold text-nowrap text-center px-4 py-2 disabled:bg-[hsl(355,100%,98%)] disabled:cursor-not-allowed disabled:text-red-500 bg-[hsl(355,100%,95%)] hover:bg-[hsl(355,100%,92.5%)] shadow-[0px_1px_2px_0px] shadow-gray-400 duration-300"
                      type="submit"
                      disabled={outOfStock}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="h-auto flex-grow rounded-lg text-white font-semibold text-nowrap text-center px-4 py-2 disabled:bg-[#fd6879] disabled:cursor-not-allowed bg-[#fd384f] hover:bg-[#fc0320] shadow-[0px_1px_2px_0px] shadow-gray-800 duration-300"
                      type="submit"
                      disabled={outOfStock}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              {varShipping && varShipping.length > 0 && (
                <div
                  style={{ fontFamily: "Open Sans" }}
                  className="w-1/3 flex flex-col gap-y-4 text-[15px]"
                >
                  <div className="bg-white w-full shadow-[0px_0px_3px_0.5px] shadow-gray-300 rounded-lg p-5">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-bold">
                        Delivery Mode
                      </span>
                      {varShipping.map((s, index) => (
                        <label
                          key={`${s.method}-${index}`}
                          htmlFor={s.method.replace("_", "-").toLowerCase()}
                          className="flex gap-2 items-center hover:cursor-pointer text-gray-800"
                        >
                          <input
                            ref={(delInput) => {
                              delInput && deliveryInputs.push(delInput);
                            }}
                            type="radio"
                            id={s.method.replace("_", "-").toLowerCase()}
                            name="delivery-mode"
                            value={s.method}
                            defaultChecked={index === 0}
                            className="duration-100"
                            onClick={(e) => {
                              setDeliveryMode(s.method);
                              e.target.checked = true;
                            }}
                          />
                          <span>{formatVarName(s.method.toLowerCase())}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white w-full shadow-[0px_0px_3px_0.5px] shadow-gray-300 rounded-lg p-5">
                    <div className="flex justify-between">
                      <p className="text-gray-800 font-bold text-nowrap">
                        {deliveryMode === "HOME_DELIVERY"
                          ? `Ship To`
                          : `Collect From`}
                      </p>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-[#fd384f] font-semibold duration-300"
                        onClick={() => {
                          setModalContent(
                            deliveryMode === "HOME_DELIVERY"
                              ? "ADDRESS_SELECT"
                              : "PICKUP_LOCATION_SELECT"
                          );
                          deliveryMode === "HOME_DELIVERY" &&
                            setAddrInput(
                              addrInput === "" ? userAddressList[0] : addrInput
                            );
                          showModal();
                        }}
                      >
                        Change Location
                      </button>
                    </div>
                    {deliveryMode === "HOME_DELIVERY" ? (
                      <>
                        <div className="my-3 flex gap-x-1 items-center text-gray-800">
                          <MapPinIcon className="h-5 -ml-1" />
                          <p>
                            {selectedAddress !== ""
                              ? selectedAddress
                              : userAddressList[0]}
                          </p>
                        </div>
                        <button
                          className="my-3 flex gap-x-1 items-center text-gray-800 font-bold"
                          onClick={() => {
                            setModalContent("SHIPPING_SELECT");
                            showModal();
                          }}
                        >
                          <p>Delivery Choice</p>
                          <ChevronRightIcon className="h-4" />
                          <p>{selectedShipping}</p>
                        </button>
                        <p className="text-gray-800">
                          Estimated arrival:{" "}
                          <span className="font-bold">April 15 - 19</span>{" "}
                          <span className="text-gray-500">
                            (8-12 business days)
                          </span>
                        </p>
                        <p className="text-gray-800">
                          5% cashback for late delivery
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mt-3 text-gray-800 flex gap-x-1 items-center">
                          <MapPinIcon className="h-5 -ml-1" />
                          <p>NEWTON Store, 3rd Cross St, Mount Lavinia</p>
                        </div>
                        <p className="text-gray-500">- closest to you</p>
                        <button
                          className="mt-3 flex gap-x-1 items-center text-gray-800 font-bold"
                          onClick={() => {
                            setModalContent("PICKUP_DEADLINE_SELECT");
                            showModal();
                          }}
                        >
                          <p>Pickup within</p>
                          <ChevronRightIcon className="h-4" />
                          <p>3 days</p>
                        </button>
                      </>
                    )}
                  </div>

                  {varShipping[setServiceIndex(deliveryMode, varShipping)]
                    .services && (
                    <div className="bg-white w-full shadow-[0px_0px_3px_0.5px] shadow-gray-300 rounded-lg p-5">
                      <p className="text-gray-800 font-bold">Service</p>
                      <button
                        type="button"
                        className="mt-3 flex flex-wrap gap-x-1.5"
                        onClick={() => {
                          setModalContent("SERVICES");
                          showModal();
                        }}
                      >
                        {varShipping[
                          setServiceIndex(deliveryMode, varShipping)
                        ].services
                          .join("SR" + String.fromCharCode(183) + "SR")
                          .split("SR")
                          .map((s, index) => (
                            <span key={`${index}-${s}`} className="text-nowrap">
                              {s}
                            </span>
                          ))}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="bg-white shadow-[0px_0px_3px_0.5px] shadow-gray-300 p-5 rounded-lg">
              <TitleBar
                title="Description"
                padding="p-0"
                backgroundColor="bg-transparent"
                shadowOptions="shadow-none"
                cornerRadius="rounded-none"
                textOptions="text-2xl font-bold text-gray-800"
              ></TitleBar>
            </div>
            <div className="bg-white shadow-[0px_0px_3px_0.5px] shadow-gray-300 p-5 rounded-lg">
              <TitleBar
                title="Related Products"
                padding="p-0"
                backgroundColor="bg-transparent"
                shadowOptions="shadow-none"
                cornerRadius="rounded-none"
                textOptions="text-2xl font-bold text-gray-800"
              ></TitleBar>
            </div>
          </div>
        ) : (
          <div>Sorry, Loading || Page not found || No internet!</div>
        )}

        <div ref={delModal} className="hidden">
          <div className="absolute z-[55] left-0 w-full h-full -top-[138px] bg-black opacity-50"></div>
          <div className="absolute z-[55] left-0 w-full h-full -top-[138px] flex items-center justify-center bg-transparent">
            {modalContent === "ADDRESS_SELECT" && (
              <div
                style={{ fontFamily: "Open Sans" }}
                className="w-1/2 xl:w-[37.5%] relative bg-white rounded-2xl p-5 shadow-[0px_2px_7.5px_0px] shadow-gray-600 text-[15px] -mt-[200px]"
                onMouseOver={() => {
                  !insideModal && setInsideModal(true);
                }}
                onMouseLeave={() => {
                  insideModal && setInsideModal(false);
                }}
              >
                <div className="absolute flex items-center justify-end right-4 top-0 pl-3 h-16 w-16 z-[1]">
                  <button
                    onClick={(e) => {
                      setInsideModal(false);
                      hideModal();
                      setSelectedAddress(addrInputRef.current.value);
                    }}
                  >
                    <XCircleIcon className="h-10 text-slate-300" />
                  </button>
                </div>
                <h3 className="text-[16.5px] leading-[25px] font-bold text-gray-800">
                  Shipping address
                </h3>
                <label
                  className="font-semibold mt-5 block text-gray-800"
                  htmlFor="address-pre-select"
                >
                  Enter a shipping address:
                </label>
                <input
                  id="address-pre-select"
                  type="text"
                  value={addrInput}
                  ref={addrInputRef}
                  placeholder="apt, street, city"
                  className="rounded-lg mt-2 w-full border-gray-300 hover:border-gray-500 focus:ring-0 outline-none focus:border-orange-500 focus:shadow-[0px_0px_5px_0px] focus:shadow-gray-500 duration-300 text-[15px] placeholder:text-[15px]"
                  onChange={(e) => {
                    setAddrInput(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      setInsideModal(false);
                      hideModal();
                      setSelectedAddress(e.target.value);
                    }
                  }}
                />
                <h3 className="font-semibold text-gray-800 mt-5">
                  ...or select another address:
                </h3>
                <ul className="flex flex-col mt-2 py-2 border border-gray-300 rounded-lg">
                  {userAddressList.map((addr, index) => (
                    <li
                      key={`${addr.slice(addr.length - 5)}-${index}`}
                      className={`px-3 py-2 font-semibold ${
                        addr === addrInput
                          ? `text-black bg-slate-200`
                          : `text-gray-500 hover:bg-slate-100 hover:text-gray-800`
                      } hover:cursor-pointer duration-100`}
                      onClick={() => {
                        setAddrInput(addr);
                      }}
                    >
                      {addr}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {shipCareers && modalContent === "SHIPPING_SELECT" && (
              <div
                style={{ fontFamily: "Open Sans" }}
                className="w-1/2 xl:w-auto max-w-[450px] xl:max-w-max relative bg-white rounded-2xl p-5 shadow-[0px_2px_7.5px_0px] shadow-gray-600 text-[15px] -mt-[200px]"
                onMouseOver={() => {
                  !insideModal && setInsideModal(true);
                }}
                onMouseLeave={() => {
                  insideModal && setInsideModal(false);
                }}
              >
                <div className="absolute flex items-center justify-end right-[55px] xl:right-[27.5px] top-0 pl-3 h-16 w-16 z-[1]">
                  <button
                    onClick={() => {
                      setInsideModal(false);
                      hideModal();
                    }}
                  >
                    <XCircleIcon className="h-10 text-slate-300" />
                  </button>
                </div>
                <div
                  className="w-full max-h-[500px] z-[0] overflow-y-scroll xl:overflow-y-hidden"
                  onScroll={(e) => {
                    if (e.target.scrollTop > 10) {
                      e.target.previousElementSibling.classList.remove("flex");
                      e.target.previousElementSibling.classList.add("hidden");
                    } else {
                      e.target.previousElementSibling.classList.remove(
                        "hidden"
                      );
                      e.target.previousElementSibling.classList.add("flex");
                    }
                  }}
                >
                  <h3 className="font-bold text-[16.5px] leading-[25px] text-gray-800 ml-2 mr-6 xl:mx-2.5">
                    Shipping method
                  </h3>
                  <div
                    className={`grid grid-cols-1 ${
                      shipCareers.length === 1 && `xl:grid-cols-1`
                    } ${shipCareers.length === 2 && `xl:grid-cols-2`} ${
                      shipCareers.length >= 3 &&
                      shipCareers.length !== 4 &&
                      `xl:grid-cols-3`
                    } ${
                      shipCareers.length === 4 && `xl:grid-cols-2`
                    } gap-5 xl:gap-x-1 xl:gap-y-4 mt-5`}
                  >
                    {shipCareers.map((sc, index) => (
                      <div
                        className="pl-2 pr-6 pb-2 xl:px-3 xl:pb-3"
                        key={`${sc}-${index}`}
                      >
                        <div
                          className={`bg-slate-100 relative flex items-start flex-col h-full text-gray-800 min-w-[350px] rounded-xl shadow-[0px_0px_3px_0.5px] ${
                            selectedShipping === sc
                              ? `shadow-[0px_0px_5px_0.5px] shadow-gray-500`
                              : `shadow-[0px_0px_3px_0.5px] shadow-gray-300 hover:shadow-[0px_0px_5px_0.5px] hover:shadow-gray-400`
                          } hover:cursor-pointer duration-200`}
                          onClick={() => {
                            setSelectedShipping(sc);
                          }}
                        >
                          <div className="bg-slate-200 flex items-center justify-between px-4 min-h-12 rounded-t-xl w-full border-b border-slate-300">
                            <p className="font-bold">{sc.replace("_", " ")}</p>
                            {selectedShipping === sc && (
                              <ShieldCheckIcon className="text-emerald-600 h-8" />
                            )}
                          </div>
                          <div className="p-4 pt-2.5 h-full flex flex-col justify-between">
                            <div>
                              <p>
                                Estimated arrival:{" "}
                                <span className="font-bold">April 15 - 19</span>
                              </p>
                              <p className="text-gray-500 my-1">
                                (8-12 business days)
                              </p>
                              {sc === "SL_POST" && (
                                <p className="my-1 font-semibold">
                                  Rate:{" "}
                                  <span className="font-bold">LKR 189.00</span>{" "}
                                  per item Kg
                                </p>
                              )}
                              <p>Get a 5% cashback for late delivery</p>
                            </div>
                            <p className="bg-slate-200 px-2 py-1 max-w-min text-nowrap rounded-md font-semibold mt-2">
                              Tracking Available
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {varShipping && modalContent === "SERVICES" && (
              <div
                style={{ fontFamily: "Open Sans" }}
                className="w-1/2 xl:w-[37.5%] relative bg-white rounded-2xl p-5 shadow-[0px_2px_7.5px_0px] shadow-gray-600 text-[15px] -mt-[200px] text-gray-800"
                onMouseOver={() => {
                  !insideModal && setInsideModal(true);
                }}
                onMouseLeave={() => {
                  insideModal && setInsideModal(false);
                }}
              >
                <div className="absolute flex items-center justify-end right-4 top-0 pl-3 h-16 w-16 z-[1]">
                  <button
                    onClick={() => {
                      setInsideModal(false);
                      hideModal();
                    }}
                  >
                    <XCircleIcon className="h-10 text-slate-300" />
                  </button>
                </div>
                <h3 className="font-bold text-[16.5px] leading-[25px]">
                  Service
                </h3>
                <div className="flex flex-col gap-y-5 mt-5">
                  {varShipping[
                    setServiceIndex(deliveryMode, varShipping)
                  ].services.map((s, index) => (
                    <div
                      key={`${index}-${s}`}
                      className="bg-slate-100 p-5 rounded-lg shadow-[0px_0px_1.5px_0.5px] shadow-slate-300"
                    >
                      <h6 className="font-bold">{s}</h6>
                      {s === "Life Time Warranty" && (
                        <p className="mt-3 text-gray-600">
                          With our commitment to excellence, every Kevilton
                          product you purchase comes with the guarantee of a
                          lifetime of reliability.
                        </p>
                      )}
                      {s === "Free Returns" && (
                        <p className="mt-3 text-gray-600">
                          Not satisfied with your order? Send the product back
                          within 6 months. You will not be charged for the
                          return if it's a manufacturing defect.
                        </p>
                      )}
                      {s === "Money Back Guarantee" && (
                        <p className="mt-3 text-gray-600">
                          Shop confidently knowing your every purchase is backed
                          by our 90 days Money Back Guarantee.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {modalContent === "PICKUP_LOCATION_SELECT" && (
              <div
                style={{ fontFamily: "Open Sans" }}
                className="w-1/2 xl:w-[37.5%] relative bg-white rounded-2xl p-5 shadow-[0px_2px_7.5px_0px] shadow-gray-600 text-[15px] -mt-[200px] text-gray-800"
                onMouseOver={() => {
                  !insideModal && setInsideModal(true);
                }}
                onMouseLeave={() => {
                  insideModal && setInsideModal(false);
                }}
              >
                <div className="absolute flex items-center justify-end right-4 top-0 pl-3 h-16 w-16 z-[1]">
                  <button
                    onClick={() => {
                      setInsideModal(false);
                      hideModal();
                    }}
                  >
                    <XCircleIcon className="h-10 text-slate-300" />
                  </button>
                </div>
                <h3 className="font-bold text-[16.5px] leading-[25px]">
                  Pickup Location
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
