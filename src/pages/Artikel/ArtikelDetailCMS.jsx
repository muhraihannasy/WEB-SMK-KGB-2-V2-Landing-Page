import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { APIBASEURL2 } from "../../config/config";
import "../../components/Blog/Detail Blog/DetailBlog.scss";

const ArtikelDetailCMS = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const descriptionRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${APIBASEURL2}/cms/articles/${id}`);
        const data = await res.json();
        const article = data?.data;
        setArticle(article);
      } catch (e) {
        console.error("Failed to fetch CMS article detail:", e);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    if (article && descriptionRef.current) {
      descriptionRef.current.innerHTML = article?.content || "";
    }
  }, [article]);

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
          {loading ? (
            <div className="row">
              <div className="left">
                <div className="blog-content skeleton">
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
                    <div
                      className="skeleton-line"
                      style={{ width: "180px" }}
                    ></div>
                  </div>
                  <div
                    className="skeleton-line"
                    style={{ width: "70%", height: "1.6em" }}
                  ></div>
                  <div
                    className="skeleton-rect"
                    style={{
                      height: "220px",
                      borderRadius: "10px",
                      margin: "1em 0",
                    }}
                  ></div>
                  <div className="skeleton-line" style={{ width: "95%" }}></div>
                  <div className="skeleton-line" style={{ width: "90%" }}></div>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                  <div className="skeleton-line" style={{ width: "95%" }}></div>
                  <div className="skeleton-line" style={{ width: "90%" }}></div>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                  <div className="skeleton-line" style={{ width: "95%" }}></div>
                  <div className="skeleton-line" style={{ width: "90%" }}></div>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                  <div className="skeleton-line" style={{ width: "95%" }}></div>
                  <div className="skeleton-line" style={{ width: "90%" }}></div>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          ) : article ? (
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
                  <div ref={descriptionRef}></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="left">
                <h2 className="title">Artikel tidak ditemukan</h2>
                <p>Silakan kembali dan pilih artikel lainnya.</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ArtikelDetailCMS;
