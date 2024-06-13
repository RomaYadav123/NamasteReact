import {useState} from "react";
const User = ({name}) => {
    const [count] = useState(0);

  return <div className="user-card">
    <h2> count: {count} </h2>
    
    <h2>Name: {name} </h2>
    <h3> Location: Sohna, Gurgaon </h3>
    <h4> Contact: @github.com </h4>
  </div>;
};

export default User;
