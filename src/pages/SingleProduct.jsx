import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard.jsx";
import ReactStars from "react-rating-stars-component";
import Flavour from "../components/Flavour";
import ReactImageMagnify from "react-image-magnify";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import { BsClipboard } from "react-icons/bs";
import Container from "../components/Container";
const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (e, text) => {
    e.preventDefault();
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta pageTitle="Product Name" />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: "https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
                      imageclassName: "Image",
                    },
                    largeImage: {
                      src: "https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
                      width: 1200,
                      height: 1800,
                      enlargedImageContainerClassName: "imaage-zoomed",
                    },
                    isHintEnabled: true,
                    enlargedImageContainerClassName: "image-zoomed",
                  }}
                />
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    className="img-fluid"
                    src="https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width="
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width="
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width="
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://gnc.com.mx/media/catalog/product/1/4/141604395_bdm_creatina_monohidratada_450_grs_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Creatina Monohidratada</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 100 comentarios )</p>
                </div>
                <a className="review-link" href="#review">
                  Escribir Opinión
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tipo :</h3>
                  <p className="product-data">Suplemento</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Marca :</h3>
                  <p className="product-data">Mutant</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categoria :</h3>
                  <p className="product-data">Suplemento</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Mundo</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Disponibilidad :</h3>
                  <p className="product-data">Con Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Tamaño :</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      400gr
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      400gr
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      400gr
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Sabor :</h3>
                  <div className="d-flex flex-wrap gap-2 single-flavour">
                    <Flavour />
                  </div>
                </div>
                <div className="d-flex gap-10 flex-row align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Cantidad :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      id=""
                      style={{ width: "60px" }}
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex flex-aligne-center gap-15">
                    <button className="button border-0" type="submit">
                      Agregar al carrito
                    </button>
                    <button className="button signup border-0" type="submit">
                      Comprar ahora
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <a href="">
                      <TbGitCompare /> Agregar a Comparar
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart /> Agregar a Wishlist
                    </a>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Envios y Devoluciones:</h3>
                  <p className="product-data">
                    Envios y devoluciones gratuitas en todos los pedidos
                    <br /> Entregamos en toda el Area Metropolitana <br />
                    Entregas de 5-10 dias habiles
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Link del Producto:</h3>
                  <a
                    href=""
                    onClick={(e) =>
                      copyToClipboard(
                        e,
                        "https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-estilo-anime-chica-joven-chica-anime-manga_147933-89.jpg?w=2000"
                      )
                    }
                  >
                    <BsClipboard /> Copiar Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-2">Descripción</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                corrupti asperiores eos, nulla nostrum laborum incidunt itaque
                dolores error, ducimus quas aperiam cumque nam, nisi totam
                inventore recusandae consequatur. Laborum porro id, quisquam
                similique veritatis vero in nesciunt dolorem vel inventore neque
                ab ducimus magnam accusantium. Fugiat ipsa placeat tempora
                doloribus! Non repellendus inventore dolorum, facilis officiis
                sint ad ab numquam officia ex natus odio voluptatibus blanditiis
                molestiae impedit reprehenderit nobis amet dolores tempora
                aspernatur, corrupti ut, recusandae nisi. Earum reprehenderit
                qui dolorum tempora placeat ea quis deleniti quia nesciunt culpa
                debitis amet officiis error mollitia, eum excepturi non
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-2">Opinines</h3>

            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Opiniones de Clientes</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">100 opiniones</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Escribir Opinión
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Escribe tu Opinión</h4>

                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comentarios"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Ferwars</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus consequuntur a sed natus saepe unde ab et
                      quisquam laudantium accusantium.
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Ferwars</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus consequuntur a sed natus saepe unde ab et
                      quisquam laudantium accusantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="section-headings">
              <h3>Lo mas popular</h3>
            </div>
            <div className="products d-flex gap-10 col-9">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
