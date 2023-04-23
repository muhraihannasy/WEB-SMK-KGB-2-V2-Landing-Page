import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import "./Dropdown.scss";

const Dropdown = ({ title, subnav }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <IoIosArrowDown />
      </button>

      <div className={isOpen ? "dropdown-item show" : "dropdown-item"}>
        {subnav.map((item, i) => (
          <Link to={item.to} key={i}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
