import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Flavour from "../components/Flavour.jsx";

import Meta from "../components/Meta";
function ProductCompare() {
  return (
    <>
      <Meta pageTitle="Comparar Productos" />
      <BreadCrumb title="Comparar Productos" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price mb-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Valara</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Creatina</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>123456789</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidad:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Sabor:</h5>
                    <Flavour></Flavour>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price mb-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Valara</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Creatina</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>123456789</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidad:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Sabor:</h5>
                    <Flavour></Flavour>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price mb-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Valara</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Creatina</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>123456789</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidad:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Sabor:</h5>
                    <Flavour></Flavour>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                alt=""
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-img">
                <img src="/images/watch.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price mb-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Valara</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Creatina</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>123456789</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilidad:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Sabor:</h5>
                    <Flavour></Flavour>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductCompare;
