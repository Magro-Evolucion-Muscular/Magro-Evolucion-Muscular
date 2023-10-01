import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProducts() {
  return (
    <div className="specialProducts-items-content col-3">
      <img src="/images/watch.jpg" alt="" className="img-fluid"/>
      <div className="specialProducts-content">
        <h5 className="brand">BirdMan</h5>
        <h6 className="title">Creatina Monohidratada</h6>
        <ReactStars
          count={5}
          size={24}
          value={3}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="price">
          <span className="red-p">$100</span>
          &nbsp;
          <strike>$200</strike>
        </p>
        <div className="discount-till">
          <p>
            <b>5 dias</b>
          </p>
          <div className="badge">
            <span>10</span>
            <b>:</b>
            <span>10</span>
            <b>:</b>
            <span>10</span>
          </div>
        </div>
        <div className="prod-discount">
          <p>Products: 5</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
        <Link className="button">Añadir a Carrito</Link>
        </div>
      </div>
    </div>
  );
}

export default SpecialProducts;
