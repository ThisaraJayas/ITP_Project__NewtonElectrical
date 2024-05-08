import { Fragment, useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./Dropdown.css";

export default function Dropdown({ props }) {
  const { dropDownRef, menu = {}, button = {}, style = {} } = props;
  const [menuBtnText, setMenuBtnText] = useState(
    button.innerText ? button.innerText : menu.listItems.src[0].name
  );

  useEffect(() => {
    button.innerText && setMenuBtnText(button.innerText);
  }, [button.innerText]);

  return (
    <InView>
      {({ inView, ref }) => (
        <Menu
          as="div"
          className={`relative ${
            menu.width ? menu.width : `w-full`
          } inline-block text-left ${button.spacing} border duration-200 ${
            button.cornerRadius ? button.cornerRadius : `rounded-md`
          } ${
            inView
              ? `border-blue-400 ring-[3px] ring-blue-200`
              : `${
                  button.disabled ? `` : `hover:border-gray-400`
                } shadow-none border-gray-300`
          }`}
          ref={dropDownRef}
        >
          <div>
            <Menu.Button
              className={`inline-flex ${
                button.width ? button.width : `w-full`
              } justify-between ${
                button.disabled
                  ? `${
                      button.textColorDisabled
                        ? button.textColorDisabled
                        : `text-[#b8bdc6]`
                    }`
                  : `${button.textColor ? button.textColor : `text-gray-600`}`
              } items-center gap-x-0.5 ${button.spacingX} ${
                button.height ? button.height : button.spacingY
              } text-nowrap font-semibold ${
                style.fontSize
              } hover:brightness-100 ${
                button.disabled ? `bg-[#f2f2f2]` : `bg-white`
              } shadow-none rounded-md outline-none ring-0`}
              disabled={button.disabled ? button.disabled : false}
            >
              <span className="max-w-[95%] overflow-hidden">{menuBtnText}</span>
              <ChevronDownIcon
                className={`-mr-1 h-6 w-5 ${
                  button.disabled
                    ? `${
                        button.textColorDisabled
                          ? button.textColorDisabled
                          : `text-[#b8bdc6]`
                      }`
                    : `${button.textColor ? button.textColor : `text-gray-600`}`
                }`}
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter={menu.transition ? `transition ease-out duration-100` : ``}
            enterFrom={menu.transition ? `transform opacity-0 scale-95` : ``}
            enterTo={menu.transition ? `transform opacity-100 scale-100` : ``}
            leave={menu.transition ? `transition ease-in duration-75` : ``}
            leaveFrom={menu.transition ? `transform opacity-100 scale-100` : ``}
            leaveTo={menu.transition ? `transform opacity-0 scale-95` : ``}
          >
            <Menu.Items
              ref={ref}
              className={`absolute ${menu.position} ${
                menu.listItems.width ? menu.listItems.width : `w-full`
              } z-10 ${menu.gap ? menu.gap : `mt-3`} ${menu.dropOrigin} ${
                menu.cornerRadius ? menu.cornerRadius : `rounded-md`
              } bg-slate-100 ${
                menu.shadow ? menu.shadow : `shadow-md`
              } ring-1 ring-black ring-opacity-5 focus:outline-none ${
                menu.listItems.containerSpacing
              }`}
            >
              <div
                id="menu-listitems"
                className={`${
                  menu.listItems.overflow
                    ? menu.listItems.overflow
                    : `overflow-hidden max-h-[125px]`
                }`}
              >
                {menu.listItems.src.map((item, index) => (
                  <Menu.Item
                    key={`${item.name
                      .substring(0, item.name.length / 2)
                      .replaceAll(" ", "-")}-${index}`}
                  >
                    <span
                      className={`${
                        menu.listItems && menu.listItems.textColor
                          ? menu.listItems.textColor
                          : `text-gray-700`
                      } ${
                        menu.listItems && menu.listItems.hoverColor
                          ? menu.listItems.hoverColor
                          : `hover:bg-white`
                      } ${
                        menu.listItems && menu.listItems.hoverTextColor
                          ? menu.listItems.hoverTextColor
                          : `hover:text-orange-600`
                      } ${menu.listItems.spacing} block ${style.fontSize} ${
                        menu.listItems.fontWeight
                          ? menu.listItems.fontWeight
                          : `font-[400]`
                      } text-nowrap overflow-hidden cursor-pointer`}
                      onClick={(e) => {
                        setMenuBtnText(e.target.innerText);
                        item.action &&
                          typeof item.action === "function" &&
                          item.action();
                        button.getBtnText &&
                          typeof button.getBtnText === "function" &&
                          button.getBtnText(item.static);
                      }}
                    >
                      {item.name}
                    </span>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </InView>
  );
}
