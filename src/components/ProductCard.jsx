import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

// eslint-disable-next-line react/prop-types
function ProductCard({ grid }) {
  let location = useLocation();
  return (
    <>
      <Link to={":id"}
        className={`product-item ${
          location.pathname == "/tienda" ? `gr-${grid}` : "col-3"
        }`}
      >
        <div className="product-img ">
          <img
            src="/images/shaker1.png"
            className="img-fluid"
            alt="product"
          />
          <img
            src="/images/shaker2.png"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-content">
          <h6 className="brand">Shakers</h6>
          <h5 className="product-title">
            Kids HeadPhone bulk 10 pack multi colored for student
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Deliciosa proteína aislada de suero de leche para después de
            ejercitarte, no importa si haces ejercicio en casa o en el gym.
            Ayuda en tu recuperación muscular después de cualquier
            entrenamiento, con 25gr de proteína por porción, un perfil de
            aminoácidos completo (BCAA&apos;s 2:1:1) y sin azúcar añadida.
          </p>
          <p className="price">$100.0</p>
        </div>
        <div className="wishlist-icon">
          <button className="border-0 bg-transparent">
            <img src="/images/wish.svg" alt="wishlist" />
          </button>
        </div>
        <div className="action-bar">
          <div className="cart-icons">
            <button className="border-0 bg-transparent">
              <img src="/images/prodcompare.svg" alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/view.svg" alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/add-cart.svg" alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
