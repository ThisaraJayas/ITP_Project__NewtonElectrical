import { Fragment } from "react";
import { InView } from "react-intersection-observer";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownV2({
  title,
  menuItems,
  display = "inline-block",
  downIcon = true,
  transOrigin = "origin-top-left",
  swidth,
  menuBtnId,
  zIndex,
  glitchFixData,
}) {
  function getMenuTransitions() {
    const trans = {
      enter: "",
      enterFrom: "",
      enterTo: "",
      leave: "",
      leaveFrom: "",
      leaveTo: "",
    };
    if (swidth >= 900) {
      trans.enter = "transition ease-out duration-100";
      trans.enterFrom = "transform opacity-0 scale-95";
      trans.enterTo = "transform opacity-100 scale-100";
      trans.leave = "transition ease-in duration-75";
      trans.leaveFrom = "transform opacity-100 scale-100";
      trans.leaveTo = "transform opacity-0 scale-95";
    } else {
      trans.enter = "transition ease-out duration-500";
      trans.enterFrom = "opacity-0 -translate-y-5";
      trans.enterTo = "opacity-100 translate-y-0";
      trans.leave = "";
      trans.leaveFrom = "";
      trans.leaveTo = "";
    }
    return trans;
  }
  const menuTrans = getMenuTransitions();

  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Menu
          as="div"
          className={"relative w-full mid2:w-1/5 text-left " + display}
        >
          <div>
            <Menu.Button
              id={menuBtnId}
              className={classNames(
                inView
                  ? "bg-orange-400 mid2:bg-[#8696ac]"
                  : "bg-[#a4b0c1] hover:bg-[#95a3b7]",
                "relative inline-flex w-full " +
                  zIndex +
                  " mid2:z-auto justify-start mid2:justify-center gap-x-0.5 px-5 mid2:px-2 py-2 text-md font-semibold text-white shadow-[#828997_0px_1.5px_2px_0.5px] mid2:shadow-sm mid2:shadow-gray-600"
              )}
            >
              <div className="flex w-full justify-between mid2:justify-center gap-0 mid2:gap-1">
                <span>{title}</span>
                {downIcon && (
                  <ChevronDownIcon className="-mr-1 h-6 w-5 text-white" />
                )}
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter={menuTrans.enter}
            enterFrom={menuTrans.enterFrom}
            enterTo={menuTrans.enterTo}
            leave={menuTrans.leave}
            leaveFrom={menuTrans.leaveFrom}
            leaveTo={menuTrans.leaveTo}
          >
            <Menu.Items
              id={inView ? glitchFixData[0] : glitchFixData[1]}
              ref={ref}
              className={
                "relative mid2:absolute mid2:min-w-[208px] mid2:max-w-[208px] mid1:min-w-full mid1:max-w-full left-0 lg:left-auto mt-0 mid2:mt-1.5 overflow-hidden " +
                transOrigin +
                " rounded-none mid2:rounded-md bg-slate-100 mid2:bg-slate-200 shadow-md ring-0 ring-opacity-0 mid2:ring-1 ring-black mid2:ring-opacity-5 mid2:focus:outline-none"
              }
            >
              <div className="py-2 mdsm:py-3 mid2:py-2 px-2 z-0 mdsm:px-3 mid2:px-0 bg-slate-200 mid2:bg-transparent">
                <div className="relative py-2 mid2:py-0 rounded-md mid2:rounded-none bg-slate-100 mid2:bg-slate-200 shadow-[0px_1px_5px_0px] shadow-orange-400 mid2:shadow-none after:block after:absolute after:top-0 after:left-0 after:rounded-t-md after:mid2:hidden after:w-full after:h-2 after:shadow-gray-300 after:shadow-[0px_2px_3px_0.5px]">
                  {menuItems.map((item) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <Link to={item.href}>
                          <span
                            className={classNames(
                              active
                                ? "bg-white mid2:bg-gray-100 text-blue-600"
                                : "text-gray-700",
                              "block px-10 mid2:px-4 py-[6.5px] mid2:py-2 relative z-50 mid2:z-auto text-md font-semibold mid2:font-normal tracking-wide mid2:tracking-normal shadow-gray-300 shadow-[0px_2px_3px_0px] mid2:shadow-none"
                            )}
                          >
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </InView>
  );
}
