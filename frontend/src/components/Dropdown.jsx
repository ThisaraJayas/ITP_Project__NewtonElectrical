import { Fragment } from "react";
import { InView } from "react-intersection-observer";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ title, menuItems }) {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className={classNames(
                inView
                  ? "bg-[#f1f2f4] shadow-sm"
                  : "hover:bg-[#e2e5e9] hover:shadow-sm",
                "inline-flex w-full justify-center gap-x-0.5 rounded-md p-2 text-md font-semibold text-gray-600"
              )}
            >
              {title}
              <ChevronDownIcon className="-mr-1 h-6 w-5 text-gray-600" />
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
              className={
                "absolute left-0 z-10 mt-3 w-52 origin-top-left rounded-md bg-slate-200 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              }
            >
              <div className="py-2">
                {menuItems.map((item) => (
                  <Menu.Item key={item.id}>
                    {({ active }) => (
                      <Link to={item.href}>
                        <span
                          className={classNames(
                            active
                              ? "bg-gray-100 text-blue-600"
                              : "text-gray-700",
                            "block px-4 py-2 text-md"
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )}
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
