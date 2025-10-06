import { Link, useNavigate } from "react-router-dom";

// Style
import "./CardBlog.scss";

// Icon
import { useEffect, useRef } from "react";

const CardBlog = ({ item }) => {
  const { id, title, excerpt, content, cover, category, created_at } =
    item || {};
  const cardDesriptionRef = useRef();
  const navigate = useNavigate();

  const coverUrl = (cover || "").replace(/`/g, "").trim();
  const TITLE_MAX = 60;
  const EXCERPT_MAX = 120;
  const titleDisplay =
    (title || "").slice(0, TITLE_MAX) +
    ((title || "").length > TITLE_MAX ? "..." : "");

  const formatDateIndo = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d)) return "";
      return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (_) {
      return "";
    }
  };

  useEffect(() => {
    const raw = excerpt || content || "";
    const text = excerpt ? excerpt : raw.replace(/<[^>]*>/g, "");
    const sliced =
      text.slice(0, EXCERPT_MAX) + (text.length > EXCERPT_MAX ? "..." : "");
    if (cardDesriptionRef.current) {
      cardDesriptionRef.current.textContent = sliced;
    }
  }, [excerpt, content]);
  return (
    <li className="card-blog" onClick={() => navigate(`/artikel-cms/${id}`)}>
      <div className="card-blog-cover">
        <img src={coverUrl} alt="" />
      </div>
      <div className="card-blog-body" style={{ marginTop: "20px" }}>
        {/* <div className="card-author">
          <div className="card-author-info">
            <img
              src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-author-avatar"
            />
            <div className="card-author-detail">
              <p>Kategori</p>
              <h3>{category?.name || "Artikel"}</h3>
            </div>
          </div>
          <a className="circle-arrow" href={`/artikel/${id}`}>
            <FiArrowUpRight />
          </a>
        </div> */}

        <Link className="card-title" to={`/artikel/${id}`}>
          {titleDisplay}
        </Link>
        <p className="card-description" ref={cardDesriptionRef}>
          {" "}
        </p>

        <div className="card-info">
          <h4>{created_at ? formatDateIndo(created_at) : ""}</h4>
          {/* <div className="circle"></div>
          <h4>5 Comments</h4> */}
        </div>
      </div>
    </li>
  );
};

export default CardBlog;
