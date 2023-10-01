import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
function Cart() {
  return (
    <>
      <Meta pageTitle="Mi carrito" />
      <BreadCrumb title="Mi carrito" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-content-center">
              <h4 className="cart-col-1">Producto</h4>
              <h4 className="cart-col-2">Precio</h4>
              <h4 className="cart-col-3">Cantidad</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex gap-15 align-items-center ">
                <div className="w-25">
                  <img src="/images/watch.jpg" className="img-fluid" alt="" />
                </div>
                <div className="w-75">
                  <p>Hola Mundo</p>
                  <p>Tamaño: Hola Mundo</p>
                  <p>Sabor: Hola Mundo</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    style={{ width: "60px" }}
                    min={1}
                    max={10}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <AiOutlineDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to={"/tienda"} className="button">
                Continuar comprando
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Total: $5000.00</h4>
                <p className="mb-2">
                  Impuestos y Envio calculados en el siguiente paso.
                </p>
                <Link to={"/checkout"} className="button">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
