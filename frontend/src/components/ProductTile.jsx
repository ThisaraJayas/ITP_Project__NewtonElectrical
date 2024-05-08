import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ImageNotAvailable from "../assets/images/products/no-image-provided.jpg";

export default function ProductTile({ product }) {
  const { url_slug, images, title, price, discount, quantity, variations } =
    product;
  const productActions = [
    {
      tip: "Add to Compare",
      icon: ArrowsRightLeftIcon,
      colors: "hover:bg-orange-500",
    },
    {
      tip: "Add to Wishlist",
      icon: HeartIcon,
      colors: "hover:bg-red-600",
    },
    {
      tip: "Add to Cart",
      icon: ShoppingCartIcon,
      colors: "hover:bg-red-600",
    },
  ];
  const tile = useRef(null);
  const [dataOK, setDataOK] = useState(false);

  const useAvailability = (qty) => {
    var status = {};
    if (!isNaN(qty)) {
      if (qty >= 25) {
        status = { class: " bg-green-100 text-green-600 ", text: "IN STOCK" };
      } else if (qty >= 5) {
        status = {
          class: " bg-orange-100 text-orange-600 ",
          text: "LIMITED QUANTITY",
        };
      } else {
        status = { class: " bg-red-100 text-red-600 ", text: "OUT OF STOCK" };
      }
    } else {
      status = { class: " bg-gray-100 text-gray-600 ", text: "STATUS UNKNOWN" };
    }
    return status;
  };

  const checkDataAssigned = (data) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(data).length !== 0) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  };

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = img.onabort = function () {
        reject(src);
      };
      img.src = src;
    });
  };

  useEffect(() => {
    const imagesPromiseList = [];
    const handleData = async () => {
      try {
        await checkDataAssigned(product);
        setDataOK(true);
        if (images && images.length > 0) {
          images.forEach((i) => {
            imagesPromiseList.push(preloadImage(i.src));
          });
          await Promise.all(imagesPromiseList);
        }
      } catch (err) {
        if (err.message) {
          console.log(err.message);
        }
      }
    };
    handleData();
    if (tile.current) {
      tile.current.classList.remove("opacity-0");
    }
    setTimeout(() => {
      if (tile.current) {
        tile.current.classList.remove("opacity-0");
      }
    }, 750);
  }, [tile.current]);

  return (
    <>
      {dataOK && (
        <div
          className="relative flex flex-col justify-between rounded-lg bg-white shadow-[0px_0px_3px_0.5px] shadow-gray-300 hover:shadow-[0px_0px_5px_0.5px] hover:shadow-gray-400 duration-300 opacity-0"
          ref={tile}
        >
          <div className="p-5 relative pb-0">
            <Link to={url_slug} state={product} key={product._id}>
              <img
                src={
                  images && images.length > 0
                    ? images[0].src
                    : ImageNotAvailable
                }
                alt={images && images.length > 0 ? images[0].alt : ""}
                className="rounded-t-lg max-h-[250px] w-full"
              />
            </Link>
          </div>
          <div className="mx-3 mt-3">
            <Link to={url_slug} state={product} key={product._id}>
              <span className="block w-full font-semibold text-gray-700 overflow-hidden">
                {title}
              </span>
            </Link>
          </div>
          {discount && (
            <div className="absolute right-0 top-10">
              <span
                style={{ clipPath: "inset(-5px 0px -5px -5px)" }}
                className="font-bold block bg-red-700 text-white shadow-[0px_1px_3px_0px] shadow-gray-500 px-3 py-2 text-right"
              >
                {Number(discount).toFixed(2)}% off!
              </span>
            </div>
          )}
          <div>
            <div className="mx-3 mt-2 w-full font-semibold text-[#e23636]">
              LKR{" "}
              {price && (
                <span className="text-gray-400 line-through">
                  {Number(price).toFixed(2)}
                </span>
              )}{" "}
              {price
                ? Number(
                    Number(price) * ((100 - Number(discount)) / 100)
                  ).toFixed(2)
                : 0}
            </div>
            <span
              style={{ fontFamily: "Ubuntu" }}
              className={`px-3 py-1.5 mt-1.5 border-y border-gray-200 block font-semibold ${
                useAvailability(variations ? variations[0].quantity : quantity)
                  .class
              }`}
            >
              {
                useAvailability(variations ? variations[0].quantity : quantity)
                  .text
              }
            </span>
            <div className="m-3 flex gap-2 justify-end">
              {productActions.map((type) => (
                <button
                  className={`bg-gray-500 ${type.colors} rounded-full p-2 w-10 h-10 duration-300`}
                  title={type.tip}
                  key={`btn-${type.tip}`}
                >
                  <type.icon className="text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
