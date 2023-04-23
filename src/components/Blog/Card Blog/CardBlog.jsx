// Icon
import { FiArrowUpRight } from "react-icons/fi";

import "./CardBlog.scss";

const CardBlog = () => {
  return (
    <li className="card-blog">
      <div className="card-blog-cover">
        <img src="https://api.smkkgb2.sch.id/images/1673310511.jpg" alt="" />
      </div>
      <div className="card-blog-body">
        <div className="card-author">
          <div className="card-author-info">
            <img
              src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-author-avatar"
            />
            <div className="card-author-detail">
              <p>Post By</p>
              <h3>Muhammad Raihan</h3>
            </div>
          </div>
          <a className="circle-arrow" href="">
            <FiArrowUpRight />
          </a>
        </div>

        <a className="card-title" href="">
          Training dan Sertifikasi Siswa TKJ Kelas MTCNA..
        </a>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          ratione....
        </p>

        <div className="card-info">
          <h4>25 Desember</h4>
          <div className="circle"></div>
          <h4>5 Comments</h4>
        </div>
      </div>
    </li>
  );
};

export default CardBlog;
