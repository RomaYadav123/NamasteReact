import { FaPhone } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="font-bold text-lg">
      <h1> Contact Us </h1>
      <ul className="flex flex-col font-normal text-sm">
        <li className="flex items-center">
          <FaPhone />
          Mobile
        </li>
        <li className="flex items-center">
          <IoIosPhonePortrait />
          Phone
        </li>
        <li className="flex items-center">
          <MdMarkEmailUnread />
          Email
        </li>
        <li className="flex items-center">
          <FaTelegramPlane />
          Telegram
        </li>
      </ul>
    </div>
  );
};

export default Contact;
