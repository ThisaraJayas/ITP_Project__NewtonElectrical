import { useEffect, useLayoutEffect, useState } from "react";
import { ProductDataInput } from "./ProductDataInput";
import { XCircleIcon } from "@heroicons/react/20/solid";

const ascendingMinQty = (a, b) => {
  if (a.minQty < b.minQty) {
    return -1;
  }
  if (a.minQty > b.minQty) {
    return 1;
  }
  return 0;
};

const getErrorMessage = (code) => {
  var msg = ``;
  switch (code) {
    case -1: // disc less than min
    case -2: // disc greater than max
      msg = `Please enter a volume discount between 0.5 and 75 (inclusive).`;
      break;
    case -3: // qty less than min
    case -4: // qty greater than max
      msg = `Please enter a volume quantity between 2 and 50 (inclusive).`;
      break;
    case -5:
      msg = `Maximum pricing rule limit reached. Please update accordingly.`;
      break;
    case -6: // same disc exists
    case -7: // same qty exists
    case -8: // disc and qty exists
      msg = `That pricing rule already exists. Please try a different one.`;
      break;
    case -9:
      msg = `Please enter a valid volume quantity without fractions.`;
      break;
    case -10:
      msg = `Please enter a volume discount.`;
      break;
    case -11:
      msg = `Please enter a volume quantity.`;
      break;
    case -12:
      msg = `Please enter volume discount and quantity.`;
      break;
    default:
      msg = `Unspecified error occurred, Please try again later.`;
      break;
  }
  return msg;
};

export const VolumePricingInput = ({
  style,
  pricing,
  actions,
  closeButton,
  conditions = {},
}) => {
  const [inputs, setInputs] = useState({ minInput: null, discInput: null });

  useLayoutEffect(() => {
    if (
      conditions.disabled &&
      actions.onDisabled &&
      typeof actions.onDisabled === "function"
    ) {
      actions.onDisabled();
    }
  }, [conditions.disabled]);

  useEffect(() => {
    inputs.discInput &&
      inputs.minInput &&
      actions.useInputRefs &&
      typeof actions.useInputRefs === "function" &&
      actions.useInputRefs(inputs);
  }, [inputs]);

  return (
    <div
      className={`${pricing.name ? pricing.name : ``} ${
        style.container ? style.container : ``
      }`}
    >
      {pricing.title}

      {pricing && pricing.data && (
        <>
          {pricing.data.length > 0 ? (
            <>
              <p
                className={`text-[15px] text-left font-normal text-gray-500 ${
                  style.mode !== `RESPONSIVE` && `mt-2`
                }`}
              >
                Selected options:
              </p>
              {pricing.data.sort(ascendingMinQty).map((vpo, index) => (
                <div
                  className="flex w-[280px] justify-between mt-1"
                  key={`${vpo.minQty}-${vpo.discPerEach}-${index}`}
                >
                  <p
                    className={`text-[15px] text-left text-gray-500 font-semibold text-nowrap`}
                  >
                    Buy {vpo.minQty} or more:
                  </p>
                  <div className="inline-flex gap-x-3 items-center">
                    <span className="text-[#555] font-semibold text-[15px] text-nowrap">
                      extra {Number(vpo.discPerEach).toFixed(2)}% off
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        actions &&
                          actions.updateItems &&
                          typeof actions.updateItems === "function" &&
                          actions.updateItems(vpo);
                      }}
                      disabled={conditions.disabled}
                      className="focus:outline-red-600 rounded-full"
                    >
                      <XCircleIcon
                        className={`h-5 w-5 text-red-400 hover:text-red-500 duration-300 transition-colors ${
                          conditions.disabled ? `invisible` : `visible`
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p
              className={`text-[15px] text-left font-normal text-gray-500 ${
                style.mode !== `RESPONSIVE` && `mt-2`
              }`}
            >
              No volume pricing added yet.
            </p>
          )}
        </>
      )}

      <div
        className={`flex mt-4 font-semibold ${
          style.mode === `RESPONSIVE`
            ? `flex-col items-start gap-y-3`
            : `justify-between items-center`
        }`}
      >
        <div className="flex gap-x-2 items-center">
          <p
            className={`text-[16px] ${
              style.mode === `RESPONSIVE` && `min-w-[45px]`
            } text-gray-500 text-nowrap text-left`}
          >
            Buy
          </p>

          <ProductDataInput
            input={{
              ref: (ir) =>
                ir &&
                !inputs.minInput &&
                setInputs({ ...inputs, minInput: ir }),
              type: "number",
              name: pricing.minInput.name,
              id: pricing.minInput.id,
              value: pricing.minInput.value,
              min: pricing.minInput.min,
              max: pricing.minInput.max,
              step: pricing.minInput.step,
              onChange: pricing.minInput.onChange,
              width: style.input.width,
              padding: style.input.padding,
              disabled: conditions.disabled,
            }}
            style={{
              error:
                conditions.styles && conditions.styles.minInput
                  ? conditions.styles.minInput
                  : false,
            }}
          />

          <p className="text-[16px] text-gray-500 text-nowrap">or more:</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <p
            className={`text-[16px] ${
              style.mode === `RESPONSIVE` && `min-w-[45px]`
            } text-[#555] text-nowrap text-left`}
          >
            extra
          </p>

          <ProductDataInput
            input={{
              ref: (ir) =>
                ir &&
                !inputs.discInput &&
                setInputs({ ...inputs, discInput: ir }),
              type: "number",
              name: pricing.discInput.name,
              id: pricing.discInput.id,
              value: pricing.discInput.value,
              min: pricing.discInput.min,
              max: pricing.discInput.max,
              step: pricing.discInput.step,
              onChange: pricing.discInput.onChange,
              width: style.input.width,
              padding: style.input.padding,
              disabled: conditions.disabled,
            }}
            style={{
              error:
                conditions.styles && conditions.styles.discInput
                  ? conditions.styles.discInput
                  : false,
            }}
          />

          <p className="text-[16px] text-[#555] text-nowrap">% off each item</p>
        </div>
        {style.mode !== `RESPONSIVE` && closeButton}
      </div>
      {style.mode === `RESPONSIVE` ? (
        <>
          {conditions.status !== 0 && (
            <p
              className={`text-[15px] font-[500] text-red-500 text-left mt-2 relative`}
            >
              {getErrorMessage(conditions.status)}
            </p>
          )}
          {closeButton}
        </>
      ) : (
        <>
          {conditions.status !== 0 && (
            <p
              className={`text-[15px] font-[500] text-red-500 max-w-min text-nowrap text-left mt-1.5 relative`}
            >
              {getErrorMessage(conditions.status)}
            </p>
          )}
        </>
      )}
    </div>
  );
};
