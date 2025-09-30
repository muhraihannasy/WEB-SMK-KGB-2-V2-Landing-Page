import CardProfile from "../../components/CardProfile/CardProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroBanner from "../../components/Hero Banner/HeroBanner";
import { profileContent } from "./content";
import "./ProfileSchool.scss";

const ProfileSchool = () => {
  const { heroBanner, about, ourTeam, vision, facilities, achievements } = profileContent;

  return (
    <>
      <Header />

      <HeroBanner title={heroBanner.title} currentPage={heroBanner.currentPage} />

      <section className="profile-about">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">{about.subheading}</h2>
              <h3 className="heading">{about.heading}</h3>
            </div>
            <div className="right">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="subheading">{vision.subheading}</h2>
              <h3 className="heading">{vision.heading}</h3>
            </div>
            
            <div className="vision-mission-content">
              <div className="vision-box">
                <h4>Visi</h4>
                <p>{vision.vision}</p>
              </div>
              
              <div className="mission-box">
                <h4>Misi</h4>
                <ul className="mission-list">
                  {vision.missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
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