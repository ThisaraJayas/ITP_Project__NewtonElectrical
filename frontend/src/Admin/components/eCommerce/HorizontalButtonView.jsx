import React from "react";

export const HorizontalButtonView = ({ container, buttons }) => {
  return (
    <div
      className={`flex ${container.marginTop ? container.marginTop : ``} ${
        container.buttonGap ? container.buttonGap : `gap-x-5`
      }`}
    >
      {buttons &&
        buttons.map((btn, index) => (
          <button
            type={btn.type ? btn.type : "button"}
            key={`${index}-${btn.text.replaceAll(" ", "_").toUpperCase()}`}
            className={`text-white rounded-lg ${
              btn.style && btn.style.padding ? btn.style.padding : `py-2 px-5`
            } ${
              btn.style && btn.style.transDuration
                ? btn.style.transDuration
                : `duration-300`
            } ${btn.style.colors}`}
            onClick={() => typeof btn.action === "function" && btn.action()}
          >
            {btn.text}
          </button>
        ))}
    </div>
  );
};
