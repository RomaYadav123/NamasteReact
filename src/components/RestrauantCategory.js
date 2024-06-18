import downArrow from "../images/down-arrow.svg";

const RestrauantCategory = ({ data }) => {
  console.log("logging data here --->", data);
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        <span> {data.title} </span>
        <span className="flex justify-content-end">
          <img src={downArrow} style={{ height: "10px", width: "10px" }} />
        </span>
      </div>
    </div>
  );
};

export default RestrauantCategory;
