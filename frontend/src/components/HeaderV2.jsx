import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState, Fragment } from "react";
import { InView } from "react-intersection-observer";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";
import DropdownV2 from "./DropdownV2";

import logo from "../assets/logo-newton.png";
import exlogo from "../assets/logo-expanded-trans.png";
import propic from "../assets/profile-photo-1.jpg";
import defuser from "../assets/default-user.png";

export default function Header({ headerRef }) {
  const services = [
    { id: 1, name: "Air conditioning", href: "/services/air-conditioning" },
    { id: 2, name: "Electrical wiring", href: "/services/electrical-wiring" },
    { id: 3, name: "CCTV installation", href: "services/cctv-installation" },
    {
      id: 4,
      name: "Lightning protection",
      href: "services/lightning-protection",
    },
    { id: 5, name: "Service packages", href: "services/packages" },
  ];
  const careers = [
    { id: 1, name: "Technicians", href: "/careers/technicians" },
    { id: 2, name: "Join our team", href: "/careers/apply" },
    { id: 3, name: "Job opportunities", href: "/careers/opportunities" },
  ];
  const userprofile = [
    { id: 1, name: "Profile", href: "/my/profile" },
    { id: 2, name: "Messages", href: "/my/messages" },
    { id: 3, name: "My orders", href: "/my/orders" },
    { id: 4, name: "My appointments", href: "/my/appointments" },
    { id: 5, name: "Account settings", href: "/my/account/settings" },
  ];

  const [subMenuVisible, setSmVisibility] = useState(false);
  // user logged in status
  const userLoggedIn = true;
  const username = "gtaloverhp615";
  const [expanded, setExpanded] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function handleClick() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  function handleResize() {
    if (window.innerWidth >= 1400) {
      setExpanded(false);
    } else {
      // Fix - stops menus from flashing during resize
      const idList = [
        ["res-dmenu", "shownBefore"],
        ["ms-inview", "ms-hidden"],
        ["mc-inview", "mc-hidden"],
      ];
      for (var i = 0; i < idList.length; i++) {
        const y = document.getElementById(idList[i][1]);
        if (y) {
          y.style.display = "none";
        }
      }
    }
    if (window.innerWidth >= 900) setSmVisibility(true);
  }

  function handleSubMenu() {
    window.innerWidth < 900 && subMenuVisible
      ? setSmVisibility(false)
      : setSmVisibility(true);
  }

  function handleSubMenuEx(activeMenuBtnId) {
    useLayoutEffect(() => {
      function runWait() {
        const activeMenuBtn = document.getElementById(activeMenuBtnId);
        if (activeMenuBtn) {
          activeMenuBtn.addEventListener("click", () => {
            if (window.innerWidth < 900) setSmVisibility(false);
          });
        }
      }
      window.addEventListener("load", runWait);
      runWait();
      return () => window.removeEventListener("load", runWait);
    }, []);
  }

  function getSmTransitions() {
    const swidth = window.innerWidth;
    const trans = {
      enter: "transition ease-out duration-300",
      enterFrom: "opacity-0 -translate-y-[75px]",
      enterTo: "opacity-100 translate-y-0",
      leave: "",
      leaveFrom: "",
      leaveTo: "",
    };
    if (swidth >= 730) {
      trans.enter = "";
      trans.enterFrom = "";
      trans.enterTo = "";
      trans.leave = "";
      trans.leaveFrom = "";
      trans.leaveTo = "";
    }
    return trans;
  }
  const smTrans = getSmTransitions();

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header ref={headerRef} className="w-full fixed">
      <div
        id="header-main"
        className={classNames(
          expanded ? "shadow-gray-500 lg:shadow-gray-600" : "shadow-gray-400",
          "bg-gray-300 relative z-[100] shadow-[0px_1.5px_7.5px_0px]"
        )}
      >
        <div className="flex max-w-[92.5%] lg:max-w-[1280px] 2xl:max-w-[1400px] justify-between items-center h-20 mx-auto px-0 lg:px-2 py-2">
          <div className="hidden lg:inline ml-5 2xl:ml-3">
            <Link to="/">
              <img
                src={logo}
                width="175"
                alt="Newton Electricals"
                title="Newton Electricals"
              />
            </Link>
          </div>

          <div className="inline ml-5 lg:hidden">
            <Link to="/">
              <img
                src={exlogo}
                width="325"
                alt="Newton Electricals"
                title="Newton Electricals"
              />
            </Link>
          </div>

          <div className="hidden 2xl:flex gap-3">
            <Dropdown title="Services" menuItems={services}></Dropdown>
            <Dropdown title="Careers" menuItems={careers}></Dropdown>
            <Link to="/projects">
              <button className="rounded-md p-2 text-md font-semibold text-gray-600 hover:bg-[#e2e5e9] hover:shadow-sm">
                Projects
              </button>
            </Link>
            <Link to="/about">
              <button className="rounded-md p-2 text-md font-semibold text-gray-600 hover:bg-[#e2e5e9] hover:shadow-sm">
                About
              </button>
            </Link>
          </div>

          <form className="hidden lg:flex w-[328px] bg-slate-200 pl-3 pr-1 rounded-lg items-center shadow-md">
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent focus:outline-none my-3 flex-grow placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="flex justify-center items-center rounded-md border-2 border-slate-200 h-10 w-10 bg-slate-300"
            >
              <FaSearch className="text-gray-500" />
            </button>
          </form>

          <div className="hidden lg:flex px-[2px] gap-5 w-1/3 2xl:w-auto">
            <Link
              to="/buy"
              className="rounded-lg h-auto flex-grow text-white text-nowrap text-center font-semibold text-md px-4 py-3 bg-blue-600 hover:bg-blue-700 shadow-[0px_1px_2px_0px] shadow-gray-800"
            >
              Buy Online
            </Link>
            <Link
              to="/appointments/schedule"
              className="rounded-lg h-auto flex-grow text-white text-nowrap text-center font-semibold text-md px-4 py-3 bg-orange-500 hover:bg-orange-600 shadow-[0px_1px_2px_0px] shadow-gray-800"
            >
              Schedule Appointment
            </Link>
          </div>

          <button
            onClick={() => handleClick()}
            className={classNames(
              expanded ? "bg-[#8996a9]" : "bg-[#a6b0bf] hover:bg-[#97a3b4]",
              "flex 2xl:hidden items-center p-3 rounded-lg mr-5 shadow-sm"
            )}
          >
            <FaBars className="text-gray-800 text-2xl" />
          </button>

          <InView>
            {({ inView, ref, entry }) => (
              <Menu
                as="div"
                className="relative hidden 2xl:inline-block text-left"
              >
                <div>
                  <Menu.Button className="flex mr-3 3xl:mr-0">
                    {!userLoggedIn && (
                      <div
                        style={{ backgroundImage: "url(" + defuser + ")" }}
                        className={classNames(
                          inView
                            ? "after:block after:h-14 after:w-14 after:bg-white after:bg-opacity-35 after:rounded-full"
                            : "after:block after:h-14 after:w-14 after:bg-white after:bg-opacity-55 after:rounded-full hover:after:block hover:after:h-14 hover:after:w-14 hover:after:bg-white hover:after:bg-opacity-45 hover:after:rounded-full",
                          "h-14 w-14 bg-cover shadow-[0px_1px_1.5px_0px] shadow-gray-600 rounded-full"
                        )}
                      ></div>
                    )}
                    {userLoggedIn && (
                      <div
                        style={{ backgroundImage: "url(" + propic + ")" }}
                        className={classNames(
                          inView
                            ? "after:block after:h-16 after:w-16 after:-ml-1 after:-mt-1 after:rounded-full after:border-blue-500 after:border-2"
                            : "hover:after:block hover:after:h-16 hover:after:w-16 hover:after:-ml-1 hover:after:-mt-1 hover:after:rounded-full hover:after:border-blue-400 hover:after:border-2",
                          "h-14 w-14 bg-cover shadow-[0px_1px_1.5px_0px] shadow-gray-600 hover:shadow-none rounded-full"
                        )}
                      ></div>
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    ref={ref}
                    className={classNames(
                      userLoggedIn
                        ? "min-w-48 max-w-48"
                        : "min-w-56 max-w-56 text-center",
                      "absolute right-0 z-10 mt-1 overflow-hidden origin-top-right bg-slate-100 rounded-md shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                    )}
                  >
                    <span className="block py-1.5 px-5 bg-slate-200">
                      {userLoggedIn ? (
                        <span className="tracking-wider text-sm">
                          <span className="font-semibold">Welcome back,</span>{" "}
                          <span className="font-bold">{username}</span>
                          <span className="font-semibold">!</span>
                        </span>
                      ) : (
                        <span className="tracking-wider text-sm font-semibold">
                          Newton Electricals <br /> welcomes you!
                        </span>
                      )}
                    </span>
                    {userLoggedIn && (
                      <hr className="border-gray-300 border-t-1" />
                    )}
                    {userLoggedIn &&
                      userprofile.map((item) => (
                        <Menu.Item key={item.id}>
                          {({ active }) => (
                            <Link to={item.href}>
                              <span
                                className={classNames(
                                  active
                                    ? "bg-white text-blue-600"
                                    : "text-gray-700",
                                  "block px-5 py-2 text-sm tracking-wider font-semibold"
                                )}
                              >
                                {item.name}
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    <hr className="border-gray-300 border-t-1 pb-3" />
                    <div
                      className={classNames(
                        userLoggedIn ? "justify-start px-5" : "justify-center",
                        "flex pb-3 gap-3"
                      )}
                    >
                      <Menu.Item>
                        <Link to={!userLoggedIn ? "/log-in" : "/log-out"}>
                          <button
                            className={classNames(
                              !userLoggedIn
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-red-500 hover:bg-red-600",
                              "rounded-lg text-white font-semibold text-nowrap text-md px-5 py-2 shadow-[0px_1px_2px_0px] shadow-gray-600"
                            )}
                          >
                            {!userLoggedIn ? "Log In" : "Log out"}
                          </button>
                        </Link>
                      </Menu.Item>
                      {!userLoggedIn && (
                        <Menu.Item>
                          <Link to="/sign-up">
                            <button className="rounded-lg text-white font-semibold text-nowrap text-md px-5 py-2 bg-blue-600 hover:bg-blue-700 shadow-[0px_1px_2px_0px] shadow-gray-600">
                              Sign Up
                            </button>
                          </Link>
                        </Menu.Item>
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </InView>
        </div>
      </div>
      <div
        className={classNames(
          window.innerWidth >= 1400
            ? "hidden"
            : classNames(expanded ? "block" : "hidden", "relative z-[99]")
        )}
        id="header-expanded"
      >
        <div className="bg-gray-400 relative h-full flex z-[100] lg:hidden shadow-sm shadow-gray-600 border-none border-gray-400 after:hidden after:absolute after:w-full after:z-[42] after:h-full after:bg-white after:bg-opacity-30 after:lg:hidden">
          <div className="flex flex-wrap sm:flex-nowrap py-3 lg:hidden gap-x-5 gap-y-3 sm:gap-y-0 justify-center sm:justify-between items-center w-[90%] sm:w-[80%] z-[43] overflow-hidden mx-auto">
            <form className="flex sm:flex-grow mid2:flex-grow-0 w-3/4 mid2:w-1/2 min-w-[250px] bg-slate-200 pl-3 pr-1 rounded-lg items-center shadow-md">
              <input
                type="text"
                placeholder="Search anything..."
                className="bg-transparent focus:outline-none my-3 flex-grow placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="flex justify-center items-center rounded-md border-2 border-slate-200 h-10 w-10 bg-slate-300"
              >
                <FaSearch className="text-gray-500" />
              </button>
            </form>
            <div className="flex gap-5 sm:gap-4 md:gap-5 w-[85%] sm:w-auto px-[2px]">
              <Link
                to="/buy"
                className="h-auto flex-grow rounded-lg text-white font-semibold text-nowrap text-md text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 shadow-[0px_1px_2px_0px] shadow-gray-800"
              >
                Buy Online
              </Link>
              <Link
                to="/appointments/schedule"
                className="h-auto flex-grow rounded-lg text-white font-semibold text-nowrap text-md text-center px-4 py-3 bg-orange-500 hover:bg-orange-600 shadow-[0px_1px_2px_0px] shadow-gray-800"
              >
                <span>Schedule</span>{" "}
                <span className="sm:hidden md:inline">Appointment</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#747c8b] relative w-full z-[99] shadow-md after:hidden after:absolute after:w-full after:z-[32] after:h-full after:bg-white after:bg-opacity-10 after:lg:bg-opacity-30 after:2xl:hidden">
          <div className="flex w-[95%] mdsm:w-[90%] xl:w-[85%] items-center mx-auto p-3 z-[34]">
            <div className="flex flex-wrap mid2:flex-nowrap 2xl:hidden w-full justify-between items-center">
              <InView>
                {({ inView, ref, entry }) => (
                  <Menu
                    as="div"
                    className="block relative w-full mid2:w-1/5 text-left"
                  >
                    <div>
                      <Menu.Button
                        className={classNames(
                          inView
                            ? "bg-orange-400 mid2:bg-[#8696ac]"
                            : "bg-[#a4b0c1] hover:bg-[#95a3b7]",
                          "relative inline-flex rounded-tl-lg rounded-bl-none mid2:rounded-bl-lg rounded-tr-lg mid2:rounded-tr-none w-full z-[9] justify-start mid2:justify-center gap-x-0.5 px-5 mid2:px-2 py-2 text-md font-semibold text-white shadow-[#828997_0px_1.5px_2px_0.5px] mid2:shadow-sm mid2:shadow-gray-600"
                        )}
                        onClick={() => {
                          if (window.innerWidth < 900) setSmVisibility(false);
                        }}
                      >
                        <div className="flex w-full justify-between mid2:justify-center gap-0 mid2:gap-1">
                          <span>Account</span>
                          <ChevronDownIcon className="-mr-1 h-6 w-5 text-white" />
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter={
                        window.innerWidth >= 900
                          ? "transition ease-out duration-100"
                          : "transition ease-out duration-500"
                      }
                      enterFrom={
                        window.innerWidth >= 900
                          ? "transform opacity-0 scale-95"
                          : "opacity-0 -translate-y-5"
                      }
                      enterTo={
                        window.innerWidth >= 900
                          ? "transform opacity-100 scale-100"
                          : "opacity-100 translate-y-0"
                      }
                      leave={
                        window.innerWidth >= 900
                          ? "transition ease-in duration-75"
                          : ""
                      }
                      leaveFrom={
                        window.innerWidth >= 900
                          ? "transform opacity-100 scale-100"
                          : ""
                      }
                      leaveTo={
                        window.innerWidth >= 900
                          ? "transform opacity-0 scale-95"
                          : ""
                      }
                    >
                      <Menu.Items
                        id={inView ? "res-dmenu" : "shownBefore"}
                        ref={ref}
                        className={classNames(
                          userLoggedIn
                            ? "text-left mid2:min-w-[208px] mid2:max-w-[208px] mid1:min-w-full mid1:max-w-full"
                            : "text-center mid2:min-w-[224px] mid2:max-w-[224px]",
                          "relative mid2:absolute min-w-full max-w-full left-0 lg:left-auto z-[8] mt-0 mid2:mt-1.5 overflow-hidden origin-top-left mid1:origin-top bg-slate-100 rounded-none mid2:rounded-md shadow-md ring-0 ring-opacity-0 mid2:ring-1 ring-black mid2:ring-opacity-5 mid2:focus:outline-none"
                        )}
                      >
                        <div
                          className={classNames(
                            userLoggedIn
                              ? classNames(
                                  subMenuVisible ? "mdsm:px-0" : "mdsm:px-3",
                                  "h-auto mid2:h-full px-2"
                                )
                              : "h-32 sm:h-28 px-2 mdsm:px-3 mid2:px-0",
                            "flex flex-col mdsm:flex-row mid2:flex-col py-2 mdsm:py-3 mid2:py-0 mid2:h-auto w-auto xl:w-full justify-evenly items-center mid2:items-stretch bg-slate-200 mid2:bg-transparent"
                          )}
                        >
                          <div
                            className={classNames(
                              userLoggedIn
                                ? classNames(
                                    subMenuVisible
                                      ? "mdsm:block mdsm:w-1/3"
                                      : "",
                                    "w-full mid2:w-full h-full max-h-[200px]"
                                  )
                                : "mid2:block mid2:h-full w-full h-full",
                              "relative z-50 flex mid2:h-auto rounded-md mid2:shadow-none shadow-[0px_1px_5px_0px] shadow-orange-400 mid2:rounded-none"
                            )}
                          >
                            <span
                              className={classNames(
                                userLoggedIn
                                  ? classNames(
                                      subMenuVisible
                                        ? "mdsm:border-r-0 mdsm:border-b-[1px] mdsm:rounded-tr-md mdsm:rounded-b-none"
                                        : "",
                                      "border-r-[1px] border-b-0 mid2:border-none h-auto max-h-[85px] mid2:max-h-[60px] w-full rounded-tl-md mid2:rounded-t-none rounded-bl-md"
                                    )
                                  : "h-full border-r-[1px] mid2:border-none mid2:h-auto w-[40%] sm:w-[35%] mid2:w-full rounded-l-md mid2:rounded-l-none",
                                "flex items-center justify-center mid2:block overflow-hidden text-center mid2:text-left py-[18px] mid2:py-1.5 px-5 bg-slate-100 mid2:bg-slate-200 border-gray-300"
                              )}
                            >
                              {userLoggedIn ? (
                                <span className="tracking-wider text-md mid2:text-sm">
                                  <span className="font-semibold">
                                    Welcome back,
                                  </span>{" "}
                                  <span className="font-bold">{username}</span>
                                  <span className="font-semibold">!</span>
                                </span>
                              ) : (
                                <span
                                  className={classNames(
                                    userLoggedIn
                                      ? "text-md inline text-left py-0 leading-normal"
                                      : "block text-center py-0 mid2:py-1",
                                    "tracking-wider sm:text-sm font-semibold"
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      window.innerWidth >= 540
                                        ? "text-md"
                                        : "text-sm"
                                    )}
                                  >
                                    Newton Electricals <br /> welcomes you!
                                  </span>
                                </span>
                              )}
                            </span>
                            <hr className="hidden mid2:block border-gray-300 border-t-1" />
                            <div
                              className={classNames(
                                userLoggedIn
                                  ? classNames(
                                      subMenuVisible
                                        ? "mdsm:justify-evenly mdsm:py-5 mdsm:h-1/2 mdsm:w-full mdsm:rounded-tr-none mdsm:rounded-b-md"
                                        : "",
                                      "justify-between py-0 mid2:justify-center h-auto mid2:h-auto min-w-[55%] rounded-tr-md rounded-bl-none rounded-br-md mid2:rounded-b-none"
                                    )
                                  : "justify-between py-0 mid2:justify-center h-full mid2:h-auto w-[60%] sm:w-[65%] mid2:w-full rounded-r-md mid2:rounded-r-none",
                                "flex items-center mid2:py-3 bg-white mid2:bg-slate-100"
                              )}
                            >
                              {userLoggedIn ? (
                                <div
                                  className={classNames(
                                    subMenuVisible
                                      ? "mdsm:py-0 mdsm:h-auto mdsm:w-auto mdsm:border-r-0"
                                      : "",
                                    "flex items-center py-3 justify-center h-full w-4/5 border-r-[1px] border-gray-300"
                                  )}
                                >
                                  <div
                                    onClick={() => handleSubMenu()}
                                    style={{
                                      backgroundImage: "url(" + propic + ")",
                                    }}
                                    className={classNames(
                                      subMenuVisible
                                        ? "after:block mid2:after:hidden after:h-16 after:w-16 after:-mt-1 after:-ml-1 after:rounded-full after:border-orange-400 after:border-2"
                                        : "hover:after:block mid2:hover:after:hidden hover:after:h-16 hover:after:w-16 hover:after:-mt-1 hover:after:-ml-1 hover:after:rounded-full hover:after:border-orange-300 hover:after:border-2",
                                      "h-14 w-14 bg-cover rounded-full cursor-pointer mid2:cursor-auto shadow-[0px_1px_1.5px_0px] shadow-gray-600 hover:shadow-none"
                                    )}
                                  ></div>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-full mid2:h-auto w-[45%] sm:w-[30%] mid2:w-auto border-r-[1px] mid2:border-r-0 border-gray-300">
                                  <div
                                    style={{
                                      backgroundImage: "url(" + defuser + ")",
                                    }}
                                    className={
                                      "h-14 w-14 bg-cover rounded-full shadow-[0px_1px_1.5px_0px] shadow-gray-600 after:block after:h-14 after:w-14 after:bg-white after:bg-opacity-55 after:rounded-full"
                                    }
                                  ></div>
                                </div>
                              )}
                              <div
                                className={classNames(
                                  userLoggedIn
                                    ? classNames(
                                        subMenuVisible
                                          ? "mdsm:min-w-max mdsm:justify-normal"
                                          : "",
                                        "min-w-[55%] justify-center"
                                      )
                                    : "flex-wrap flex-grow px-6 sm:px-4 mdsm:px-6 w-[55%] sm:w-[70%] items-center justify-center",
                                  "flex mid2:hidden gap-3"
                                )}
                              >
                                <Menu.Item>
                                  <Link
                                    to={userLoggedIn ? "/log-out" : "/log-in"}
                                    className={classNames(
                                      userLoggedIn
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-blue-600 hover:bg-blue-700 flex-grow",
                                      "rounded-lg text-white font-semibold text-center text-nowrap text-md px-5 py-2 shadow-[0px_1px_2px_0px] shadow-gray-600"
                                    )}
                                  >
                                    {userLoggedIn ? "Log out" : "Log In"}
                                  </Link>
                                </Menu.Item>
                                {!userLoggedIn && (
                                  <Menu.Item>
                                    <Link
                                      to="/sign-up"
                                      className="flex-grow rounded-lg text-white text-center text-md text-nowrap font-semibold px-5 py-2 shadow-[0px_1px_2px_0px] shadow-gray-600 bg-blue-600 hover:bg-blue-700"
                                    >
                                      Sign Up
                                    </Link>
                                  </Menu.Item>
                                )}
                              </div>
                            </div>
                          </div>
                          {userLoggedIn && (
                            <hr className="hidden mid2:block border-gray-300 border-t-1" />
                          )}
                          {userLoggedIn && (
                            <Transition
                              show={subMenuVisible}
                              as={Fragment}
                              enter={smTrans.enter}
                              enterFrom={smTrans.enterFrom}
                              enterTo={smTrans.enterTo}
                              leave={smTrans.leave}
                              leaveFrom={smTrans.leaveFrom}
                              leaveTo={smTrans.leaveTo}
                            >
                              <div className="w-full mdsm:w-[61.5%] mid2:w-full mid2:bg-transparent mt-2 mdsm:mt-0 py-2 mid2:py-0 relative z-auto rounded-md mid2:rounded-none bg-slate-100 shadow-[0px_1px_5px_0px] shadow-orange-400 mid2:shadow-none after:block after:absolute after:top-0 after:left-0 after:rounded-t-md after:mid2:hidden after:w-full after:h-2 after:shadow-[rgba(107,114,128,0.25)_0px_2px_4px_0px]">
                                {userprofile.map((item) => (
                                  <Menu.Item key={item.id}>
                                    {({ active }) => (
                                      <Link to={item.href}>
                                        <span
                                          className={classNames(
                                            active
                                              ? "bg-white text-blue-600"
                                              : "text-gray-700",
                                            "block px-10 mid2:px-5 py-[6.5px] relative z-50 text-md mdsm:text-sm tracking-wide mdsm:tracking-wider font-semibold shadow-gray-300 shadow-[0px_2px_3px_0px] mid2:shadow-none"
                                          )}
                                        >
                                          {item.name}
                                        </span>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Transition>
                          )}
                        </div>
                        <hr className="hidden mid2:block border-gray-300 border-t-1" />
                        <div
                          className={classNames(
                            userLoggedIn
                              ? "justify-start px-5"
                              : "justify-center",
                            "hidden mid2:flex py-3 gap-3"
                          )}
                        >
                          <Menu.Item>
                            <Link to={!userLoggedIn ? "/log-in" : "/log-out"}>
                              <button
                                className={classNames(
                                  !userLoggedIn
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-red-500 hover:bg-red-600",
                                  "rounded-lg text-white font-semibold text-nowrap text-md px-5 py-2 shadow-[0px_1px_2px_0px] shadow-gray-600"
                                )}
                              >
                                {!userLoggedIn ? "Log In" : "Log out"}
                              </button>
                            </Link>
                          </Menu.Item>
                          {!userLoggedIn && (
                            <Menu.Item>
                              <Link to="/sign-up">
                                <button className="rounded-lg text-white font-semibold text-nowrap text-md px-5 py-2 bg-blue-600 hover:bg-blue-700 shadow-[0px_1px_2px_0px] shadow-gray-600">
                                  Sign Up
                                </button>
                              </Link>
                            </Menu.Item>
                          )}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </InView>
              <DropdownV2
                title="Services"
                menuItems={services}
                display="inline-block"
                swidth={window.innerWidth}
                menuBtnId="menu-srv"
                zIndex="z-[8]"
                glitchFixData={["ms-inview", "ms-hidden"]}
                transOrigin="origin-top-left mid1:origin-top"
              ></DropdownV2>
              <DropdownV2
                title="Careers"
                menuItems={careers}
                display="inline-block"
                swidth={window.innerWidth}
                menuBtnId="menu-car"
                zIndex="z-[7]"
                glitchFixData={["mc-inview", "mc-hidden"]}
                transOrigin="origin-top-left mid1:origin-top"
              ></DropdownV2>
              {handleSubMenuEx("menu-srv")}
              {handleSubMenuEx("menu-car")}
              <Link to="/projects" className="w-full mid2:w-1/5">
                <button className="relative z-[6] mid2:z-20 py-2 px-5 mid2:px-2 w-full text-md text-left mid2:text-center font-semibold text-white bg-[#a4b0c1] hover:bg-[#95a3b7] shadow-[#828997_0px_1.5px_2px_0.5px] mid2:shadow-sm mid2:shadow-gray-600">
                  Projects
                </button>
              </Link>
              <Link to="/about" className="w-full mid2:w-1/5">
                <button className="relative z-[5] py-2 px-5 mid2:px-2 w-full rounded-br-lg rounded-tr-none mid2:rounded-tr-lg rounded-bl-lg mid2:rounded-bl-none text-md text-left mid2:text-center font-semibold text-white bg-[#a4b0c1] hover:bg-[#95a3b7] shadow-[#828997_0px_1.5px_2px_0.5px] mid2:shadow-sm mid2:shadow-gray-600">
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
