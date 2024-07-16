import React from "react";

const RestrauantCard = ({ resData }) => {
  // Destructuring props safely with optional chaining
  const {
    name,
    cuisines = [],
    avgRating,
    cloudinaryImageId,
  } = resData?.info || {};

  return (
    <div
      data-testid="resData"
      className="m-4 p-4 w-[680px]  items-center sm:w-[650px] sm:items-center md:w-[250px] h-[90%] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      {cloudinaryImageId && (
        <img
          alt="card-img"
          className="rounded-lg h-40 w-full object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${cloudinaryImageId}`}
        />
      )}
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestrauantCard;
