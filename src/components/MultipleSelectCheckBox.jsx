import React, { useState } from "react";
function MultipleSelectCheckBox({ options, onSelect }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelect = (itm) => {
    const isSelected = selectedItems.some((item) => item.id === itm.id);
    const updatedSelectedItems = isSelected
      ? selectedItems.filter((item) => item.id !== itm.id)
      : [...selectedItems, itm];

    setSelectedItems(updatedSelectedItems);
    onSelect(updatedSelectedItems);
  };

  return (
    <div className="p-3 w-48 m-5 mx-auto">
      <div className="h-48 overflow-y-scroll scrollable">
        <ul>
          {options.map((item, index) => (
            <ol
              key={index}
              className="cursor-pointer hover:bg-gray-200 flex border-b pt-2 items-center m-2"
            >
              <input
                type="checkbox"
                checked={selectedItems.some(
                  (selectedItem) => selectedItem.id === item.id.toString()
                )}
                onChange={() =>
                  handleSelect({ name: item.name, id: item.id.toString() })
                }
              />
              <span className="pr-2">{item.name}</span>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultipleSelectCheckBox;
