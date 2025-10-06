import { useState, useEffect } from "react";

// Config
import { APIBASEURL2 } from "../../config/config";

// Style
import "./Artikel.scss";

// Component
import Blog from "../../components/Blog/Blog";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingShowMore, setLoadingShowMore] = useState(false);

  useEffect(() => {
    // Reset scroll position to top-left when visiting or changing article ID
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${APIBASEURL2}/cms/articles/list?limit=6&page=${currentPage}`
        );
        const data = await response.json();
        const articles = data?.data?.data;

        if (data?.data?.last_page === data?.data?.current_page) {
          setShowMore(false);
        } else {
          setShowMore(true);
        }

        setArticles((prevArticles) => [...prevArticles, ...articles]);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoadingArticles(false);
      }
    };

    (async () => fetchData())();
  }, [currentPage]);

  return (
    <>
      <Header />

      <section className="artikel">
        <div className="container">
          <h2 className="heading">Artikel</h2>
          <Blog items={articles} loading={loadingArticles} />

          <div className="wrapper-btn-show-more">
            {showMore && (
              <button
                className="btn-link secondary"
                onClick={() => {
                  setLoadingShowMore(true);
                  setCurrentPage((prevPage) => prevPage + 1);
                }}
              >
                {loadingShowMore ? "Loading..." : "Lihat lebih banyak"}
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Artikel;
