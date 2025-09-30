import { Link } from "react-router-dom";
import "./Footer.scss";

// Icon
import { BsTelephonePlus } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// Images
import Logo from "/assets/image/logo.png";

// Footer Content
import { footerContent } from "./content";

const Footer = () => {
  // Map icon names to actual components
  const iconComponents = {
    BsTelephonePlus: BsTelephonePlus,
    TfiEmail: TfiEmail,
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="" className="logo" />
            <h3 className="quote">{footerContent.quote}</h3>

            <ul className="list-informs">
              {footerContent.contactInfo.map((item, index) => {
                const IconComponent = iconComponents[item.icon];
                return (
                  <li className="list-inform-item" key={index}>
                    <div className="icon">
                      <IconComponent />
                    </div>
                    <p className="description">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            {footerContent.locations.map((location, index) => (
              <div className="location" key={index}>
                <h2 className="title">{location.title}</h2>
                <p className="description">{location.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="copyright">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
