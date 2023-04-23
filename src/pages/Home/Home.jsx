import { useEffect, useState } from "react";

// Config
import { APIBASEURL } from "../../config/config";

// Style
import "./Home.scss";

// Icon
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

import { FaBookReader } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TfiBlackboard } from "react-icons/tfi";
import { SiGoogleclassroom } from "react-icons/si";

// Image
import univ1 from "/assets/image/univ1.jpg";
import computer from "/assets/image/icon/computer.png";
import accounting from "/assets/image/icon/accounting.png";
import company from "/assets/image/icon/corporate.png";

import shape1 from "/assets/svg/shape1.svg";
import shape2 from "/assets/svg/shape2.svg";

// Component
import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const Home = () => {
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

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">SMK Karya Guna Bhaki 2 Kota Bekasi</h2>
              <h1 className="heading">
                <span className="primary">Best</span> Vocational High School{" "}
                <span className="secondary">in Bekasi</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur nostrum iusto assumenda voluptatem totam neque
                molestiae tenetur! Harum, eius numquam?
              </p>
            </div>

            <div className="right">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-2m9beYGnpA?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <div className="row">
            <div
              className="left"
              style={{
                background: `url(${univ1}) no-repeat bottom`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="right">
              <h2 className="subheading">
                Kenapa harus SMK Karya Guna Bhakti 2 Kota Bekasi?
              </h2>
              <h3 className="heading">
                Manfaat Bergabung Dengan SMK Karya Guna Bhakti 2
              </h3>
              <p className="description-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam iste laboriosam voluptatem maiores ex ut corporis velit
                iure? Quibusdam, omnis est. Nam similique odit, quam officia
                pariatur ex beatae eligendi!
              </p>

              <ul className="list-excess">
                <li className="list-excess-item">
                  <AiFillCheckCircle />
                  Ter-Akreditasi A
                </li>
                <li className="list-excess-item">
                  <AiFillCheckCircle />
                  Sarana Praktik Lengkap
                </li>
                <li className="list-excess-item">
                  <AiFillCheckCircle />
                  10+ Mitra Industri
                </li>
                <li className="list-excess-item">
                  <AiFillCheckCircle />
                  Guru Yang Terampil dan Profesional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="competen">
        <div className="container">
          <div className="row">
            <h2 className="subheading">Kompetensi</h2>
            <h3 className="heading">
              Kompetensi yang tersedia di SMK Karya Guna Bhakti 2
            </h3>

            <ul className="list-competens">
              <li className="list-competen-item">
                <div className="icon">
                  <img src={computer} alt="" />
                </div>
                <div className="body">
                  <h3 className="competen-title">Teknik Komputer & Jaringan</h3>
                  <p className="competen-description">
                    Bidang Keahlian Teknik Informatika
                  </p>
                  <a href="" className="circle-arrow">
                    <BsArrowUpRight />
                  </a>
                </div>
              </li>
              <li className="list-competen-item">
                <div className="icon">
                  <img src={accounting} alt="" />
                </div>
                <div className="body">
                  <h3 className="competen-title">
                    Akuntansi & Keuangan Lembaga
                  </h3>
                  <p className="competen-description">
                    Bidang Keahlian Bisnis dan Manajemen
                  </p>
                  <a href="" className="circle-arrow">
                    <BsArrowUpRight />
                  </a>
                </div>
              </li>
              <li className="list-competen-item">
                <div className="icon">
                  <img src={company} alt="" />
                </div>
                <div className="body">
                  <h3 className="competen-title">
                    Otomatisasi & Tata Kelola Perkatoran
                  </h3>
                  <p className="competen-description">
                    Bidang Keahlian Bisnis dan Manajemen
                  </p>
                  <a href="" className="circle-arrow">
                    <BsArrowUpRight />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="info-more">
        <div className="container">
          <div className="row">
            <ul className="list-infos">
              <li className="list-info-item">
                <IoIosPeople className="icon" />
                <h2 className="info-number">1500</h2>
                <p className="info-description">
                  Siswa Karya Guna Bhakti 2 Bekasi
                </p>
              </li>
              <li className="list-info-item">
                <TfiBlackboard className="icon" />
                <h2 className="info-number">3</h2>
                <p className="info-description">Kejuruan</p>
              </li>
              <li className="list-info-item">
                <SiGoogleclassroom className="icon" />

                <h2 className="info-number">30+</h2>
                <p className="info-description">Ruang Kelas</p>
              </li>
              <li className="list-info-item">
                <FaBookReader className="icon" />

                <h2 className="info-number">60+</h2>
                <p className="info-description">
                  Guru Berkompetensi Pada Tiap Bidangnya
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <h2 className="subheading">Artikel & Berita</h2>
            <h3 className="heading">Baca Artikel & Berita Terbaru</h3>
            <Blog items={articles} />
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="left">
              <h2 className="subheading">FAQ</h2>
              <h3 className="heading">Pertanyaan yang Sering Diajukan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, aliquid! Nihil, porro, corporis provident expedita
              </p>
            </div>
            <div className="right">
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="container">
          <div className="banner-info">
            <h2 className="heading">
              Ayo, Daftar dari Sekarang. Untuk Masa Depan yang Lebih Baik.
            </h2>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              pariatur culpa laborum nesciunt soluta eveniet similique quo.
              Fugiat quaerat quos dolor quae repellat, minima animi fuga ipsum
              maxime ratione aspernatur.
            </p>
            <Button
              type="link"
              bg="secondary"
              to="http://ppdb.smkkgb2.sch.id/register"
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Shape */}
          <img src={shape1} alt="" className="shape shape1" />
          <img src={shape2} alt="" className="shape shape2" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
