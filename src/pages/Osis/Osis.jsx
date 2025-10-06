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

import Blog from "../../components/Blog/Blog";

// Style
import "./Osis.scss";

const Osis = () => {
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
          `${APIBASEURL2}/cms/articles/list?category_name=osis&page=${currentPage}&limit=6`
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
      } finally {
        setArticlesLoading(false);
        setLoadingShowMore(false);
      }
    };

    (async () => fetchArticles())();
  }, [currentPage]);

  return (
    <>
      <Header />

      <section className="mikrotik-benefits" style={{}}>
        <div className="container">
          <div className="row">
            <div className="mikrotik-articles">
              <div className="section-header">
                <h3 className="heading">
                  OSIS SMK Karya Guna Bhakti 2 Kota Bekasi
                </h3>
              </div>

              <Blog items={[...articles]} loading={articlesLoading} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Osis;
