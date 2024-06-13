import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_URL} from "../utils/constants";
import useRestrauantMenu from "../utils/useRestrauantMenu";

const RestrauantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  
  const resInfo = useRestrauantMenu(resId);

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
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name} </h1>
      <span className="res-menu-styling">
        <h3> {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - </h3>
        <h3 style={{ marginLeft: "4px" }}>
          {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}{" "}
        </h3>
      </span>
      <h3>
        {
          resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
            .itemCards[1].card.info.name
        }
      </h3>
      <h2>Menu </h2>

      <ul>
        {resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
             
              {item.card.info.name} - {"Rs."} {item.card.info.price/100}
            </li>
          )
        )}

        <li>
        
          {
            resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
              .itemCards[1].card.info.name
          }
        </li>
        <li>
          
          {
            resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
              .itemCards[2].card.info.name
          }
        </li>
        <li>
         
          {
            resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
              .itemCards[3].card.info.name
          }
        </li>
        <li>
          {
            resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
              .itemCards[4].card.info.name
          }
        </li>
      </ul>
    </div>
  );
};

export default RestrauantMenu;
