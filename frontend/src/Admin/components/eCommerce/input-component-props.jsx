const districts = [
  { name: "Ampara" },
  { name: "Anuradhapura" },
  { name: "Badulla" },
  { name: "Batticaloa" },
  { name: "Colombo" },
  { name: "Galle" },
  { name: "Gampaha" },
  { name: "Hambantota" },
  { name: "Jaffna" },
  { name: "Kalutara" },
  { name: "Kandy" },
  { name: "Kegalle" },
  { name: "Kilinochchi" },
  { name: "Kurunegala" },
  { name: "Mannar" },
  { name: "Matale" },
  { name: "Matara" },
  { name: "Monaragala" },
  { name: "Mullaitivu" },
  { name: "Nuwara Eliya" },
  { name: "Polonnaruwa" },
  { name: "Puttalam" },
  { name: "Ratnapura" },
  { name: "Trincomalee" },
  { name: "Vavuniya" },
];

const shipMethods = [
  { name: "Free Shipping" },
  { name: "Standard Shipping" },
  { name: "Priority Shipping" },
];

const pickupSelectMenu = {
  menu: {
    listItems: {
      src: districts,
      spacing: "px-4 py-1.5",
      textColor: "text-gray-500",
      hoverTextColor: "hover:text-blue-600",
      fontWeight: "font-[500]",
      containerSpacing: "py-2 pr-2",
      overflow: "max-h-[150px] overflow-y-scroll",
    },
    gap: "mt-2",
    shadow: "shadow-[0px_1px_3px_1px] shadow-[#b8bdc6]",
  },
  button: {
    spacingX: "px-4",
    spacingY: "py-1.5",
    textColor: "text-gray-500",
  },
  style: {
    fontSize: "text-[15px]",
  },
};

const shippingSelectMenu = {
  menu: {
    ...pickupSelectMenu.menu,
    listItems: {
      ...(({ overflow, ...rest }) => rest)(pickupSelectMenu.menu.listItems),
      src: shipMethods,
      containerSpacing: "py-2",
    },
  },
  button: pickupSelectMenu.button,
  style: pickupSelectMenu.style,
};

const varPickupSelectMenu = {
  ...pickupSelectMenu,
};

const varShippingSelectMenu = {
  ...shippingSelectMenu,
};

export const productTitle = {
  label: { brief: "Product Title:" },
  input: {
    type: "text",
    id: "product-title",
    name: "product-title",
    marginTop: "5px",
    required: true,
    placeholder: "Scintilla Kaluwara 16A 1-Way 4-Gang Switch",
  },
};

export const productDescription = {
  label: "Product Description:",
  container: { marginTop: "mt-10" },
  input: {
    id: "product-desc",
    name: "product-description",
    placeholder: "Describe this product...",
  },
  style: {
    textArea: "min-w-full max-w-full min-h-[85px] max-h-[500px] p-3 mt-[5px]",
    container: "flex flex-col",
  },
};

export const productPrice = {
  label: { brief: "Product Price:" },
  container: { marginTop: "mt-10" },
  input: {
    type: "number",
    id: "product-price",
    name: "product-price",
    marginTop: "5px",
  },
};

export const productDiscount = {
  label: { brief: "Product Discount:" },
  container: { marginTop: "mt-10" },
  input: {
    type: "number",
    id: "product-disc",
    name: "product-discount",
    marginTop: "5px",
  },
};

export const productQuantity = {
  label: { brief: "Product Quantity:" },
  container: { marginTop: "mt-10" },
  input: {
    type: "number",
    id: "product-qty",
    name: "product-quantity",
    min: "0",
    max: "500",
    step: "1",
    marginTop: "5px",
  },
};

export const productPhoto = {
  label: { brief: "Product Photo:" },
  container: { marginTop: "mt-10" },
  input: {
    type: "file",
    id: "product-photo",
    name: "product-photo",
    marginTop: "5px",
    accept: "image/*",
    padding: "6.5px",
  },
};

export const serviceName = {
  label: { brief: "Service:" },
  container: { marginTop: "mt-0" },
  input: {
    type: "text",
    id: "serv-name",
    name: "service-name",
    width: "60%",
    padding: "6px 10px",
    placeholder: "Life Time Warranty",
  },
  style: {
    font: "font-semibold",
    textSize: "15px",
    labelTextSize: "16px",
    container: "flex items-center justify-between",
  },
};

export const taServices = {
  label: "Description:",
  container: { marginTop: "mt-5" },
  input: {
    id: "service-desc",
    name: "service-description",
    placeholder: "With our commitment to excellence...",
  },
  style: {
    label: "font-semibold text-nowrap",
    container: "flex flex-col items-start justify-between",
    textArea:
      "min-w-full max-w-full min-h-[85px] max-h-[250px] mt-2 p-3 rounded-md text-[15px]",
  },
};

export const varName = {
  label: {
    brief: "Display Name:",
    details: (
      <>
        <br />
        <p className="text-[15px] font-normal text-gray-500 text-left mt-1">
          Enter a display name for the variation (less than 20 characters).
        </p>
      </>
    ),
  },
  container: { marginTop: "mt-8" },
  input: {
    type: "text",
    id: "var-name",
    name: "var-name",
    placeholder: "Color",
    marginTop: "12px",
  },
};

export const varOption = {
  label: { brief: "Name:" },
  container: { marginTop: "mt-8" },
  input: {
    type: "text",
    id: "var-option",
    name: "var-option",
    width: "65%",
  },
  style: { container: "flex items-center justify-between" },
};

export const varQuantity = {
  label: { brief: "Quantity:" },
  container: { marginTop: "mt-8" },
  input: {
    type: "number",
    id: "var-qty",
    name: "var-quantity",
    width: "65%",
  },
  style: { container: "flex items-center justify-between" },
};

export const varPrice = {
  label: { brief: "Price:" },
  container: { marginTop: "mt-3" },
  input: {
    type: "number",
    id: "var-price",
    name: "var-price",
    width: "65%",
  },
  style: { container: "flex items-center justify-between" },
};

export const varDiscount = {
  label: { brief: "Discount:" },
  container: { marginTop: "mt-3" },
  input: {
    type: "number",
    id: "var-disc",
    name: "var-discount",
    width: "65%",
  },
  style: { container: "flex items-center justify-between" },
};

export const varPhoto = {
  label: { brief: "Photo:" },
  container: { marginTop: "mt-3" },
  input: {
    type: "file",
    id: "var-photo",
    name: "var-photo",
    width: "65%",
    accept: "image/*",
    padding: "6.5px",
  },
  style: { container: "flex items-center justify-between" },
};

export const varServiceName = {
  label: { brief: "Service:" },
  input: {
    type: "text",
    id: "serv-name",
    name: "service-name",
    width: "65%",
    padding: "6px 10px",
    placeholder: "Free Returns",
  },
  style: {
    container: "flex items-center justify-between",
    font: "font-semibold",
    textSize: "15px",
  },
};

export const taVarServices = {
  ...taServices,
  container: { marginTop: "mt-3" },
  input: {
    id: "var-service-desc",
    name: "var-service-description",
    placeholder: "Not satisfied with your order?...",
  },
  style: {
    ...taServices.style,
    label: "text-[15px] font-semibold text-nowrap",
  },
};

export const productVolPricing = {
  pricing: {
    name: "volume-pricing",
    title: (
      <>
        <p className="text-[16px] font-bold text-[#555] text-left">
          Product Volume Pricing:
        </p>
        <p className="text-[15px] text-left font-normal mt-1 text-gray-500">
          Offering discounts when a product is purchased in multiple quantities
          will increase the chance of selling by attracting more potential
          customers.
        </p>
      </>
    ),
    minInput: {
      min: 2,
      max: 50,
      step: 1,
      id: "vol-pricing-min",
      name: "volume-pricing-min",
    },
    discInput: {
      min: 0.5,
      max: 75,
      step: 0.01,
      id: "vol-pricing-disc",
      name: "volume-pricing-discount",
    },
    maxCount: 6,
  },
  style: {
    container: "mt-10",
    label: "mt-1",
    input: { padding: "5px", width: "80px" },
  },
};

export const varVolPricing = {
  pricing: {
    name: "var-volume-pricing",
    minInput: {
      ...productVolPricing.pricing.minInput,
      id: "var-vol-pricing-min",
      name: "var-volume-pricing-min",
    },
    discInput: {
      ...productVolPricing.pricing.discInput,
      id: "var-vol-pricing-disc",
      name: "var-volume-pricing-discount",
    },
    maxCount: 6,
  },
  style: {
    container: "p-4 mt-3 rounded-lg shadow-[0px_0px_2px_0.5px] shadow-gray-400",
    mode: "RESPONSIVE",
    input: { padding: "5px", width: "100px" },
  },
};

export const pShipping = {
  container: {
    name: "product-shipping",
    marginTop: ["mt-10", "mt-2"],
    title: (
      <p className="text-[16px] font-bold text-[#555] text-left">
        Product Shipping:
      </p>
    ),
  },
  style: {
    textSize: "text-[16px]",
  },
  sData: {
    homeDelivery: {
      dropDown: { key: "shipping-select", props: shippingSelectMenu },
      checkBoxes: {
        main: {
          name: "home-delivery-check",
          id: "home-d-check",
          label: "Home delivery",
        },
      },
      inputs: {
        exclude: {
          input: {
            type: "text",
            id: "pro-exship",
            name: "product-exclude-shipping",
            placeholder: "Enter districts or provinces",
            padding: "6px 10px",
            autoComplete: "one-time-code",
          },
          label: {
            brief: (
              <p className="text-left text-[#555] text-[16px] font-semibold mt-8">
                Excluded shipping locations:
              </p>
            ),
            details: (
              <p className="text-left text-gray-500 text-[15px] mt-1">
                Locations where this product cannot be shipped to.
              </p>
            ),
          },
          style: {
            textSize: "15px",
          },
        },
        origin: {
          container: {
            marginTop: "mt-0",
          },
          input: {
            type: "text",
            id: "pro-origin",
            name: "product-origin",
            placeholder: "Colombo, Western Province",
            padding: "6px 10px",
            autoComplete: "one-time-code",
            marginTop: "8px",
          },
          label: {
            brief: "Product origin:",
            details: (
              <p className="text-left text-gray-500 font-normal text-[15px] mt-1">
                Exact location this product being shipped from.
              </p>
            ),
          },
          style: {
            textSize: "15px",
            font: "font-semibold",
            labelTextSize: "16px",
          },
        },
        weight: {
          container: {
            marginTop: "mt-8",
          },
          input: {
            type: "number",
            id: "pro-weight",
            name: "product-weight",
            placeholder: "1kg, 650g etc.",
            padding: "6px 10px",
            autoComplete: "one-time-code",
            marginTop: "8px",
          },
          label: {
            brief: "Package weight:",
            details: (
              <p className="text-left text-gray-500 text-[15px] font-normal mt-1">
                Approximate weight of one item including the packing box.
              </p>
            ),
          },
          style: {
            textSize: "15px",
            font: "font-semibold",
            labelTextSize: "16px",
          },
        },
      },
    },
    storePickup: {
      dropDown: { key: "pickup-select", props: pickupSelectMenu },
      checkBoxes: {
        main: {
          name: "store-pickup-check",
          id: "store-p-check",
          label: "Store pickup",
        },
      },
    },
  },
};

export const vShipping = {
  container: { name: "var-product-shipping", marginTop: ["mt-3"] },
  style: {
    textSize: "text-[15px]",
    mode: "RESPONSIVE",
  },
  sData: {
    homeDelivery: {
      dropDown: { key: "var-shipping-select", props: varShippingSelectMenu },
      inputs: {
        exclude: {
          input: {
            type: "text",
            id: "var-pro-exship",
            name: "var-product-exclude-shipping",
            placeholder: "Enter districts or provinces",
            padding: "6px 10px",
            autoComplete: "one-time-code",
          },
          label: {
            brief: (
              <p className="text-left text-[#555] text-[16px] font-semibold mt-8">
                Excluded shipping locations:
              </p>
            ),
            details: (
              <p className="text-left text-gray-500 text-[15px] mt-1">
                Locations where this product cannot be shipped to.
              </p>
            ),
          },
          style: {
            textSize: "15px",
          },
        },
        origin: {
          container: {
            marginTop: "mt-2",
          },
          input: {
            type: "text",
            id: "var-pro-origin",
            name: "var-product-origin",
            placeholder: "Colombo, Western Province",
            width: "65%",
            padding: "6px 10px",
            autoComplete: "one-time-code",
          },
          label: {
            brief: "Product origin:",
          },
          style: {
            textSize: "15px",
            labelTextSize: "16px",
            font: "font-semibold",
            container: "flex items-center justify-between",
          },
        },
        weight: {
          container: {
            marginTop: "mt-2",
          },
          input: {
            type: "number",
            id: "var-pro-weight",
            name: "var-product-weight",
            placeholder: "1kg, 650g etc.",
            padding: "6px 10px",
            width: "65%",
            autoComplete: "one-time-code",
          },
          label: {
            brief: "Package weight:",
          },
          style: {
            textSize: "15px",
            labelTextSize: "16px",
            font: "font-semibold",
            container: "flex items-center justify-between",
          },
        },
      },
      checkBoxes: {
        main: {
          name: "var-home-delivery-check",
          id: "var-home-d-check",
          label: "Home delivery",
          style: {
            fontSize: "text-[15px]",
          },
        },
        diffOrigin: {
          name: "var-product-origin-check",
          id: "var-prodor-check",
          label: "Ships from a different location",
          style: {
            checkSize: "w-[15px] h-[15px]",
            fontSize: "text-[15px]",
            fontWeight: "font-[480]",
            labelGap: "gap-x-2.5",
          },
        },
        diffWeight: {
          name: "var-package-weight-check",
          id: "var-pkgwght-check",
          label: "Different package weight",
          style: {
            checkSize: "w-[15px] h-[15px]",
            fontSize: "text-[15px]",
            fontWeight: "font-[480]",
            labelGap: "gap-x-2.5",
          },
          container: {
            marginTop: "mt-8",
          },
        },
      },
    },
    storePickup: {
      dropDown: { key: "var-pickup-select", props: varPickupSelectMenu },
      checkBoxes: {
        main: {
          name: "var-store-pickup-check",
          id: "var-store-p-check",
          label: "Store pickup",
          style: {
            fontSize: "text-[15px]",
          },
        },
      },
    },
  },
};

export const acvar = {
  container: {
    marginTop: "mt-[55px] mb-2",
  },
  bt: [
    {
      text: "Add variation",
      style: { colors: "bg-orange-500 hover:bg-orange-600" },
    },
    {
      text: "Cancel",
      style: { colors: "bg-red-500 hover:bg-red-600" },
    },
  ],
};

export const acvop = {
  container: {
    marginTop: "mt-8",
  },
  bt: [
    {
      text: "Add option",
      style: {
        colors: "bg-gray-400 hover:bg-gray-500",
        padding: "py-1 px-4",
      },
    },
    {
      text: "Cancel",
      style: {
        colors: "bg-red-500 hover:bg-red-600",
        padding: "py-1 px-4",
      },
    },
  ],
};

export const pServ = {
  style: { textSize: "16px" },
  actions: {
    acs: {
      container: { marginTop: "mt-6" },
      bt: [
        {
          text: "Add service",
          style: {
            colors: "bg-gray-400 hover:bg-gray-500",
            padding: "py-1 px-4",
          },
        },
        {
          text: "Cancel",
          style: {
            colors: "bg-red-500 hover:bg-red-600",
            padding: "py-1 px-4",
          },
        },
      ],
    },
  },
  data: {
    title: {
      introText: (
        <>
          <p className="text-[16px] font-bold text-[#555] text-left">
            Product Services:
          </p>
          <p className="text-[15px] text-left font-normal mt-1 text-gray-500">
            Increase the chance of selling by showcasing the services provided
            when a customer purchases this product.
          </p>
          <p className="text-[15px] text-left font-semibold mt-1 text-gray-500">
            Every purchase is protected by our 90 days Money Back Guarantee.
          </p>
        </>
      ),
    },
    name: serviceName,
    description: taServices,
    container: { name: "var-product-services", marginTop: ["mt-10", "mt-4"] },
    dm: [
      {
        name: "Home delivery",
        input: {
          name: "serv-for-home-delivery",
          id: "sf-home-delivery",
          value: "HOME_DELIVERY",
        },
      },
      {
        name: "Store pickup",
        input: {
          name: "serv-for-store-pickup",
          id: "sf-store-pickup",
          value: "STORE_PICKUP",
        },
      },
    ],
  },
};

export const vServ = {
  style: { mode: "RESPONSIVE", textSize: "15px" },
  actions: {
    acs: {
      container: { marginTop: "mt-6" },
      bt: [
        {
          text: "Add service",
          style: {
            colors: "bg-gray-400 hover:bg-gray-500",
            padding: "py-1 px-4",
          },
        },
      ],
    },
  },
  data: {
    name: varServiceName,
    description: taVarServices,
    container: { name: "var-product-services", marginTop: ["mt-3"] },
    dm: [
      {
        name: "Home delivery",
        input: {
          name: "var-serv-for-home-delivery",
          id: "var-sf-home-delivery",
          value: "HOME_DELIVERY",
        },
      },
      {
        name: "Store pickup",
        input: {
          name: "var-serv-for-store-pickup",
          id: "var-sf-store-pickup",
          value: "STORE_PICKUP",
        },
      },
    ],
  },
};

export const checkVariations = {
  container: { marginTop: "mt-10" },
  input: {
    label: "Product has variations",
    checkBox: {
      name: "variations-check",
      id: "var-check",
    },
  },
};

export const checkDiffServices = {
  container: { marginTop: "mt-5" },
  input: {
    label: "Offer different services",
    checkBox: {
      name: "var-services-check",
      id: "varserv-check",
    },
  },
};

export const checkDiffShipping = {
  container: { marginTop: "mt-5" },
  input: {
    label: "Offer different delivery arrangements",
    checkBox: {
      name: "var-shipping-check",
      id: "varship-check",
    },
  },
};

export const checkDiffPhoto = {
  container: { marginTop: "mt-8" },
  input: {
    label: "Has a unique photo",
    checkBox: {
      name: "var-photo-check",
      id: "varph-check",
    },
  },
};

export const checkDiffVolPricing = {
  container: { marginTop: "mt-8" },
  input: {
    label: "Has different volume pricing",
    checkBox: {
      name: "var-volume-pricing-check",
      id: "var-volpr-check",
    },
  },
};

export const checkDiffDiscount = {
  container: { marginTop: "mt-8" },
  input: {
    label: "Discount varies from main discount",
    checkBox: {
      name: "var-discount-check",
      id: "vardisc-check",
    },
  },
};

export const checkDiffPrice = {
  container: { marginTop: "mt-5" },
  input: {
    label: "Price varies from main price",
    checkBox: {
      name: "var-price-check",
      id: "varpr-check",
    },
  },
};
