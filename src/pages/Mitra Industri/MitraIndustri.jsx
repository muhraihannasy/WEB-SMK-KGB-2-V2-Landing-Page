import HeroBanner from "../../components/Hero Banner/HeroBanner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { mitraIndustriContent } from "./content";
import "./MitraIndustri.scss";

const MitraIndustri = () => {
  const { heroBanner, intro, benefits, partners, callToAction } =
    mitraIndustriContent;

  return (
    <>
      <Header />

      <HeroBanner
        title={heroBanner.title}
        currentPage={heroBanner.currentPage}
      />

      <section className="mitra-intro">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">{intro.subheading}</h2>
              <h3 className="heading">{intro.heading}</h3>
            </div>
            <div className="intro-content">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-benefits">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">{benefits.subheading}</h2>
              <h3 className="heading">{benefits.heading}</h3>
            </div>

            <div className="benefits-container">
              {benefits.categories.map((category, index) => (
                <div className="benefit-box" key={index}>
                  <h4>{category.title}</h4>
                  <ul className="benefit-list">
                    {category.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-list">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">{partners.subheading}</h2>
              <h3 className="heading">{partners.heading}</h3>
            </div>

            <div className="partners-grid">
              {partners.companies.map((company, index) => (
                <div className="partner-card" key={index}>
                  <div className="partner-logo">
                    <img
                      src={`/assets/image/partners/partner-${index + 1}.png`}
                      alt={company.name}
                    />
                  </div>
                  <div className="partner-info">
                    <h4>{company.name}</h4>
                    <p className="industry">{company.industry}</p>
                    <p className="cooperation">{company.cooperation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mitra-cta">
        <div className="container">
          <div className="row">
            <div className="cta-content">
              <h3 className="heading">{callToAction.heading}</h3>
              <p>{callToAction.description}</p>
              <div className="cta-buttons">
                <a href={callToAction.ctaLink} className="btn btn-primary">
                  {callToAction.ctaText}
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
