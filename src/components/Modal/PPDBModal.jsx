import React from "react";
import Modal from "./Modal";
import "./Modal.scss";

const PPDBModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="ppdb-modal">
        <h3>
          Ingin <span className="highlight">mencari sekolah</span> terbaik ?
        </h3>
        <h3>
          Jangan bingung, pilih <span className="highlight">KGB 2 AJA!!</span>.
        </h3>

        <div className="informasi">
          <h4>Informasi PPDB 2025/2026</h4>
          <div className="jurusan-list">
            <p>Pilihan Kompetensi/Jurusan:</p>
            <p className="jurusan-item">1. Teknik Komputer & Jaringan (TKJ)</p>
            <p className="jurusan-item">2. Managemen Perkantoran (MP)</p>
            <p className="jurusan-item">3. Akutansi</p>
          </div>
        </div>

        <div className="contact-info">
          <p>Hubungi Nomer Dibawah ini :</p>
          <div className="phone-numbers">
            <a
              href="https://wa.me/6281211625618"
              target="_blank"
              rel="noopener noreferrer"
              className="phone-number"
            >
              6281211625618
            </a>
            <a
              href="https://wa.me/6281221801090"
              target="_blank"
              rel="noopener noreferrer"
              className="phone-number"
            >
              6281221801090
            </a>
            <a
              href="https://wa.me/6281221107777"
              target="_blank"
              rel="noopener noreferrer"
              className="phone-number"
            >
              6281221107777
            </a>
          </div>
        </div>

        <button className="cta-button" onClick={onClose}>
          Daftar PPDB Sekarang!
        </button>
      </div>
    </Modal>
  );
};

export default PPDBModal;
