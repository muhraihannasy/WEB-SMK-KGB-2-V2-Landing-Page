import { Link } from "react-router-dom";
import "./HeroBanner.scss";

const HeroBanner = ({ title, currentPage }) => {
  return (
    <section
      className="hero-banner"
      style={{
        background: `url(https://images.unsplash.com/photo-1663056323273-d1c7955fd1aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h2 className="heading">{title}</h2>

        <div className="crumben">
          <Link to="/">Home</Link>
          <div className="circle">
            <div className="dot"></div>
          </div>
          <Link to={currentPage} className="active">
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
