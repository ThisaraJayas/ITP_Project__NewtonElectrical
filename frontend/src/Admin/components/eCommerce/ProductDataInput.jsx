import React from "react";

export const ProductDataInput = ({
  container = {},
  input,
  label = {},
  style = {},
}) => {
  return (
    <div
      className={`${input.name ? input.name : ``} ${
        container && container.marginTop ? container.marginTop : ``
      } ${style && style.container ? style.container : ``} w-full`}
    >
      <label
        className={`text-[#555] ${
          style && style.font ? style.font : `font-bold`
        } m-0 p-0"`}
        htmlFor={input.id}
        style={{
          fontSize:
            style && style.textSize
              ? style.labelTextSize
                ? style.labelTextSize
                : style.textSize
              : "16px",
        }}
      >
        {label.brief}
        {label.details}
      </label>
      <input
        ref={
          input.ref && typeof input.ref === "function"
            ? (i) => i && input.ref(i)
            : input.ref
        }
        type={input.type}
        id={input.id}
        name={input.name}
        value={input.value}
        min={input.min}
        max={input.max}
        step={input.step}
        accept={input.accept}
        placeholder={input.placeholder}
        onChange={(e) => {
          if (input.onChange && typeof input.onChange === "function") {
            input.onChange(e);
          }
        }}
        required={input.required}
        disabled={input.disabled}
        autoComplete={input.autoComplete}
        style={{
          fontSize: `${style && style.textSize ? style.textSize : `16px`}`,
          height: `${input.height ? input.height : `auto`}`,
          width: `${input.width ? input.width : `100%`}`,
          padding: `${input.padding ? input.padding : `10px`}`,
          borderRadius: `${input.borderRadius ? input.borderRadius : `6px`}`,
          marginTop: `${input.marginTop ? input.marginTop : `0px`}`,
        }}
        className={`${
          style.error
            ? `focus:ring-red-200`
            : `focus:border-blue-400 focus:ring-blue-200`
        } focus:ring-[3px] ring-0 outline-none border ${
          style.error ? `border-red-500` : `border-gray-300`
        } ${
          input.disabled
            ? `bg-[#f2f2f2]`
            : `${!style.error ? `hover:border-gray-400` : ``}`
        } duration-200`} // additional styling
      />
    </div>
  );
};
