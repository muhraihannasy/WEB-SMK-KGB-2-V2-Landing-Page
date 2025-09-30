
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroBanner from "../../components/Hero Banner/HeroBanner";
import { mikrotikContent } from "./content";
import { AiFillCheckCircle } from "react-icons/ai";
// import headmasterImage from "/assets/image/headmaster.jpg"; // You'll need to add this image
// import mikrotikLogo from "/assets/image/mikrotik-logo.png"; // You'll need to add this image

// Style
import "./Mikrotik.scss";

const Mikrotik = () => {
  const { heroBanner, headmaster, about, benefits } = mikrotikContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <HeroBanner title={heroBanner.title} currentPage={heroBanner.currentPage} />

      <section className="mikrotik-headmaster">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{headmaster.subheading}</h2>
              <h3 className="heading">{headmaster.heading}</h3>
              <h4 className="name">{headmaster.name}</h4>
            </div>
            <div className="right">
              {headmaster.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mikrotik-about">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="mikrotik-logo">
                {/* <img src={mikrotikLogo} alt="Mikrotik Academy Logo" /> */}
              </div>
            </div>
            <div className="right">
              <h2 className="subheading">{about.subheading}</h2>
              <h3 className="heading">{about.heading}</h3>
              
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mikrotik-benefits">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">{benefits.subheading}</h2>
              <h3 className="heading">{benefits.heading}</h3>
            </div>
            
            <ul className="benefits-list">
              {benefits.items.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <AiFillCheckCircle className="check-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mikrotik;
