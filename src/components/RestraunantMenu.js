import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestrauantMenu from "../utils/useRestrauantMenu";
import RestrauantCategory from "./RestrauantCategory";

const RestrauantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestrauantMenu(resId);

  console.log(
    "checking for the next ui design",
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //       MENU_URL + resId
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   console.log(
  //     "checking for res menu here --->",
  //     json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
  //       .card.itemCards[1].card.info.name
  //   );
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return;
  <Shimmer />;

  //   const { item } =
  //     resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.itemCards?.info?.name;
  //   console.log("logging here the emnu item ---> ", item);

  return (
    <div className=" flex flex-col text-center">
      <h1 className="font-bold my-10 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>

      <span className="flex  items-center">
        <h3 className="w-1/2 text-end font-bold text-lg ">
          {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        </h3>
        <h3
          className="w-1/2 text-start font-bold text-lg"
          style={{ marginLeft: "4px" }}
        >
          {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}{" "}
        </h3>
      </span>

      {categories.map((category) => (
        <RestrauantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestrauantMenu;
