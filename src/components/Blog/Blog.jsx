import "./Blog.scss";
import CardBlog from "./Card Blog/CardBlog";

const Blog = () => {
  return (
    <ul className="list-blogs">
      <CardBlog />
      <CardBlog />
      <CardBlog />
    </ul>
  );
};

export default Blog;
