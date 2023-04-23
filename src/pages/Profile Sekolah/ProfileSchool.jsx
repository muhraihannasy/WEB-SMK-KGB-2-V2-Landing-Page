import CardProfile from "../../components/CardProfile/CardProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroBanner from "../../components/Hero Banner/HeroBanner";
import "./ProfileSchool.scss";

const ProfileSchool = () => {
  return (
    <>
      <Header />

      <HeroBanner title="Profile Sekolah" currentPage="/profile-sekolah" />

      <section className="profile-about">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">Tentang SMK KGB 2</h2>
              <h3 className="heading">
                Manfaat Bergabung Dengan SMK Karya Guna Bhakti 2
              </h3>
            </div>
            <div className="right">
              <p>
                SMK Karya Guna Bhakti 2 adalah sekolah menengah kejuruan yang
                berada di Kota Bekasi, dengan kurikulum yang terus dikembangkan
                dan disesuaikan dengan kebutuhan dunia industri yang semakin
                berkembang.
              </p>
              <p>
                Kami hadir dengan misi untuk menghasilkan lulusan yang
                berkualitas dan siap menghadapi tantangan dunia kerja. Di SMK
                Karya Guna Bhakti 2, kami menyediakan berbagai program keahlian
                seperti Teknik Komputer dan Jaringan, Tata Kelola Perkantoran
                dan Akuntansi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="our-team">
        <div className="container">
          <div className="row">
            <CardProfile
              name="Yuli Veli Susanti"
              division="Kepala Sekolah SMK Karya Guna Bhakti 2"
            />
            <CardProfile
              name="Yuli Veli Susanti"
              division="Kepala Sekolah SMK Karya Guna Bhakti 2"
            />
            <CardProfile
              name="Yuli Veli Susanti"
              division="Kepala Sekolah SMK Karya Guna Bhakti 2"
            />
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default ProfileSchool;
