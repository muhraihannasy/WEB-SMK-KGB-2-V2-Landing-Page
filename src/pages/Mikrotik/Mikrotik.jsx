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

              {articlesLoading ? (
                <ul className="articles-grid skeleton">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <li key={idx} className="article-card">
                      <div className="cover">
                        <div
                          className="skeleton-rect"
                          style={{ height: "180px" }}
                        ></div>
                      </div>
                      <div className="body">
                        <div
                          className="skeleton-line"
                          style={{ width: "80%", height: "1.2em" }}
                        ></div>
                        <div
                          className="skeleton-line"
                          style={{ width: "95%" }}
                        ></div>
                        <div
                          className="skeleton-line"
                          style={{ width: "90%" }}
                        ></div>
                        <div
                          className="skeleton-line"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : Array.isArray(articles) && articles.length > 0 ? (
                <>
                  <ul className="articles-grid">
                    {articles.map((item) => (
                      <li key={item.id} className="article-card">
                        <Link
                          className="card-link"
                          to={`/artikel-cms/${item.id}`}
                        >
                          <div className="cover">
                            <img src={item.cover} alt={item.title} />
                          </div>
                          <div className="body">
                            <h4 className="title">
                              {truncate(item.title, 100)}
                            </h4>
                            <p className="excerpt">{item.excerpt}</p>
                            {item.created_at && (
                              <p className="meta">
                                {new Date(item.created_at).toLocaleDateString(
                                  "id-ID",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {isShowMore && (
                    <div className="show-more-wrapper">
                      <button
                        type="button"
                        className="show-more"
                        onClick={() => {
                          setLoadingShowMore(true);
                          setCurrentPage((c) => c + 1);
                        }}
                      >
                        {loadingShowMore ? (
                          <div className="loading-spinner">
                            <p>Loading...</p>
                          </div>
                        ) : (
                          "Tampilkan Lebih Banyak"
                        )}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="empty">Belum ada artikel.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mikrotik;
