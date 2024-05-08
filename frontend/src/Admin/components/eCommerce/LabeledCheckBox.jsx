import React from "react";

export const LabeledCheckBox = ({ container, input, style = {} }) => {
  return (
    <div
      className={`flex items-center ${
        style.labelGap ? style.labelGap : `gap-x-3`
      } ${container && container.marginTop ? container.marginTop : ``}`}
    >
      <input
        type="checkbox"
        name={input.checkBox.name}
        id={input.checkBox.id}
        className={`${style.checkSize ? style.checkSize : `w-4 h-4`}`}
        checked={input.checkBox.checked}
        disabled={input.checkBox.disabled}
        onChange={() => {
          if (
            input.checkBox &&
            input.checkBox.onChange &&
            typeof input.checkBox.onChange === "function"
          ) {
            input.checkBox.onChange();
          }
        }}
      />
      <label
        className={`font-semibold text-[#555] ${
          style.fontSize ? style.fontSize : `text-[16px]`
        } ${style.fontWeight ? style.fontWeight : `font-bold`} p-0 m-0`}
        htmlFor={input.checkBox.id}
      >
        {input.label}
      </label>
    </div>
  );
};
