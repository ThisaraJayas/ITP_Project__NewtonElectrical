import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import TitleBar from "../components/TitleBar";
import SidePanel from "../components/SidePanel";
import ProductTile from "../components/ProductTile";
import {
  ArrowRightCircleIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/solid";
import { FaBars } from "react-icons/fa";

import tTiles from "../assets/images/products/2-tiles.png";
import fTiles from "../assets/images/products/4-tiles.png";
import hzTile from "../assets/images/products/horiz-tile.png";

export default function Products() {
  const subC = useRef(null);
  const [panelExpanded, setPanelExpanded] = useState(window.innerWidth >= 850);
  const [btnGroupShow, setBtnGroupShow] = useState(window.innerWidth >= 850);
  const [sortMenuShow, setSortMenuShow] = useState(window.innerWidth >= 640);
  const [btnClicked, setBtnClicked] = useState(false);
  const [floatClicked, setFloatClicked] = useState(false);
  const [minMax, setMinMax] = useState(["", ""]);
  const [subCShow, setSubCShow] = useState(false);
  const [subCItems, setSubCItems] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  const [products, setProducts] = useState([{}]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const fetchData1 = async () => {
    const res = await fetch("http://localhost:4000/products/categories");
    const json = await res.json();
    if (res.ok) setCategories(json);
  };

  const fetchData2 = async () => {
    const res = await fetch("http://localhost:4000/products");
    const json = await res.json();
    if (res.ok) setProducts(json);
  };

  const handleResize = () => {
    if (window.innerWidth >= 850) {
      setPanelExpanded(true);
      setBtnGroupShow(true);
      setBtnClicked(false);
      setFloatClicked(false);
    } else if (window.innerWidth >= 640) {
      setSortMenuShow(true);
      if (!btnClicked) {
        setBtnGroupShow(false);
      }
      if (!floatClicked) {
        setPanelExpanded(false);
      }
    } else {
      setSortMenuShow(false);
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [floatClicked, btnClicked]);

  const sortMenu = {
    menuItems: [
      { id: 1, name: "Select Sort" },
      { id: 2, name: "Price Low to High" },
      { id: 3, name: "Price High to Low" },
    ],
    dropOrigin: "origin-top",
    pos: "right-0",
    btnWidth: "w-40",
    menuWidth: "w-full",
    menuSpacing: "px-4 py-2",
  };

  const categoryMenu = {
    menuItems: categories.map((c) => ({
      id: Number(c.id),
      name: String(c.name),
      action: () => {
        switch (Number(c.id)) {
          case 1:
            setSubCShow(false);
            break;
          default:
            {
              setSubCItems(
                c.subCategory.map((sc) => ({
                  id: Number(sc.id),
                  name: String(sc.name),
                }))
              );
              if (!subCShow) setSubCShow(true);
            }
            break;
        }
      },
    })),
    dropOrigin: "origin-top",
    pos: "left-0",
    btnWidth: "w-full",
    btnSpacing: "my-3",
    btnInitialText: "Select Category",
    menuWidth: "w-full",
    menuSpacing: "px-5 py-2",
  };

  const subCatMenu = {
    menuItems: subCItems,
    dropOrigin: "origin-top",
    pos: "right-0",
    btnWidth: "w-full",
    btnSpacing: "mb-3",
    menuRef: subC,
    menuWidth: "w-full",
    menuSpacing: "px-4 py-2",
  };

  return (
    <>
      <Header />
      <div className="bg-slate-100 pb-5 mt-[138px]">
        <div className="max-w-[1400px] p-5 relative mx-auto">
          <button
            className="mid2:hidden absolute z-[3] left-0 hover:left-3 duration-300 top-[400px] bg-white shadow-[0px_0.5px_5px_1px] shadow-gray-400 rounded-full p-2"
            onClick={() => {
              setFloatClicked((floatClicked) => !floatClicked);
              setBtnClicked(false);
            }}
          >
            <ArrowsRightLeftIcon className="h-10 text-gray-500" />
          </button>
          <TitleBar title="Product Listing">
            <div className="flex gap-5 mid2:gap-10 items-center">
              <div
                className={classNames(
                  sortMenuShow || btnClicked
                    ? `absolute sm:relative flex right-0 sm:right-auto top-[92px] sm:top-auto p-4 sm:p-0 bg-white gap-3 items-center rounded-lg shadow-[0px_0px_5px_0.5px] shadow-gray-300 sm:shadow-none`
                    : `hidden`
                )}
              >
                <span className="block w-full text-md font-semibold text-gray-600">
                  Sort by:
                </span>
                <Dropdown props={sortMenu}></Dropdown>
              </div>
              <button
                className={classNames(
                  btnClicked
                    ? `bg-[#666f7f]`
                    : `bg-[#8e96a4] hover:bg-[#717c8e]`,
                  `z-0 mid2:hidden rounded-lg p-1.5 overflow-hidden duration-300 shadow-gray-800 shadow-[0px_1px_2px_0px]`
                )}
                onClick={() => {
                  setBtnClicked((btnClicked) => !btnClicked);
                  setFloatClicked(false);
                }}
              >
                <FaBars className="text-3xl text-white"></FaBars>
              </button>
              <div
                className={classNames(
                  btnGroupShow || btnClicked
                    ? `absolute mid2:relative flex gap-3 items-center bg-white right-0 mid2:right-auto top-[176px] sm:top-[92px] mid2:top-auto rounded-lg p-4 mid2:p-0 shadow-[0px_0px_5px_0.5px] shadow-gray-300 mid2:shadow-none`
                    : `hidden`
                )}
              >
                {[tTiles, fTiles, hzTile].map((btn) => (
                  <div
                    key={`btn-${btn}`}
                    className="rounded-md h-[42px] w-[42px] relative flex items-center justify-center bg-white border border-gray-300 hover:border-gray-500 duration-300 hover:cursor-pointer after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-white after:opacity-35 after:rounded-md after:duration-300 hover:after:opacity-15"
                  >
                    <img className="h-8 w-8" src={btn} />
                  </div>
                ))}
              </div>
            </div>
          </TitleBar>
        </div>
        <div className="w-full relative flex gap-x-5 max-w-[92%] sm:max-w-[600px] md:max-w-[1380px] 2xl:max-w-[1400px] sm:px-5 mt-5 mx-auto">
          <SidePanel
            display={classNames(
              panelExpanded || floatClicked ? "block" : "hidden"
            )}
            position="absolute z-[2] mid2:relative top-0 left-0 sm:left-5 mid2:left-0"
            heightOptions="h-full"
            widthOptions="w-full xsm:w-[350px] mid2:w-2/5 lg:w-1/4 min-w-[280px]"
          >
            <p
              style={{ fontFamily: "Ubuntu" }}
              className="text-lg font-bold text-gray-800"
            >
              Categories
            </p>
            <Dropdown props={categoryMenu} />
            {subCShow && <Dropdown props={subCatMenu} />}
            <hr className="border-gray-200 my-3" />
            <p
              style={{ fontFamily: "Ubuntu" }}
              className="text-lg font-bold text-gray-800"
            >
              Price Range
            </p>
            <form className="w-full flex items-center gap-3 my-3">
              <input
                type="number"
                id="pr-min"
                className="w-1/2 border-gray-300 hover:border-gray-500 outline-none focus:ring-0 focus:border-orange-500 focus:shadow-[0px_0px_5px_0px] focus:shadow-gray-500 duration-300 rounded-md"
                placeholder="min"
                onChange={(e) => {
                  const min = e.target.value;
                  const max = minMax[1];
                  setMinMax([min, max]);
                }}
              />
              <hr className="w-3 border border-gray-400" />
              <input
                type="number"
                id="pr-max"
                className="w-1/2 border-gray-300 hover:border-gray-500 outline-none focus:ring-0 focus:border-orange-500 focus:shadow-[0px_0px_5px_0px] focus:shadow-gray-500 duration-300 rounded-md"
                placeholder="max"
                onChange={(e) => {
                  const max = e.target.value;
                  const min = minMax[0];
                  setMinMax([min, max]);
                }}
              />
              <button
                type="submit"
                id="pr-submit"
                disabled={
                  minMax[0] === "" ||
                  minMax[1] === "0" ||
                  minMax[1] === "" ||
                  parseFloat(minMax[0], 10) >= parseFloat(minMax[1], 10)
                }
              >
                <ArrowRightCircleIcon
                  className={classNames(
                    minMax[0] !== "" &&
                      minMax[1] !== "0" &&
                      minMax[1] !== "" &&
                      parseFloat(minMax[0], 10) < parseFloat(minMax[1], 10) &&
                      `hover:text-orange-500`,
                    `text-gray-500 h-12 duration-300`
                  )}
                />
              </button>
            </form>
          </SidePanel>

          <div className="w-full relative mid2:w-3/5 lg:w-3/4 h-full grid grid-cols-2 md:grid-cols-3 mid2:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div
              className={classNames(
                floatClicked ? `flex` : `hidden`,
                `absolute z-[1] w-full h-full bg-black opacity-50 rounded-lg`
              )}
              onClick={() => {
                setFloatClicked((floatClicked) => !floatClicked);
              }}
            ></div>
            {products.map((p) => (
              <ProductTile key={String(p._id)} product={p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
