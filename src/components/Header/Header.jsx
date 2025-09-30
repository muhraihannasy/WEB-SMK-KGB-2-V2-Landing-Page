import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./Header.scss";

// Component
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

// Icon
import { VscListSelection } from "react-icons/vsc";
import { BsTelephonePlus } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// Image
import Logo from "/assets/image/logo.png";

// Content
import { headerContent } from "./content";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Map icon names to actual components
  const iconComponents = {
    BsTelephonePlus: BsTelephonePlus,
    TfiEmail: TfiEmail,
  };

  function handleScroll(e) {
    const pageYOffset = window.pageYOffset;
    setScrollPosition(pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="row">
        <div className={scrollPosition >= 102 ? "header sticky" : "header"}>
          <a href="" className="nav-logo">
            <img src={Logo} alt={headerContent.logo.alt} />
            <h2 className="title">{headerContent.logo.title}</h2>
          </a>
          <div className="btn-open-nav" onClick={() => setIsOpenNav(true)}>
            <VscListSelection />
          </div>
        </div>

        <ul className="list-informs">
          {headerContent.contactInfo.map((item, index) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <li className="list-inform-item" key={index}>
                <div className="icon">
                  <IconComponent />
                </div>
                <div className="info-detail">
                  <h2 className="title">{item.title}</h2>
                  <p className="description">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={
          scrollPosition >= 102 ? " row sticky wrapper-nav" : "row wrapper-nav"
        }
      >
        <nav className={isOpenNav ? "show" : ""}>
          <ul className="nav-items">
            {headerContent.navigation.map((item, index) => (
              <li className="nav-item" key={index}>
                {item.type === "link" ? (
                  <Link to={item.to}>{item.title}</Link>
                ) : (
                  <Dropdown title={item.title} subnav={item.subnav} />
                )}
              </li>
            ))}
          </ul>

          <ul className="wrapper-buttons">
            {headerContent.buttons.map((button, index) => (
              <li key={index}>
                <Button type={button.type} bg={button.bg} to={button.to}>
                  {button.title}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpenNav && (
        <div
          className="area-close-nav"
          onClick={() => setIsOpenNav(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
