// Icon
import { AiOutlinePlus } from "react-icons/ai";

import "./Faq.scss";
import { useState } from "react";

const Faq = () => {
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
      {data.map((item, i) => (
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

const data = [
  {
    title: "Who wil view my content",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque aliquam quidem necessitatibus quis, eligendi doloribus a debitis eaque quo earum odio ipam quidem necessitatibus quis, eligendi doloribus a debitis eaque quo earum odio ipam quidem necessitatibus quis, eligendi doloribus a debitis eaque quo earum odio ip",
  },
  {
    title: "How long it take to create a video course",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque aliquam quidem necessitatibus quis, eligendi doloribus a debitis eaque quo earum odio ip",
  },
  {
    title: "How to change my password easily",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque aliquam quidem necessitatibus quis, eligendi doloribus a debitis eaque quo earum odio ip",
  },
];

export default Faq;
