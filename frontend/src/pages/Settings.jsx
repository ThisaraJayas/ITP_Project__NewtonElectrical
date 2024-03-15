import React from "react";

export default function Settings({ paddingTop }) {
  return (
    <div
      style={{ paddingTop: (paddingTop === 0 ? 80 : paddingTop) + 24 + "px" }}
      className="px-5 h-[1000px] bg-slate-100"
    >
      <span className="text-5xl font-black block my-3">Account Settings</span>
      <span className="text-4xl font-black">Still under development!</span>
    </div>
  );
}
