import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard.jsx";
import Flavour from "../components/Flavour.jsx";
import Container from "../components/Container";
function OurStore() {
  const [grid, setGrid] = useState(4);
  const gridHandler = (e) => {
    setGrid(e);
  };
  return (
    <>
      <Meta pageTitle="Nuestra Tienda" />
      <BreadCrumb title="Tienda" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Categorias</h3>
              <div>
                <ul>
                  <li>Creatina</li>
                  <li>Pre Entreno</li>
                  <li>Proteina</li>
                  <li>BCAA</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtrar por</h3>
              <div>
                <h5 className="sub-title">Disponibilidad</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="InStock"
                    />
                    <label className="form-check-label" htmlFor="InStock">
                      En Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="OutStock"
                    />
                    <label className="form-check-label" htmlFor="OutStock">
                      Sin Stock (1)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Precio</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Sabores</h5>
                <Flavour />
                <h5 className="sub-title">Porciones:</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="90_Porciones"
                    />
                    <label className="form-check-label" htmlFor="90_Porciones">
                      90 Porciones (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="30_Porciones"
                    />
                    <label className="form-check-label" htmlFor="30_Porciones">
                      30 Porciones (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="200_Porciones"
                    />
                    <label className="form-check-label" htmlFor="200_Porciones">
                      200 Porciones (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="500gr"
                    />
                    <label className="form-check-label" htmlFor="500gr">
                      500gr (1)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                    Creatina
                  </span>
                  <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                    Pre Entreno
                  </span>
                  <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                    BCAA
                  </span>
                  <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                    Proteina
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Producto Aleatorio</h3>
              <div>
                <div className="random-products d-flex mb-3">
                  <div className="w-50">
                    <img src="/images/watch.jpg" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Creatina Monohidratada 500gr</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$200.00</b>
                  </div>
                </div>
                <div className="random-products d-flex ">
                  <div className="w-50">
                    <img src="/images/watch.jpg" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Creatina Monohidratada 500gr</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$200.00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Filtrar Por:
                  </p>
                  <select name="" id="" className="form-control form-select">
                    <option value="manual">Destacados</option>
                    <option value="best-selling" selected="selected">
                      Mejor Vendido
                    </option>
                    <option value="title-ascending">Ascendente (A-Z)</option>
                    <option value="title-descending">Descendente (Z-A)</option>
                    <option value="price-ascending">
                      Precio: Ascendente (Menor - Mayor)
                    </option>
                    <option value="price-descending">
                      Precio: Descendente ( Mayor - Menor )
                    </option>
                    <option value="date-descending">
                      Fecha: Mas Antiguo - Mas Nuevo
                    </option>
                    <option value="date-descending">
                      Fecha: Mas Nuevo - Mas Antiguo
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts">21 Productos</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => gridHandler(3)}
                      src="/images/gr4.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => gridHandler(4)}
                      src="/images/gr3.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => gridHandler(6)}
                      src="/images/gr2.svg"
                      alt=""
                      className="d-block img-fluid"
                    />

                    <img
                      onClick={() => gridHandler(12)}
                      src="/images/gr.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
