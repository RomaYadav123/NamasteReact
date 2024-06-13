import restrauList from "../utils/mockData";
import RestrauantCard from "./RestrauantCard";
import Button from "react-bootstrap/Button";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [restraLists, setRestrauLists] = useState(restrauList);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);

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

    setRestrauLists(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restraunts
    );
    setFilteredListOfRestraunts(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restraunts
    );
  };

  const [inputText, setInputText] = useState("");

  const onlineStatus = useOnlineStatus();

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
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
        <Button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants =
              restrauList[4].gridWidget.gridElements.infoWithStyle.restaurants.filter(
                (res) => res.info.avgRating > 4
              );

            setFilteredListOfRestraunts(filteredRestaurants);
          }}
        >
          Top Rated Restrauants
        </Button>
      </div>
      <div className="restrauant-container">
        {/* resData is an object that react created combining all the props together into a single object, from which we want name, avgRatings, cloudinaryImageId, etc which is inside the main restrauList which is array of objects */}
        {restrauList[4].gridWidget.gridElements.infoWithStyle.restaurants.map(
          (restraunt) => (
            <Link to={"/restrauants/" + restraunt.info.id}>
              <RestrauantCard resData={restraunt} />{" "}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
