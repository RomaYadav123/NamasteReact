const RestrauantCard = (props) => {
  // destructuring happening here -->//
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  console.log("image id", resData);
  return (
    <div className="res-cards">
      <img
        alt="card-img"
        className="street-platter"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
    </div>
  
  );
};

export default RestrauantCard;
