import React from "react";

export default function SidePanel({
  children,
  widthOptions,
  heightOptions,
  display,
  position,
}) {
  return (
    <div
      className={`${widthOptions} ${heightOptions} ${display} ${position} mid2:duration-300 rounded-lg bg-white shadow-[0px_0px_3px_0.5px] shadow-gray-300 p-5`}
    >
      {children}
    </div>
  );
}
