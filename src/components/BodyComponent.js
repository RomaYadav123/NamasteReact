import restrauList from "../utils/mockData";
import RestrauantCard from "./RestrauantCard";
import withPromotionLabel from "./withPromotionLabel";
import Button from "react-bootstrap/Button";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const BodyComponent = () => {
  const [restraLists, setRestrauLists] = useState(restrauList);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);

  const RestrauantCardPromoted = withPromotionLabel(RestrauantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.2378422&lng=77.0722759&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json.data.cards[3].card.card.gridElements.infoWithStyle.restraunts
    );

    console.log(
      "is my data coming",
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0]?.info?.name
    );

    setRestrauLists(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restraunts
    );
    setFilteredListOfRestraunts(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restraunts
    );
  };

  const [inputText, setInputText] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserInfo } = useContext(userContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline..! Plaese check your Internet connection.
      </h1>
    );

  return restraLists === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-custom">
      <div className="flex items-center">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestraunts =
                restrauList[4].gridWidget.gridElements.infoWithStyle.restaurants.filter(
                  (res) =>
                    res.data.name
                      .toLowerCase()
                      .includes(inputText.toLowerCase())
                );

              setFilteredListOfRestraunts(filteredRestraunts);
            }}
          >
            search
          </button>
        </div>
        <button
          className=" px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredRestaurants =
              restrauList[4].gridWidget.gridElements.infoWithStyle.restaurants.filter(
                (res) => res.info.avgRating > 4
              );

            setFilteredListOfRestraunts(filteredRestaurants);
          }}
        >
          Top Rated Restrauants
        </button>

        <label className="ml-6">Username </label>
        <input
          className="p-2 search-box border border-solid border-black ml-6"
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div className=" flex flex-wrap">
        {/* resData is an object that react created combining all the props together into a single object, from which we want name, avgRatings, cloudinaryImageId, etc which is inside the main restrauList which is array of objects */}
        {restrauList[4].gridWidget.gridElements.infoWithStyle.restaurants.map(
          (restraunt) => (
            <Link to={"/restrauants/" + restraunt.info.id}>
              {restraunt.info.promoted ? (
                <RestrauantCardPromoted resData={restraunt} />
              ) : (
                <RestrauantCard resData={restraunt} />
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
