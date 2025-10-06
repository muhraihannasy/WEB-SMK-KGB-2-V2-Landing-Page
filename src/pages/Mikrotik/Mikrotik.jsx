import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroBanner from "../../components/Hero Banner/HeroBanner";
import { APIBASEURL2 } from "../../config/config";
import { mikrotikContent } from "./content";
import { AiFillCheckCircle } from "react-icons/ai";
// import headmasterImage from "/assets/image/headmaster.jpg"; // You'll need to add this image
import mikrotikGroup from "/assets/image/mikrotik-group.png"; // You'll need to add this image

// Style
import "./Mikrotik.scss";
import Blog from "../../components/Blog/Blog";

const Mikrotik = () => {
  const { heroBanner, headmaster, about, benefits } = mikrotikContent;
  const [content, setContent] = useState({});
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [isShowMore, setIsShowMore] = useState(false);
  const [loadingShowMore, setLoadingShowMore] = useState(false);

  const truncate = (str = "", max = 100) =>
    str.length > max ? str.slice(0, max) + "..." : str;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${APIBASEURL2}/cms/articles/list?category_name=mikrotik&page=${currentPage}&limit=6`
        );
        const data = await response.json();
        const articles = data?.data?.data;

        if (data?.data?.last_page > data?.data?.current_page) {
          setIsShowMore(true);
        } else {
          setIsShowMore(false);
        }

        setArticles((prev) => [...prev, ...articles]);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setContent((prev) => ({ ...prev, articles: [] }));
      } finally {
        setArticlesLoading(false);
        setLoadingShowMore(false);
      }
    };

    (async () => fetchArticles())();
  }, [currentPage]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${APIBASEURL2}/cms/mikrotik-content`);
        const data = await response.json();
        setContent(data?.data || {});
      } catch (error) {
        console.error("Error fetching content:", error);
        setContent({});
      }
    };

    (async () => fetchContent())();
  }, []);

  return (
    <>
      <Header />

      <HeroBanner
        title={content?.hero_title || heroBanner.title}
        currentPage={content?.hero_current_page || heroBanner.currentPage}
      />

      <section className="mikrotik-headmaster">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">
                {content?.headmaster_subheading || headmaster.subheading}
              </h2>
              <h3 className="heading">
                {content?.headmaster_heading || headmaster.heading}
              </h3>
              <h4 className="name">
                {content?.headmaster_name || headmaster.name}
              </h4>
            </div>
            <div className="right">
              {(content?.headmaster_paragraphs || headmaster.paragraphs).map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mikrotik-about">
        <div className="container">
          <div className="row">
            <div className="left">
              <img
                src={mikrotikGroup}
                alt="Mikrotik Academy Logo"
                className="responsive-image"
              />
            </div>
            <div className="right">
              <h2 className="subheading">
                {content?.about_subheading || about.subheading}
              </h2>
              <h3 className="heading">
                {content?.about_heading || about.heading}
              </h3>

              {(content?.about_paragraphs || about.paragraphs).map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mikrotik-benefits">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">
                {content?.benefits_subheading || benefits.subheading}
              </h2>
              <h3 className="heading">
                {content?.benefits_heading || benefits.heading}
              </h3>
            </div>

            <ul className="benefits-list">
              {(content?.benefits_items || benefits.items).map(
                (benefit, index) => (
                  <li key={index} className="benefit-item">
                    <AiFillCheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                )
              )}
            </ul>

            <div className="mikrotik-articles">
              <div className="section-header">
                <h3 className="heading">Artikel Mikrotik</h3>
              </div>

              <Blog items={articles} loading={articlesLoading} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mikrotik;
