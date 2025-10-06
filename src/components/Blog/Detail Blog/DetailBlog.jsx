import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <>
      <Header />

      <section className="detail-blog">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="info-blog">
                <div className="info-profile-user">
                  <img
                    src="https://images.unsplash.com/photo-1682070545191-57347361ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="info-detail">
                  <h2 className="info-user-name">Artikel</h2>
                  <p>
                    Dibuat{" "}
                    {article?.created_at
                      ? new Date(article.created_at).getFullYear()
                      : ""}
                  </p>
                </div>
              </div>

              <div className="blog-content">
                <h2 className="blog-title">{article.title}</h2>
                <img
                  src={(article.cover || "").replace(/`/g, "").trim()}
                  alt=""
                  className="image-content"
                />
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
