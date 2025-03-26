import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item">
        <Link to="/home3">Home</Link>
      </li>
      <li className="menu-item-">
        <Link to="/about">About Us</Link>
      </li>
      <li className="menu-item-">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>
      <li className="menu-item-">
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact US
        </Link>
      </li>
    </ul>
  );
}
