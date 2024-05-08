// Determine product availability automatically from quantity
export const useAvailability = (qty) => {
  var status = ``;
  if (!isNaN(qty)) {
    if (qty >= 25) {
      status = `In Stock`;
    } else if (qty >= 5) {
      status = `Limited Quantity`;
    } else {
      status = `Out of Stock`;
    }
  } else {
    status = `Status Unknown`;
  }
  return status;
};

// Validate volume pricing input data
export const validateVolPricing = (data, input, check) => {
  var status = 0;
  if (input.discPerEach === `` && input.minQty === ``) status = -12;
  else {
    input.discPerEach === `` && (status = -10);
    input.minQty === `` && (status = -11);
    if (status === 0) {
      if (data.pricingItems.length === data.maxCount) status = -5;
      else {
        for (var i = 0; i < data.pricingItems.length; i++) {
          Number(input.discPerEach) === data.pricingItems[i].discPerEach &&
            (status = -6);
          Number(input.minQty) === data.pricingItems[i].minQty && (status = -7);
          Number(input.discPerEach) === data.pricingItems[i].discPerEach &&
            Number(input.minQty) === data.pricingItems[i].minQty &&
            (status = -8);
          if (
            Number(input.discPerEach) === data.pricingItems[i].discPerEach ||
            Number(input.minQty) === data.pricingItems[i].minQty
          ) {
            break;
          }
        }
      }
    }
    if (status === 0) {
      if (input.discPerEach !== ``) {
        Number(input.discPerEach) < check.discInput.min && (status = -1);
        Number(input.discPerEach) > check.discInput.max && (status = -2);
      }
      if (input.minQty !== ``) {
        if (Number(input.minQty) % 1 > 0) status = -9;
        else {
          Number(input.minQty) < check.minInput.min && (status = -3);
          Number(input.minQty) > check.minInput.max && (status = -4);
        }
      }
    }
  }
  return status;
};
