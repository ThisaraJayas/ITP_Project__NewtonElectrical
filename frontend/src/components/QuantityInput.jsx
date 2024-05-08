import { useState, useRef, useEffect } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function QuantityInput({
  name,
  id,
  min,
  max,
  refInput,
  onInput,
  onDecrease,
  onIncrease,
  disabled,
  defaultValue = 1,
  placeholder = 1,
  width = "w-44",
  paddingY = "py-2",
  cornerRadius = "rounded-lg",
}) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 =
    typeof refInput === "object" && refInput.constructor.name === "Object"
      ? refInput
      : useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const [value, setValue] = useState(defaultValue);

  const useCornerRadius = (cr) => {
    var r = [];
    switch (cr) {
      case "rounded-full":
        r = ["rounded-full", "rounded-l-full", "rounded-r-full"];
        break;
      case "rounded-3xl":
        r = ["rounded-3xl", "rounded-l-3xl", "rounded-r-3xl"];
        break;
      case "rounded-2xl":
        r = ["rounded-2xl", "rounded-l-2xl", "rounded-r-2xl"];
        break;
      case "rounded-xl":
        r = ["rounded-xl", "rounded-l-xl", "rounded-r-xl"];
        break;
      case "rounded-lg":
        r = ["rounded-lg", "rounded-l-lg", "rounded-r-lg"];
        break;
      case "rounded-md":
        r = ["rounded-md", "rounded-l-md", "rounded-r-md"];
        break;
      case "rounded-sm":
        r = ["rounded-sm", "rounded-l-sm", "rounded-r-sm"];
        break;
      case "rounded-none":
        r = ["rounded-none", "rounded-l-none", "rounded-r-none"];
        break;
    }
    return r;
  };

  useEffect(() => {
    if (onInput && typeof onInput === "function") {
      onInput(value);
    }
  }, [value]);

  useEffect(() => {
    if (disabled !== null) {
      if (disabled === true) {
        ref1.current.classList.remove("border-gray-300");
        ref2.current.classList.remove("border-l-gray-300", "border-y-gray-300");
        ref3.current.classList.remove("border-r-gray-300", "border-y-gray-300");
        ref1.current.classList.add("border-gray-200");
        ref2.current.classList.add("border-l-gray-200", "border-y-gray-200");
        ref3.current.classList.add("border-r-gray-200", "border-y-gray-200");

        ref5.current.classList.remove("text-gray-900");
        ref5.current.classList.add("text-gray-500");
        ref7.current.classList.remove("text-gray-900");
        ref7.current.classList.add("text-gray-500");
        ref8.current.classList.remove("text-gray-900");
        ref8.current.classList.add("text-gray-500");

        ref2.current.classList.remove("bg-slate-200");
        ref2.current.classList.add("bg-slate-100");
        ref3.current.classList.remove("bg-slate-200");
        ref3.current.classList.add("bg-slate-100");
        ref6.current.classList.remove("hidden");
        ref6.current.classList.add("block");
      } else {
        ref1.current.classList.remove("border-gray-200");
        ref2.current.classList.remove("border-l-gray-200", "border-y-gray-200");
        ref3.current.classList.remove("border-r-gray-200", "border-y-gray-200");
        ref1.current.classList.add("border-gray-300");
        ref2.current.classList.add("border-l-gray-300", "border-y-gray-300");
        ref3.current.classList.add("border-r-gray-300", "border-y-gray-300");

        ref5.current.classList.remove("text-gray-500");
        ref5.current.classList.add("text-gray-900");
        ref7.current.classList.remove("text-gray-500");
        ref7.current.classList.add("text-gray-900");
        ref8.current.classList.remove("text-gray-500");
        ref8.current.classList.add("text-gray-900");

        ref2.current.classList.remove("bg-slate-100");
        ref2.current.classList.add("bg-slate-200");
        ref3.current.classList.remove("bg-slate-100");
        ref3.current.classList.add("bg-slate-200");
        ref6.current.classList.remove("block");
        ref6.current.classList.add("hidden");
      }
    }
  }, [disabled]);

  return (
    <div
      className={`block relative z-0 ${width} ${
        useCornerRadius(cornerRadius)[0]
      } duration-300`}
      ref={ref4}
      onMouseOver={() => {
        if (disabled !== null && disabled === false) {
          ref1.current.classList.remove("border-gray-300");
          ref1.current.classList.add("border-gray-500");
          ref2.current.classList.remove(
            "border-l-gray-300",
            "border-y-gray-300"
          );
          ref2.current.classList.add("border-l-gray-500", "border-y-gray-500");
          ref3.current.classList.remove(
            "border-r-gray-300",
            "border-y-gray-300"
          );
          ref3.current.classList.add("border-r-gray-500", "border-y-gray-500");
        }
      }}
      onMouseLeave={() => {
        if (disabled !== null && disabled === false) {
          ref1.current.classList.remove("border-gray-500");
          ref1.current.classList.add("border-gray-300");
          ref2.current.classList.remove(
            "border-l-gray-500",
            "border-y-gray-500"
          );
          ref2.current.classList.add("border-l-gray-300", "border-y-gray-300");
          ref3.current.classList.remove(
            "border-r-gray-500",
            "border-y-gray-500"
          );
          ref3.current.classList.add("border-r-gray-300", "border-y-gray-300");
        }
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 z-[-1] h-full w-1/2 bg-white mx-auto border-y border-gray-300 duration-300"
        ref={ref1}
      ></div>

      <button
        className={`absolute ${
          useCornerRadius(cornerRadius)[1]
        } left-0 top-0 h-full bg-slate-200 w-1/4 flex items-center justify-center border border-l-gray-300 border-y-gray-300 border-r-0 duration-300`}
        ref={ref2}
        disabled={disabled}
        onClick={() => {
          const val = ref5.current.value;
          if (min) {
            Number(val) > min && setValue(Number(val) - 1);
          } else {
            setValue(Number(val) - 1);
          }
          if (onDecrease && typeof onDecrease === "function") {
            onDecrease();
          }
        }}
      >
        <MinusIcon ref={ref7} className="h-[22px] text-gray-900"></MinusIcon>
      </button>

      <div
        className={`absolute z-[0] h-[90%] w-[29%] top-[2px] right-[2px] ${
          useCornerRadius(cornerRadius)[2]
        } bg-white hover:cursor-text`}
        onClick={() => {
          ref5.current.focus();
        }}
      ></div>

      <div
        ref={ref6}
        className={`absolute hidden hover:cursor-not-allowed z-[1] w-full h-full bg-transparent ${
          useCornerRadius(cornerRadius)[0]
        }`}
      ></div>

      <input
        ref={ref5}
        type="number"
        name={name}
        id={id}
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={`${paddingY} px-[25%] ml-2 font-semibold text-gray-900 text-center w-full border-none outline-none focus:ring-0 focus:border-none focus:shadow-none duration-300 bg-transparent`}
        onChange={(e) => {
          const val = e.target.value;
          if (Number(val) >= min && Number(val) <= max) {
            setValue(val);
          } else if (min && Number(val) < min) {
            setValue(min);
          } else if (max && Number(val) > max) {
            setValue(max);
          } else {
            setValue(val);
          }
        }}
        onFocus={() => {
          ref4.current.classList.add(
            "shadow-[0px_0px_5px_0px]",
            "shadow-gray-500"
          );
          ref1.current.classList.remove("border-gray-300");
          ref1.current.classList.add("border-orange-500");
          ref2.current.classList.remove(
            "border-l-gray-300",
            "border-y-gray-300"
          );
          ref2.current.classList.add(
            "border-l-orange-500",
            "border-y-orange-500"
          );
          ref3.current.classList.remove(
            "border-r-gray-300",
            "border-y-gray-300"
          );
          ref3.current.classList.add(
            "border-r-orange-500",
            "border-y-orange-500"
          );
        }}
        onBlur={() => {
          ref4.current.classList.remove(
            "shadow-[0px_0px_5px_0px]",
            "shadow-gray-500"
          );
          ref1.current.classList.remove("border-orange-500");
          ref1.current.classList.add("border-gray-300");
          ref2.current.classList.remove(
            "border-l-orange-500",
            "border-y-orange-500"
          );
          ref2.current.classList.add("border-l-gray-300", "border-y-gray-300");
          ref3.current.classList.remove(
            "border-r-orange-500",
            "border-y-orange-500"
          );
          ref3.current.classList.add("border-r-gray-300", "border-y-gray-300");
        }}
      />

      <button
        className={`absolute ${
          useCornerRadius(cornerRadius)[2]
        } top-0 right-0 border border-r-gray-300 border-y-gray-300 border-l-0 h-full bg-slate-200 w-1/4 flex items-center justify-center duration-300`}
        ref={ref3}
        disabled={disabled}
        onClick={() => {
          const val = ref5.current.value;
          if (max) {
            Number(val) < max && setValue(Number(val) + 1);
          } else {
            setValue(Number(val) + 1);
          }
          if (onIncrease && typeof onIncrease === "function") {
            onIncrease();
          }
        }}
      >
        <PlusIcon ref={ref8} className="h-[22px] text-gray-900"></PlusIcon>
      </button>
    </div>
  );
}
