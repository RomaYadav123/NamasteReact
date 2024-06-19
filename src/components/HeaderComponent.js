import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import greenTick from "../images/flat-round-check-mark-green-260nw-652023034.webp";
import redDot from "../images/bigRedDot.webp";
import foodApp from "../images/food_app2.webp";
import userContext from "../utils/userContext";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("login");

  const { loggedInUser } = useContext(userContext);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <img alt="logo" src={foodApp} className="w-28 rounded-full" />
      </div>

      <div className="flex items-center bg-pink-100 sm:bg-yellow-100 lg:bg-orange-100 ">
        <ul className="flex p-4 m-4">
          <li className=" flex px-4">
            Online Status:
            {onlineStatus ? (
              <img src={greenTick} style={{ height: "20px", width: "20px" }} />
            ) : (
              <img src={redDot} style={{ height: "20px", width: "20px" }} />
            )}
          </li>

          <li className="px-4">
            <Link to="/">Home </Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>

          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "logout" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold"> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
