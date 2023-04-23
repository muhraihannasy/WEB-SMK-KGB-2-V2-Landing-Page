import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Config
import { APIBASEURL } from "../../../config/config";

// Style
import "./DetailBlog.scss";

// Component
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const DetailBlog = () => {
  const [article, setArticle] = useState({
    id: "",
    title: "",
    body: "",
    maker: "",
    image: "",
    created_at: "",
  });

  const { id } = useParams();
  const desriptionRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${APIBASEURL}/blogs/${id}`);
      const data = await response.json();
      setArticle(data[0]);
      desriptionRef.current.innerHTML = data[0]?.body;
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
                  <h2 className="info-user-name">{article.maker}</h2>
                  <p>Dibuat {new Date(article.created_at).getFullYear()}</p>
                </div>
              </div>

              <div className="blog-content">
                <h2 className="blog-title">{article.title}</h2>
                <img src={article.image} alt="" className="image-content" />
                <div ref={desriptionRef}></div>
              </div>
            </div>
            <div className="right">
              <div className="wrapper">
                <h2 className="title">Artikel Terbaru</h2>
                <div className="recent-blogs">
                  <div className="recent-blog-item">
                    <div className="recent-blog-info">
                      <img
                        src="https://images.unsplash.com/photo-1682193965136-c8650b543426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="recent-blog-cover"
                      />

                      <div className="recent-blog-info-detail">
                        <h2>Muhammad Raihan Nasywaan</h2>
                        <p>January 4, 2023</p>
                      </div>
                    </div>

                    <h3>Training dan Sertifikasi Siswa TKJ Kelas MTCNA</h3>
                  </div>
                  <div className="recent-blog-item">
                    <div className="recent-blog-info">
                      <img
                        src="https://images.unsplash.com/photo-1682193965136-c8650b543426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="recent-blog-cover"
                      />

                      <div className="recent-blog-info-detail">
                        <h2>Muhammad Raihan Nasywaan</h2>
                        <p>January 4, 2023</p>
                      </div>
                    </div>

                    <h3>Training dan Sertifikasi Siswa TKJ Kelas MTCNA</h3>
                  </div>
                  <div className="recent-blog-item">
                    <div className="recent-blog-info">
                      <img
                        src="https://images.unsplash.com/photo-1682193965136-c8650b543426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="recent-blog-cover"
                      />

                      <div className="recent-blog-info-detail">
                        <h2>Muhammad Raihan Nasywaan</h2>
                        <p>January 4, 2023</p>
                      </div>
                    </div>

                    <h3>Training dan Sertifikasi Siswa TKJ Kelas MTCNA</h3>
                  </div>
                </div>
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
