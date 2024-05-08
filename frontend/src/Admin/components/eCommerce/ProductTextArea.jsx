import React from "react";

export const ProductTextArea = ({ input, label, style, container }) => {
  return (
    <div
      className={`${input.name ? input.name : ``} ${
        container && container.marginTop ? container.marginTop : ``
      } ${style.container ? style.container : ``}`}
    >
      <label
        htmlFor={input.id}
        className={`text-[#555] ${style.label} m-0 p-0`}
      >
        {label}
      </label>
      <textarea
        id={input.id}
        value={input.value}
        onChange={(e) => {
          if (input.onChange && typeof input.onChange === "function") {
            input.onChange(e);
          }
        }}
        name={input.name}
        placeholder={input.placeholder ? input.placeholder : ``}
        className={`${style.textArea} transition focus:border-blue-400 ring-0 focus:ring-blue-200 focus:ring-[3px] outline-none border-gray-300 hover:border-gray-400 duration-200`}
        // additional styling
      />
    </div>
  );
};
