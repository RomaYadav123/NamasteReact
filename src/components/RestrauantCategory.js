import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaChevronDown } from "react-icons/fa";
import ItemsList from "./ItemsList";

const RestrauantCategory = ({ data, showItems, setShowIndex }) => {
  console.log("logging data here --->", data);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="flex justify-content-end">
            <FaChevronDown />
          </span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestrauantCategory;
