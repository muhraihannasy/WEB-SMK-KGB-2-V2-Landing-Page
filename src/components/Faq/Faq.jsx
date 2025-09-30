// Icon
import { AiOutlinePlus } from "react-icons/ai";

import "./Faq.scss";
import { useState } from "react";

const Faq = ({items}) => {
  const [selected, setSelected] = useState(null);
  function handleClick(i) {
    if (selected == i) {
      setSelected(null);
      return;
    }

    setSelected(i);
  }
  
  return (
    <ul>
      {items?.map((item, i) => (
        <li className="accordion-item ">
          <div className="accordion-toggle" onClick={() => handleClick(i)}>
            <div className="icon">
              <AiOutlinePlus />
            </div>
            <h2
              className={
                selected == i ? "accordion-title active" : "accordion-title"
              }
            >
              {item.title}
            </h2>
          </div>
          <p
            className={
              selected == i ? "accordion-content  show" : "accordion-content"
            }
          >
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
};



export default Faq;
