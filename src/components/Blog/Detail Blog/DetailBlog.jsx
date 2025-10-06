import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// Config
import { APIBASEURL2 } from "../../../config/config";

// Style
import "./DetailBlog.scss";

// Component
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const DetailBlog = () => {
  const [article, setArticle] = useState({
    id: "",
    title: "",
    content: "",
    cover: "",
    category: {},
    created_at: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

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
      const response = await fetch(`${APIBASEURL2}/cms/articles/${id}`);

      const data = await response.json();
      const article = data?.data;

      setArticle(article);
    };
    (async () => fetchData())();
  }, []);

  const normalizeUrl = (url) => (url || "").replace(/[`]/g, "").trim();
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (_) {
      return dateStr;
    }
  };
  return (
    <>
      <Header />

      <section className="detail-blog cms-detail">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="blog-content">
                <div className="content-header">
                  <button
                    type="button"
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Kembali"
                  >
                    <BsArrowLeft />
                    Kembali
                  </button>
                  <p className="meta-date">
                    Dibuat {formatDate(article.created_at)}
                  </p>
                </div>
                <h2 className="blog-title">{article.title}</h2>
                {article.cover && (
                  <img
                    src={normalizeUrl(article.cover)}
                    alt=""
                    className="image-content"
                  />
                )}
                <div
                  className="blog-html"
                  dangerouslySetInnerHTML={{ __html: article?.content || "" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailBlog;
