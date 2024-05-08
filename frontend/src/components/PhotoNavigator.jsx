import { useEffect } from "react";

export default function PhotoNavigator({
  id,
  width,
  height,
  containerWidth,
  mainSpacing,
  containerGap,
  containerSpacing,
  containerAlign,
  photoSize = "w-full h-full",
  gridCols = "grid-cols-3",
  buttonType = "button" /* button || radio */,
  buttons = [] /* button { id, onClick, style, photo } */,
  /* radio { id, onClick, style, photo, name, defaultChecked } */
}) {
  const navigator = [];

  useEffect(() => {
    const length = navigator.length;
    if (length === buttons.length) {
      const linkedList = navigator.map((navBtn, index) => ({
        current: navBtn,
        next: index < length - 1 ? navigator[index + 1] : navigator[0],
        prev: index > 0 ? navigator[index - 1] : navigator[length - 1],
      }));
      linkedList.forEach((navBtn) => {
        navBtn.current.addEventListener("keydown", (e) => {
          if (e.key === "ArrowLeft") {
            navBtn.prev.focus();
            if (buttonType === "button") navBtn.prev.click();
            if (buttonType === "radio") navBtn.prev.children[0].click();
          } else if (e.key === "ArrowRight") {
            navBtn.next.focus();
            if (buttonType === "button") navBtn.next.click();
            if (buttonType === "radio") navBtn.next.children[0].click();
          }
        });
      });
    }
  }, []);

  return (
    <div
      id={id}
      className={`${width} ${height} ${mainSpacing} flex flex-col ${containerAlign} overflow-hidden`}
    >
      <div
        className={`${containerWidth} grid ${gridCols} ${containerGap} ${containerSpacing}`}
      >
        {buttonType === "button" &&
          buttons.map((b, index) => (
            <button
              ref={(navBtn) => {
                navBtn && navigator.push(navBtn);
              }}
              key={`${index}-${b.id}`}
              type="button"
              onClick={() => {
                if (typeof b.onClick === "function") {
                  b.onClick();
                }
              }}
              className={b.style}
            >
              <img src={b.photo.src} alt={b.photo.alt} className={photoSize} />
            </button>
          ))}
        {buttonType === "radio" &&
          buttons.map((b, index) => (
            <div
              key={`${index}-${b.id}`}
              className="flex items-center justify-center"
            >
              <input
                id={b.id}
                name={b.name}
                value={b.value}
                type="radio"
                onClick={() => {
                  if (typeof b.onClick === "function") {
                    b.onClick();
                  }
                }}
                defaultChecked={b.defaultChecked}
                className="hidden"
              />
              <button
                ref={(navBtn) => {
                  navBtn && navigator.push(navBtn);
                }}
                className={b.style}
              >
                <label htmlFor={b.id} className="hover:cursor-pointer">
                  <img
                    src={b.photo && b.photo.src}
                    alt={b.photo && b.photo.alt}
                    className={photoSize}
                  />
                </label>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
