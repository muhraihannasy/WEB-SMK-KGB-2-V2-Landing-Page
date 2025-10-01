import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroBanner from "../../components/Hero Banner/HeroBanner";
import { APIBASEURL2 } from "../../config/config";
import { profileContent } from "./content";
import "./ProfileSchool.scss";

const ProfileSchool = () => {
  const { heroBanner, about, vision } = profileContent;
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${APIBASEURL2}/cms/profile-content`);

        const data = await response.json();
        setContent(data?.data || {});
      } catch (error) {
        console.error("Error fetching Profile School content:", error);
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

      <section className="profile-about">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">
                {content?.about_subheading || about.subheading}
              </h2>
              <h3 className="heading">
                {content?.about_heading || about.heading}
              </h3>
            </div>
            <div className="right">
              {(content?.about_paragraphs || about.paragraphs)?.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">
                {content?.vision_subheading || vision.subheading}
              </h2>
              <h3 className="heading">
                {content?.vision_heading || vision.heading}
              </h3>
            </div>

            <div className="vision-mission-content">
              <div className="vision-box">
                <h4>Visi</h4>
                <p>{content?.vision_text || vision.vision}</p>
              </div>

              <div className="mission-box">
                <h4>Misi</h4>
                <ul className="mission-list">
                  {(content?.vision_missions || vision.missions)?.map(
                    (mission, index) => (
                      <li key={index}>{mission}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProfileSchool;
