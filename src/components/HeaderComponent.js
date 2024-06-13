import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import greenTick from "../images/flat-round-check-mark-green-260nw-652023034.webp";
import redDot from "../images/bigRedDot.webp";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-custom">
      <div className="logo-container">
        <img alt="logo" src={LOGO_URL} className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            
            Online Status:
            {onlineStatus ? (
              <img src={greenTick} style={{ height: "20px", width: "20px" }} />
            ) : (
              <img src={redDot} style={{ height: "20px", width: "20px" }} />
            )}
          </li>

          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "logout" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
