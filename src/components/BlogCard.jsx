import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-item">
      <div className="card-img">
        <img src={`/images/blog-1.jpg`} alt="" />
      </div>
      <div className="blog-content">
        <p className="Date">1 Dec, 2024</p>
        <h5 className="title">A beutiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla natus
          magni, tempora doloribus animi eaque?
        </p>
        <Link to="/blog/:id" className="button">
          Leer Mas
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
