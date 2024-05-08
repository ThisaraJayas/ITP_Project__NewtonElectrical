import { ProductDataInput } from "./ProductDataInput";
import { ProductTextArea } from "./ProductTextArea";
import { HorizontalButtonView } from "./HorizontalButtonView";
import { useEffect } from "react";

export const ProductServicesInput = ({ style, data, actions, conditions }) => {
  useEffect(() => {
    if (
      conditions.disabled &&
      actions.onDisabled &&
      typeof actions.onDisabled === "function"
    ) {
      actions.onDisabled();
    }
  }, [conditions.disabled]);

  return (
    <div
      className={`${
        data.container && data.container.name ? data.container.name : ``
      } ${
        data.container && data.container.marginTop
          ? data.container.marginTop[0]
          : ``
      }`}
    >
      {style.mode !== `RESPONSIVE` && data.title && data.title.introText}
      {style.mode !== `RESPONSIVE` && data.title && data.title.brief}

      {conditions && !conditions.open && (
        <div
          className={`${
            style.mode === `RESPONSIVE`
              ? `shadow-[0px_0px_2px_0.5px] shadow-gray-400 p-4 rounded-lg`
              : ``
          }`}
        >
          {style.mode === `RESPONSIVE` && data.title && data.title.brief}
          <button
            type="button"
            className={`${
              conditions && conditions.disabled
                ? `bg-[#b8bdc6]`
                : `bg-gray-400 hover:bg-gray-500`
            } text-white rounded-md py-1 px-4 mt-4 duration-300`}
            onClick={() => {
              if (
                actions &&
                actions.open &&
                typeof actions.open === "function"
              ) {
                actions.open();
              }
            }}
            disabled={conditions && conditions.disabled}
          >
            Add a service
          </button>
        </div>
      )}

      {conditions && conditions.open && (
        <div
          className={`w-full p-4 rounded-lg ${
            data.container &&
            data.container.marginTop &&
            data.container.marginTop.length > 1
              ? data.container.marginTop[1]
              : ``
          } ${
            style.mode === `RESPONSIVE`
              ? `shadow-[0px_0px_2px_0.5px] shadow-gray-400`
              : `border border-gray-300`
          }`}
        >
          {data.name && (
            <ProductDataInput
              input={data.name.input}
              label={data.name.label}
              style={data.name.style}
              container={data.name.container}
            />
          )}
          <div className="flex items-center justify-between mt-2">
            <p
              className={`text-[#555] text-left font-semibold text-nowrap`}
              style={{ fontSize: style.textSize }}
            >
              Provided for:
            </p>
            <div
              className={`flex justify-between py-2 ${
                style.mode !== `RESPONSIVE` ? `w-[60%]` : `w-[65%]`
              }`}
            >
              {data.deliveryModes &&
                data.deliveryModes.map((mode, index) => (
                  <label
                    htmlFor={mode.input.id}
                    key={`${index}-${mode.input.name}`}
                    style={{ fontSize: style.textSize }}
                    className="flex items-center gap-x-2 font-semibold text-gray-500 p-0 m-0 "
                  >
                    <input
                      type="radio"
                      name={mode.input.name}
                      id={mode.input.id}
                      value={mode.input.value}
                      className="w-4 h-4"
                      checked={mode.input.checked}
                      onChange={(e) => {
                        if (
                          mode.input &&
                          mode.input.onChange &&
                          typeof mode.input.onChange === "function"
                        ) {
                          mode.input.onChange(e);
                        }
                      }}
                    />
                    <span>{mode.name}</span>
                  </label>
                ))}
            </div>
          </div>

          {data.description && (
            <ProductTextArea
              input={data.description.input}
              label={data.description.label}
              style={data.description.style}
              container={data.description.container}
            />
          )}

          {actions.addCancelServices && (
            <HorizontalButtonView
              container={actions.addCancelServices.container}
              buttons={actions.addCancelServices.buttons}
            />
          )}
        </div>
      )}
    </div>
  );
};
