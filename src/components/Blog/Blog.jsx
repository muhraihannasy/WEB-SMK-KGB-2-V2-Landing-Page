import "./Blog.scss";
import CardBlog from "./Card Blog/CardBlog";

const SkeletonItem = () => (
  <li className="card-blog skeleton">
    <div className="card-blog-cover skeleton-rect"></div>
    <div className="card-blog-body" style={{ marginTop: "20px" }}>
      <div
        className="skeleton-line"
        style={{ width: "80%", height: "1.2em" }}
      ></div>
      <div className="skeleton-line" style={{ width: "95%" }}></div>
      <div className="skeleton-line" style={{ width: "90%" }}></div>
      <div className="card-info">
        <div className="skeleton-line" style={{ width: "40%" }}></div>
      </div>
    </div>
  </li>
);

const Blog = ({ items = [], loading = false }) => {
  const renderItems = () => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, i) => <SkeletonItem key={i} />);
    }
    return items.map((item, i) => <CardBlog key={i} item={item} />);
  };
  return <ul className="list-blogs">{renderItems()}</ul>;
};

export default Blog;
