import { useEffect, useState } from "react";

// Config
import { APIBASEURL, APIBASEURL2 } from "../../config/config";

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
import PPDBModal from "../../components/Modal/PPDBModal";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [content, setContent] = useState({});

  useEffect(() => {
    // Reset scroll position to top-left when visiting or changing article ID
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`${APIBASEURL}/blogs`);
    //     const data = await response.json();
    //     setArticles(data || []);
    //   } catch (error) {
    //     console.error("Error fetching articles:", error);
    //     setArticles([]);
    //   }
    // };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${APIBASEURL2}/cms/articles/list?limit=6`
        );
        const data = await response.json();
        const articles = data?.data?.data;

        setArticles(articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoadingArticles(false);
      }
    };

    const fetchContent = async () => {
      try {
        const response = await fetch(`${APIBASEURL2}/cms/home-content`);
        const data = await response.json();
        setContent(data?.data || {});
      } catch (error) {
        console.error("Error fetching content:", error);
        setContent({});
      }
    };

    (async () => fetchContent())();
    (async () => fetchData())();
  }, []);

  // Map icon names to actual components
  const getIconComponent = (iconName) => {
    const iconMap = {
      IoIosPeople,
      TfiBlackboard,
      SiGoogleclassroom,
      FaBookReader,
    };
    return iconMap[iconName] || null;
  };

  // Map competency icons to image sources
  const getCompetencyIcon = (iconName) => {
    const iconMap = {
      computer,
      accounting,
      company,
    };
    return iconMap[iconName] || null;
  };

  return (
    <>
      <Header />

      {/* PPDB Modal */}
      <PPDBModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{content?.hero_subheading || ""}</h2>
              <h1 className="heading">
                <span className="primary">
                  {content?.hero_heading_part1 || ""}
                </span>{" "}
                {content?.hero_heading_part2 || ""}{" "}
                <span className="secondary">
                  {content?.hero_heading_part3 || ""}
                </span>
              </h1>
              <p style={{ marginBottom: "3em" }}>
                {content?.hero_description || ""}
              </p>

              {content?.hero_cta_link && (
                <a
                  className="btn-link secondary"
                  href={content.hero_cta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content?.hero_cta_text || ""}
                </a>
              )}
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

      <section className="blog">
        <div className="container">
          <div className="row">
            <h2 className="subheading">{content?.blog_subheading || ""}</h2>
            <h3 className="heading">{content?.blog_heading || ""}</h3>
            <Blog items={articles} loading={loadingArticles} />
            <div
              style={{
                marginTop: "1.5em",
                textAlign: "center",
                marginTop: "3em",
              }}
            >
              <Button type="link" bg="secondary" to="/artikel">
                Lihat banyak artikel
              </Button>
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
              <h2 className="subheading">{content?.why_subheading || ""}</h2>
              <h3 className="heading">{content?.why_heading || ""}</h3>
              <p className="description-grey">
                {content?.why_description || ""}
              </p>

              <ul className="list-excess">
                {content?.why_benefits?.map((benefit, index) => (
                  <li key={index} className="list-excess-item">
                    <AiFillCheckCircle />
                    {benefit}
                  </li>
                )) || []}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="competen">
        <div className="container">
          <div className="row">
            <h2 className="subheading">
              {content?.competencies_subheading || ""}
            </h2>
            <h3 className="heading">{content?.competencies_heading || ""}</h3>

            <ul className="list-competens">
              {content?.competencies_items?.map((item, index) => (
                <li key={index} className="list-competen-item">
                  <div className="icon">
                    <img src={getCompetencyIcon(item?.icon)} alt="" />
                  </div>
                  <div className="body">
                    <h3 className="competen-title">{item?.title || ""}</h3>
                    <p className="competen-description">
                      {item?.description || ""}
                    </p>
                    <a href="" className="circle-arrow">
                      <BsArrowUpRight />
                    </a>
                  </div>
                </li>
              )) || []}
            </ul>
          </div>
        </div>
      </section>

      <section className="info-more">
        <div className="container">
          <div className="row">
            <ul className="list-infos">
              {content?.info_more_items?.map((item, index) => {
                const IconComponent = getIconComponent(item?.icon);
                return (
                  <li key={index} className="list-info-item">
                    {IconComponent && <IconComponent className="icon" />}
                    <h2 className="info-number">{item?.number || ""}</h2>
                    <p className="info-description">
                      {item?.description || ""}
                    </p>
                  </li>
                );
              }) || []}
            </ul>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{content?.faq_subheading || ""}</h2>
              <h3 className="heading">{content?.faq_heading || ""}</h3>
              <p>{content?.faq_description || ""}</p>
            </div>
            <div className="right">
              <Faq items={content?.faq_items || []} />
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <div className="banner-info">
            <h2 className="heading">{content?.banner_heading || ""}</h2>
            <p className="description">{content?.banner_description || ""}</p>
            {content?.banner_cta_link && (
              <Button type="link" bg="secondary" to={content.banner_cta_link}>
                {content?.banner_cta_text || ""}
              </Button>
            )}
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
