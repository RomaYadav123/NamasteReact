import React, { lazy, Suspense, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauantCard from "./components/RestrauantCard";
import RestrauantMenu from "./components/RestraunantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";
// import yummyFoodImg from "./public/YummFood";
// import streetFoodImg from "./Images/StreetFood";

const RestrauantCard = (props) => {
  // destructuring happening here -->//
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;

  console.log("image id", resData);
  return (
    <div className="res-cards">
      {/* <img alt="card-img" className="street-platter" src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"
         + cloudinaryImageId}/> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Roma-Anmol",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo,  setUserInfo}}>
      <div className="app">
        {/* this is called component composition as one comeponent is inside other */}
        <HeaderComponent />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading ...! </h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restrauants/:resId",
        element: <RestrauantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
