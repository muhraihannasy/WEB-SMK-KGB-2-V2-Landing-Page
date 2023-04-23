import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./Header.scss";

// Component
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

// Icon
import { VscListSelection } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephonePlus } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// Image
import Logo from "/assets/image/logo.png";

const listDropdown = [
  {
    id: 1,
    title: "Jurusan",
    subnav: [
      {
        title: "Teknik Komputer & Jaringan",
        to: "/",
      },
      {
        title: "Akutansi & Keuangan Lembaga",
        to: "/",
      },
      {
        title: "Otomatisasi & Tata Kelola Perkantoran",
        to: "/",
      },
    ],
  },
  {
    id: 2,
    title: "BKK",
    subnav: [
      {
        title: "Lowongan Pekerjaan",
        to: "/",
      },
      {
        title: "Mitra Industri",
        to: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Lainnya",
    subnav: [
      {
        title: "Foto LDKS",
        to: "/",
      },
      {
        title: "Hubungi Kami",
        to: "/",
      },
    ],
  },
];

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(e) {
    const pageYOffset = window.pageYOffset;
    setScrollPosition(pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <header>
      <div className="row">
        <div className={scrollPosition >= 102 ? "header sticky" : "header"}>
          <a href="" className="nav-logo">
            <img src={Logo} alt="Logo SMK Karya Guna Bhakti 2 Kota Bekasi" />
            <h2 className="title">SMK Karya Guna Bhakti 2 Bekasi</h2>
          </a>
          <div className="btn-open-nav" onClick={() => setIsOpenNav(true)}>
            <VscListSelection />
          </div>
        </div>

        <ul className="list-informs">
          <li className="list-inform-item">
            <div className="icon">
              <BsTelephonePlus />
            </div>
            <div className="info-detail">
              <h2 className="title">Hotline</h2>
              <p className="description">+62 824 2384 23</p>
            </div>
          </li>
          <li className="list-inform-item">
            <div className="icon">
              <TfiEmail />
            </div>
            <div className="info-detail">
              <h2 className="title">Email</h2>
              <p className="description">informasi@smkkgb2.sch.id</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={scrollPosition >= 102 ? "row sticky" : "row"}>
        <nav className={isOpenNav && "show"}>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile-sekolah">Profile Sekolah</Link>
            </li>
            <li className="nav-item">
              <Link to="http://ppdb.smkkgb2.sch.id/">PPDB</Link>
            </li>
            <li className="nav-item">
              <Link to="/artikel">Artikel</Link>
            </li>
            <li className="nav-item">
              <Dropdown
                title={listDropdown[0].title}
                subnav={listDropdown[0].subnav}
              />
            </li>
            <li className="nav-item">
              <Dropdown
                title={listDropdown[1].title}
                subnav={listDropdown[1].subnav}
              />
            </li>
            <li className="nav-item">
              <Dropdown
                title={listDropdown[2].title}
                subnav={listDropdown[2].subnav}
              />
            </li>
          </ul>
        </nav>
      </div>

      {isOpenNav && (
        <div
          className="area-close-nav"
          onClick={() => setIsOpenNav(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
