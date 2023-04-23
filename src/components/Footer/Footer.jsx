import { Link } from "react-router-dom";
import "./Footer.scss";

// Icon
import { BsTelephonePlus } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

// Images
import Logo from "/assets/image/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="" className="logo" />
            <h3 className="quote">
              SMK Karya Guna Bhakti 2 Bekasi | SMK Bisa! Luar Biasa
            </h3>

            <ul className="list-informs">
              <li className="list-inform-item">
                <div className="icon">
                  <BsTelephonePlus />
                </div>
                <p className="description">+62 824 2384 23</p>
              </li>
              <li className="list-inform-item">
                <div className="icon">
                  <TfiEmail />
                </div>
                <p className="description">informasi@smkkgb2.sch.id</p>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="location">
              <h2 className="title">Kampus A</h2>
              <p className="description">
                Jl. Anggrek 1, RT.002/RW.016, Duren Jaya, Kec. Bekasi Tim., Kota
                Bks, Jawa Barat 17111
              </p>
            </div>

            <div className="location">
              <h2 className="title">Kampus B</h2>
              <p className="description">
                Jl. H.Ujan, RT.006/RW.007, Duren Jaya, Kec. Bekasi Tim., Kota
                Bks, Jawa Barat 17111
              </p>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright ©2023 SMK Karya Guna Bhakti 2 Kota Bekasi All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
