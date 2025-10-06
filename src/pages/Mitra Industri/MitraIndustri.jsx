import HeroBanner from "../../components/Hero Banner/HeroBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { mitraIndustriContent } from "./content";
import "./MitraIndustri.scss";
import { useState, useEffect } from "react";
import { APIBASEURL2 } from "../../config/config";

const MitraIndustri = () => {
  const { heroBanner, intro, benefits, partners, callToAction } =
    mitraIndustriContent;

  const [content, setContent] = useState({});

  useEffect(() => {
    // Reset scroll position to top-left when visiting or changing article ID
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `${APIBASEURL2}/cms/mitra-industri-content`
        );

        const data = await response.json();
        setContent(data?.data || {});
      } catch (error) {
        console.error("Error fetching Mitra Industri content:", error);
        setContent({});
      }
    };

    (async () => {
      await fetchContent();
    })();
  }, []);

  return (
    <>
      <Header />

      <HeroBanner
        title={content?.hero_title || heroBanner.title}
        currentPage={content?.hero_current_page || heroBanner.currentPage}
      />

      <section className="mitra-intro">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">
                {content?.intro_subheading || intro.subheading}
              </h2>
              <h3 className="heading">
                {content?.intro_heading || intro.heading}
              </h3>
            </div>
            <div className="intro-content">
              {(content?.intro_paragraphs || intro.paragraphs)?.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-benefits">
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

            <div className="benefits-container">
              {(content?.benefits_categories || benefits.categories)?.map(
                (category, index) => (
                  <div className="benefit-box" key={index}>
                    <h4>{category?.title}</h4>
                    <ul className="benefit-list">
                      {category?.items?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-list">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">
                {content?.partners_subheading || partners.subheading}
              </h2>
              <h3 className="heading">
                {content?.partners_heading || partners.heading}
              </h3>
            </div>

            <div className="partners-grid">
              {(content?.partners_companies || partners.companies)?.map(
                (company, index) => (
                  <div className="partner-card" key={index}>
                    <div className="partner-logo">
                      <img
                        src={`/assets/image/partners/partner-${index + 1}.png`}
                        alt={company?.name || ""}
                      />
                    </div>
                    <div className="partner-info">
                      <h4>{company?.name}</h4>
                      <p className="industry">{company?.industry}</p>
                      <p className="cooperation">{company?.cooperation}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-cta">
        <div className="container">
          <div className="row">
            <div className="cta-content">
              <h3 className="heading">
                {content?.cta_heading || callToAction.heading}
              </h3>
              <p>{content?.cta_description || callToAction.description}</p>
              <div className="cta-buttons">
                <a
                  href={content?.cta_link || callToAction.ctaLink}
                  className="btn btn-primary"
                >
                  {content?.cta_text || callToAction.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MitraIndustri;
