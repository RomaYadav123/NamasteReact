const RestrauantCard = (props) => {
  // destructuring happening here -->//
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  console.log("image id", resData);
  return (
    <div
      data-testid="resData"
      className="m-4 p-4 w-[680px]  items-center sm:w-[650px] sm:items-center md:w-[250px] h-[90%] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        alt="card-img"
        className="rounded-lg h-26 w-[100%]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

// creating a HOC that takes a component as an input & return us an enhanced component //

export const withPromotionLabel = (RestrauantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestrauantCard {...props} />
      </div>
    );
  };
};

export default RestrauantCard;
