import RestrauantCard from "./RestrauantCard";

// Creating a Higher Order Component (HOC) that adds a "Promoted" label above RestrauantCard
const withPromotionLabel = (RestrauantCard) => {
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

export default withPromotionLabel;
