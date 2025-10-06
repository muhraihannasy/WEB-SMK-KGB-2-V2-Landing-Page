import { useState, useEffect } from "react";

// Config
import { APIBASEURL } from "../../config/config";

// Style
import "./Artikel.scss";

// Component
import Blog from "../../components/Blog/Blog";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Artikel = () => {
  const [articles, setArticles] = useState([]);

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
      const response = await fetch(`${APIBASEURL}/blogs`);
      const data = await response.json();
      setArticles(data);
    };
    (async () => fetchData())();
  }, []);
  return (
    <>
      <Header />

      <section className="artikel">
        <div className="container">
          <h2 className="heading">Artikel</h2>
          <Blog items={articles} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Artikel;
