import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({ type, to, children, bg }) => {
  if (type === "link")
    return (
      <Link to={to} className={`btn-link ${bg}`}>
        {children}
      </Link>
    );
  return <button className={`btn ${bg}`}>{children}</button>;
};

export default Button;
