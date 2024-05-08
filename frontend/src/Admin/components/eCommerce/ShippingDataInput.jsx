import { ProductDataInput } from "./ProductDataInput";
import { LabeledCheckBox } from "./LabeledCheckBox";
import Dropdown from "../../../components/Dropdown";
import { useEffect } from "react";

export const ShippingDataInput = ({
  container,
  style,
  conditions = {},
  actions = {},
  shippingData,
}) => {
  const hdWeightInput = shippingData.homeDelivery.inputs.weight;
  const hdOriginInput = shippingData.homeDelivery.inputs.origin;
  const hdExcludeInput = shippingData.homeDelivery.inputs.exclude;
  const hdDiffWeightCheck = shippingData.homeDelivery.checkBoxes.diffWeight;
  const hdDiffOriginCheck = shippingData.homeDelivery.checkBoxes.diffOrigin;

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
      className={`${container.name ? container.name : ``} ${
        container.marginTop ? container.marginTop[0] : ``
      }`}
    >
      {container.title}
      <div
        className={`flex justify-between ${
          container.marginTop && container.marginTop.length > 1
            ? container.marginTop[1]
            : ``
        } items-center`}
      >
        <p
          className={`${
            style.textSize ? style.textSize : ``
          } text-[#555] font-semibold`}
        >
          Delivery mode:
        </p>

        <div
          className={`flex items-center justify-between ${
            style.mode === `RESPONSIVE` ? `w-[65%]` : `w-[60%]`
          }`}
        >
          {shippingData &&
            [shippingData.homeDelivery, shippingData.storePickup].map(
              (mode, index) => (
                <LabeledCheckBox
                  key={`${index}-${mode.checkBoxes.main.name}`}
                  input={{
                    checkBox: {
                      name: mode.checkBoxes.main.name,
                      id: mode.checkBoxes.main.id,
                      checked: mode.checkBoxes.main.checked,
                      disabled: conditions.disabled,
                      onChange: () => {
                        if (
                          mode.checkBoxes &&
                          mode.checkBoxes.main &&
                          mode.checkBoxes.main.onChange &&
                          typeof mode.checkBoxes.main.onChange === "function"
                        ) {
                          mode.checkBoxes.main.onChange();
                        }
                      },
                    },
                    label: mode.checkBoxes.main.label,
                  }}
                />
              )
            )}
        </div>
      </div>

      {shippingData.homeDelivery.actions &&
        shippingData.homeDelivery.conditions &&
        shippingData.homeDelivery.conditions.open && (
          <div
            className={`${
              style.mode === `RESPONSIVE`
                ? `p-4 shadow-[0px_0px_2px_0.5px] shadow-gray-400`
                : `py-3 px-4 border border-gray-300`
            } mt-3 mb-5 rounded-lg`}
          >
            {style.mode === `RESPONSIVE` && hdDiffOriginCheck && (
              <>
                <LabeledCheckBox
                  input={{
                    checkBox: {
                      name: hdDiffOriginCheck.name,
                      id: hdDiffOriginCheck.id,
                      checked: hdDiffOriginCheck.checked,
                      disabled: conditions.disabled,
                      onChange: () => {
                        if (
                          hdDiffOriginCheck.onChange &&
                          typeof hdDiffOriginCheck.onChange === "function"
                        ) {
                          hdDiffOriginCheck.onChange();
                        }
                      },
                    },
                    label: hdDiffOriginCheck.label,
                  }}
                  style={hdDiffOriginCheck.style}
                />
              </>
            )}

            <ProductDataInput
              input={{
                type: hdOriginInput.input.type,
                id: hdOriginInput.input.id,
                name: hdOriginInput.input.name,
                value: hdOriginInput.input.value,
                placeholder: hdOriginInput.input.placeholder,
                onChange: (e) => {
                  hdOriginInput.input.onChange &&
                    typeof hdOriginInput.input.onChange === "function" &&
                    hdOriginInput.input.onChange(e);
                },
                padding: hdOriginInput.input.padding,
                autoComplete: hdOriginInput.input.autoComplete,
                width: hdOriginInput.input.width,
                marginTop: hdOriginInput.input.marginTop,
                disabled: hdOriginInput.input.disabled,
              }}
              container={hdOriginInput.container}
              style={hdOriginInput.style}
              label={{
                brief: hdOriginInput.label.brief,
                details: hdOriginInput.label.details,
              }}
            />

            {style.mode === `RESPONSIVE` && (
              <>
                <LabeledCheckBox
                  input={{
                    checkBox: {
                      name: hdDiffWeightCheck.name,
                      id: hdDiffWeightCheck.id,
                      checked: hdDiffWeightCheck.checked,
                      disabled: conditions.disabled,
                      onChange: () => {
                        if (
                          hdDiffWeightCheck.onChange &&
                          typeof hdDiffWeightCheck.onChange === "function"
                        ) {
                          hdDiffWeightCheck.onChange();
                        }
                      },
                    },
                    label: hdDiffWeightCheck.label,
                  }}
                  style={hdDiffWeightCheck.style}
                  container={hdDiffWeightCheck.container}
                />
              </>
            )}

            <ProductDataInput
              input={{
                type: hdWeightInput.input.type,
                id: hdWeightInput.input.id,
                name: hdWeightInput.input.name,
                value: hdWeightInput.input.value,
                placeholder: hdWeightInput.input.placeholder,
                onChange: (e) => {
                  hdWeightInput.input.onChange &&
                    typeof hdWeightInput.input.onChange === "function" &&
                    hdWeightInput.input.onChange(e);
                },
                padding: hdWeightInput.input.padding,
                autoComplete: hdWeightInput.input.autoComplete,
                width: hdWeightInput.input.width,
                marginTop: hdWeightInput.input.marginTop,
                disabled: hdWeightInput.input.disabled,
              }}
              style={hdWeightInput.style}
              label={{
                brief: hdWeightInput.label.brief,
                details: hdWeightInput.label.details,
              }}
              container={hdWeightInput.container}
            />

            <p
              className={`text-left text-[#555] text-[16px] font-semibold mt-8`}
            >
              Shipping services:
            </p>
            <p className="text-left text-gray-500 text-[15px] mt-1">
              {style.mode !== `RESPONSIVE` &&
                `Select available shipping methods to deliver the product. Please
              select all that apply. `}
              At least one service should be selected.
            </p>
            <div className="flex gap-x-4 items-center mt-2">
              <Dropdown
                key={shippingData.homeDelivery.dropDown.key}
                props={{
                  ...shippingData.homeDelivery.dropDown.props,
                  button: {
                    ...shippingData.homeDelivery.dropDown.props.button,
                    disabled: conditions.disabled,
                  },
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (
                    shippingData.homeDelivery.actions.addService &&
                    typeof shippingData.homeDelivery.actions.addService ===
                      "function"
                  ) {
                    shippingData.homeDelivery.actions.addService();
                  }
                }}
                className={`${
                  conditions.disabled
                    ? `bg-[#b8bdc6]`
                    : `bg-gray-400 hover:bg-gray-500`
                } text-white py-1.5 rounded-md ${
                  style.mode === `RESPONSIVE` ? `px-4` : `px-8`
                } duration-300`}
                disabled={conditions.disabled}
              >
                Add
              </button>
            </div>
            <p className="text-left mt-3 text-gray-500 text-[15px]">
              Selected services:
            </p>

            {shippingData.homeDelivery.selectedData.shipServices}
            {hdExcludeInput.label.brief}
            {hdExcludeInput.label.details}

            <div className="flex items-center gap-x-4 mt-2">
              <ProductDataInput
                input={{
                  type: hdExcludeInput.input.type,
                  id: hdExcludeInput.input.id,
                  name: hdExcludeInput.input.name,
                  value: hdExcludeInput.input.value,
                  placeholder: hdExcludeInput.input.placeholder,
                  onChange: (e) => {
                    hdExcludeInput.input.onChange &&
                      typeof hdExcludeInput.input.onChange === "function" &&
                      hdExcludeInput.input.onChange(e);
                  },
                  padding: hdExcludeInput.input.padding,
                  autoComplete: hdExcludeInput.input.autoComplete,
                  disabled: conditions.disabled,
                }}
                style={hdExcludeInput.style}
              />
              <button
                type="button"
                onClick={() => {
                  if (
                    shippingData.homeDelivery.actions.addExclude &&
                    typeof shippingData.homeDelivery.actions.addExclude ===
                      "function"
                  ) {
                    shippingData.homeDelivery.actions.addExclude();
                  }
                }}
                className={`${
                  conditions.disabled
                    ? `bg-[#b8bdc6]`
                    : `bg-gray-400 hover:bg-gray-500`
                } text-white py-1.5 rounded-md ${
                  style.mode === `RESPONSIVE` ? `px-4` : `px-8`
                } duration-300`}
                disabled={conditions.disabled}
              >
                Add
              </button>
            </div>
            <p className="text-left mt-3 text-gray-500 text-[15px]">
              Locations to exclude:
            </p>
            {shippingData.homeDelivery.selectedData.exLocations}
          </div>
        )}

      {shippingData.storePickup.actions &&
        shippingData.storePickup.conditions &&
        shippingData.storePickup.conditions.open && (
          <div
            className={`${
              style.mode === `RESPONSIVE`
                ? `p-4 shadow-[0px_0px_2px_0.5px] shadow-gray-400`
                : `py-3 px-4 border border-gray-300`
            } mt-3 mb-5 rounded-lg`}
          >
            <p className="text-left text-[#555] text-[16px] font-semibold">
              Pickup locations:
            </p>
            <p className="text-left text-gray-500 text-[15px] mt-1">
              {style.mode === `RESPONSIVE`
                ? `Locations this product can be collected from.`
                : `Select all available locations this product can be collected from.`}
            </p>
            <div className="flex gap-x-4 items-center mt-2">
              <Dropdown
                key={shippingData.storePickup.dropDown.key}
                props={{
                  ...shippingData.storePickup.dropDown.props,
                  button: {
                    ...shippingData.storePickup.dropDown.props.button,
                    disabled: conditions.disabled,
                  },
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (
                    shippingData.storePickup.actions.addPickup &&
                    typeof shippingData.storePickup.actions.addPickup ===
                      "function"
                  ) {
                    shippingData.storePickup.actions.addPickup();
                  }
                }}
                className={`${
                  conditions.disabled
                    ? `bg-[#b8bdc6]`
                    : `bg-gray-400 hover:bg-gray-500`
                } text-white py-1.5 rounded-md ${
                  style.mode === `RESPONSIVE` ? `px-4` : `px-8`
                } duration-300`}
                disabled={conditions.disabled}
              >
                Add
              </button>
            </div>
            <p className="text-left mt-3 text-gray-500 text-[15px]">
              Selected locations:
            </p>
            {shippingData.storePickup.selectedData.pickupLocations}
          </div>
        )}
    </div>
  );
};
