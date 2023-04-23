import { Link } from "react-router-dom";

// Utilities
import { Parser } from "html-to-react";

// Style
import "./CardBlog.scss";

// Icon
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef } from "react";

const CardBlog = ({ item }) => {
  const { id, title, body, maker, image } = item;
  const cardDesriptionRef = useRef();

  useEffect(() => {
    cardDesriptionRef.current.innerHTML = body.slice(0, 120) + "...";
  }, []);
  return (
    <li className="card-blog">
      <div className="card-blog-cover">
        <img src={image} alt="" />
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
              <h3>{maker}</h3>
            </div>
          </div>
          <a className="circle-arrow" href="">
            <FiArrowUpRight />
          </a>
        </div>

        <Link className="card-title" to={`/artikel/${id}`}>
          {title}
        </Link>
        <p className="card-description" ref={cardDesriptionRef}>
          {" "}
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
