import { useState } from "react";
import PhotoNavigator from "./PhotoNavigator";

export default function VariationSelect({ data }) {
  const [selectedVarItem, setSelectedVarItem] = useState(
    data.items[0].defaultChecked ? data.items[0].item : ""
  );

  const formatVarName = (vn) => {
    const capFirst = [];
    vn.toString()
      .replace("-", " ")
      .replace("_", " ")
      .replace(".", " ")
      .split(" ")
      .forEach((w) => {
        if (!"with, without, a, and, each".includes(w)) {
          capFirst.push(w.charAt(0).toUpperCase() + w.slice(1));
        } else capFirst.push(w);
      });
    return capFirst.join(" ");
  };

  const setBtnStyles = (id, s) => {
    return `${id === s && `after:border after:border-gray-400`}
    p-1.5 flex items-center justify-center rounded-lg focus:outline-none relative z-0 after:z-[-1] after:block after:absolute after:right-0 after:left-0 after:mx-auto after:w-full after:h-full after:rounded-lg after:bg-transparent`;
  };

  return (
    <div className="my-5">
      <p className="text-gray-800 first-letter:uppercase font-bold">
        {formatVarName(data.name.toLowerCase())}:{" "}
        <span className="text-gray-500">{formatVarName(selectedVarItem)}</span>
      </p>
      <PhotoNavigator
        id="variation-photo-view"
        buttonType="radio"
        buttons={data.items.map((i, index) => ({
          id: `${data.name}-${i.item}`,
          name: `variation-${data.name}-select`,
          value: i.item,
          onClick: () => {
            setSelectedVarItem(i.item);
            if (i.action && typeof i.action === "function") {
              var itemData = {};
              itemData[`${data.name}`] = i.item;
              i.action({ itemData, single: i.image });
            }
          },
          defaultChecked: index === 0 && i.defaultChecked,
          style: setBtnStyles(i.item, selectedVarItem),
          photo: i.image,
        }))}
        photoSize="max-w-14 max-h-14"
        containerGap="gap-x-2"
        containerAlign="items-start"
        containerSpacing="mt-2"
        gridCols={`grid-cols-${data.items.length}`}
      />
    </div>
  );
}
