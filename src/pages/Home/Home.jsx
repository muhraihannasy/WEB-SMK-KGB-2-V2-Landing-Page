import { useEffect, useState } from "react";

// Config
import { APIBASEURL } from "../../config/config";

// Content
import { homeContent } from "./content";

// Style
import "./Home.scss";

// Icon
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

import { FaBookReader } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TfiBlackboard } from "react-icons/tfi";
import { SiGoogleclassroom } from "react-icons/si";

// Image
import univ1 from "/assets/image/univ1.jpg";
import computer from "/assets/image/icon/computer.png";
import accounting from "/assets/image/icon/accounting.png";
import company from "/assets/image/icon/corporate.png";

import shape1 from "/assets/svg/shape1.svg";
import shape2 from "/assets/svg/shape2.svg";

// Component
import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { hero, why, competencies, infoMore, blog, faq, banner } = homeContent;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${APIBASEURL}/blogs`);
      const data = await response.json();
      setArticles(data);
    };
    (async () => fetchData())();
  }, []);

  // Map icon names to actual components
  const getIconComponent = (iconName) => {
    const iconMap = {
      IoIosPeople,
      TfiBlackboard,
      SiGoogleclassroom,
      FaBookReader
    };
    return iconMap[iconName] || null;
  };

  // Map competency icons to image sources
  const getCompetencyIcon = (iconName) => {
    const iconMap = {
      computer,
      accounting,
      company
    };
    return iconMap[iconName] || null;
  };

  return (
    <>
      <Header />

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{hero.subheading}</h2>
              <h1 className="heading">
                <span className="primary">{hero.heading.part1}</span> {hero.heading.part2}{" "}
                <span className="secondary">{hero.heading.part3}</span>
              </h1>
              <p style={{ marginBottom: "3em" }}>
                {hero.description}
              </p>

              <a
                className="btn-link secondary"
                href={hero.ctaLink}
                target="_blank"
              >
                {hero.ctaText}
              </a>
            </div>

            <div className="right">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-2m9beYGnpA?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <div className="row">
            <div
              className="left"
              style={{
                background: `url(${univ1}) no-repeat bottom`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="right">
              <h2 className="subheading">
                {why.subheading}
              </h2>
              <h3 className="heading">
                {why.heading}
              </h3>
              <p className="description-grey">
                {why.description}
              </p>

              <ul className="list-excess">
                {why.benefits.map((benefit, index) => (
                  <li key={index} className="list-excess-item">
                    <AiFillCheckCircle />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="competen">
        <div className="container">
          <div className="row">
            <h2 className="subheading">{competencies.subheading}</h2>
            <h3 className="heading">
              {competencies.heading}
            </h3>

            <ul className="list-competens">
              {competencies.items.map((item, index) => (
                <li key={index} className="list-competen-item">
                  <div className="icon">
                    <img src={getCompetencyIcon(item.icon)} alt="" />
                  </div>
                  <div className="body">
                    <h3 className="competen-title">{item.title}</h3>
                    <p className="competen-description">
                      {item.description}
                    </p>
                    <a href="" className="circle-arrow">
                      <BsArrowUpRight />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="info-more">
        <div className="container">
          <div className="row">
            <ul className="list-infos">
              {infoMore.items.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <li key={index} className="list-info-item">
                    {IconComponent && <IconComponent className="icon" />}
                    <h2 className="info-number">{item.number}</h2>
                    <p className="info-description">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <h2 className="subheading">{blog.subheading}</h2>
            <h3 className="heading">{blog.heading}</h3>
            <Blog items={articles} />
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{faq.subheading}</h2>
              <h3 className="heading">{faq.heading}</h3>
              <p>{faq.description}</p>
            </div>
            <div className="right">
              <Faq items={homeContent.faq.items} />
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <div className="banner-info">
            <h2 className="heading">
              {banner.heading}
            </h2>
            <p className="description">
              {banner.description}
            </p>
            <Button
              type="link"
              bg="secondary"
              to={banner.ctaLink}
            >
              {banner.ctaText}
            </Button>
          </div>

          {/* Shape */}
          <img src={shape1} alt="" className="shape shape1" />
          <img src={shape2} alt="" className="shape shape2" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;