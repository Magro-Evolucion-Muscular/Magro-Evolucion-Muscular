import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";

import { BiArrowBack } from "react-icons/bi";
function CheckOut() {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name mb-3">Magro Evolucion Muscular</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item total-price active">
                    <Link to="/cart" className="text-dark">
                      Carrito
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Información
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Envio
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Pago
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Información de contacto</h4>
              <p className="user-details total">
                Luis Fernando Garcia (gearsofwars3d@hotmail.com)
              </p>
              <h4 className="mb-3 mt-3">Dirección de Envio</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Selecciona tu Pais
                    </option>
                  </select>
                </div>
                <div className="w-100">
                  <select
                    name=""
                    id=""
                    className="form-control form-select"
                  ></select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nombres"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Apellidos"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Departamento, Suit, etc. (Opcional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ciudad"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Selecciona tu Estado
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Codigo Postal"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      {" "}
                      <BiArrowBack className="me-1" /> Regresar al Carrito
                    </Link>
                    <Link to="/cart" className="button">
                      Continuar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "3px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      className="img-fluid "
                      src="/images/shaker1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="total">Shaker</h5>
                    <p className="total"> S / #123123</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envio</p>
                <p className="mb-0 total-price">$10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CheckOut;
