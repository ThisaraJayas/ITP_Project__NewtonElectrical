import React from "react";

export const DiscountMiniView = ({ data }) => {
  return (
    <>
      <hr className="border-slate-200" />
      <p className="font-bold my-5 text-gray-800">
        Total: LKR {data.total}{" "}
        <span className="text-gray-500 font-semibold">
          (You're saving{" "}
          <span className="text-[#31CB00]">LKR {data.saved}</span>)
        </span>
      </p>
    </>
  );
};
