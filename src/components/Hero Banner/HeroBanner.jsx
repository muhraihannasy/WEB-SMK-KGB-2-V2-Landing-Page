import { Link } from "react-router-dom";
import "./HeroBanner.scss";

const HeroBanner = ({ title, currentPage, url }) => {
  return (
    <section
      className="hero-banner"
      style={{
        background: `url(${url})`,
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
