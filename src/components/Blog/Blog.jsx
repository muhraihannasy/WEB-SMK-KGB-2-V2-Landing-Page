import "./Blog.scss";
import CardBlog from "./Card Blog/CardBlog";

const Blog = ({ items }) => {
  return (
    <ul className="list-blogs">
      {items.map((item, i) => (
        <CardBlog key={i} item={item} />
      ))}
    </ul>
  );
};

export default Blog;
