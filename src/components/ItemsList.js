import { FaIndianRupeeSign } from "react-icons/fa6";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log("checking the items list over here ---> ", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex flex-col text-left p-2 m-2 border-gray-200 border-b-2"
        >
          <div className="w-full py-2 flex justify-between">
            <div className="flex items-center">
              <span>{item?.card?.info?.name}</span>

              <span className="ml-2 flex  items-center">
                -<FaIndianRupeeSign />
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={CDN_URL + item?.card?.info?.imageId}
              />

              <button className="p-2 items-center rounded-lg  bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
          </div>

          <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
