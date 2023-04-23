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
