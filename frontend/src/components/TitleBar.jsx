import React from "react";

export default function TitleBar({
  title,
  cornerRadius = "rounded-lg",
  backgroundColor = "bg-white",
  children,
  padding = "p-5",
  fontFamily = "Ubuntu",
  textOptions = "text-xl font-bold text-gray-800",
  shadowOptions = "shadow-[0px_0px_5px_0.5px] shadow-gray-300",
}) {
  return (
    <div
      className={`relative z-[1] flex justify-between items-center w-full ${cornerRadius} ${padding} ${backgroundColor} ${shadowOptions}`}
    >
      <p style={{ fontFamily: fontFamily }} className={`${textOptions}`}>
        {title}
      </p>
      {children}
    </div>
  );
}
