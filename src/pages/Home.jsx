import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SpecialProducts from "../components/SpecialProducts.jsx";
import Meta from "../components/Meta";
import Container from "../components/Container.jsx";
import { services } from "../Utils/Data.jsx";
function Home() {
  return (
    <>
      <Meta pageTitle="Magro Evolución Muscular" />
      <Container class1="home-wrapper py-5">
        <div className="banners-wrapper">
          <div className="main-banner">
            <img src="/images/creatina.png" alt="" />
            <div className="main-banner-text">
              <h4>Mejora tu rendimiento</h4>
              <h5>Creatina Monohidratada.</h5>
              <p>
                De $499 mxn a $445mxn <br /> Aplican Restricciones
              </p>
              <Link className="button">Comprar Ahora</Link>
            </div>
          </div>
          <div className="small-banners">
            <div className="small-banner">
              <img src="/images/psychotic.png" alt="" />
              <div className="small-banner-text">
                <h4>Nuevo</h4>
                <h5>
                  Creatina <br /> Monohidratada
                </h5>
                <p>De $499 mxn a $445mxn</p>
              </div>
            </div>
            <div className="small-banner">
              <img src="/images/BCAA.png" alt="" />
              <div className="small-banner-text">
                <h4>Nuevo</h4>
                <h5>
                  Creatina <br /> Monohidratada
                </h5>
                <p>De $499 mxn a $445mxn</p>
              </div>
            </div>
            <div className="small-banner">
              <img src="/images/protein.png" alt="" />
              <div className="small-banner-text">
                <h4>Nuevo</h4>
                <h5>
                  Creatina <br /> Monohidratada
                </h5>
                <p>De $499 mxn a $445mxn</p>
              </div>
            </div>
            <div className="small-banner">
              <img src="/images/probar.png" alt="" />
              <div className="small-banner-text">
                <h4>Nuevo</h4>
                <h5>
                  Creatina <br /> Monohidratada
                </h5>
                <p>De $499 mxn a $445mxn</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="services">
              {services?.map((service,k) => {
                return (
                  <div className="service" key={k}>
                    <img src={service.image} alt="" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="sm-l">{service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="categories">
              <div className="category">
                <div>
                  <h6>Proteinas</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/proteina.png" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>BCAA</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/bcaa2.png" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Snacks</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/barra-proteina.png" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Creatinas</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/creatina2.png" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Aminoacidos</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/aminoacidos.png" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Accesorios</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/headphone.jpg" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Accesorios</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/headphone.jpg" alt="" />
              </div>
              <div className="category">
                <div>
                  <h6>Accesorios</h6>
                  <p className="sm-l">10 Productos</p>
                </div>
                <img src="/images/headphone.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="section-headings">
              <h3>Lo mas Destacado</h3>
            </div>
            <div className="products d-flex gap-10 col-9">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="products d-flex gap-10">
              <div className="famous-card">
                <img src="/images/creatina-2.png" alt="" />
                <div className="famous-card-content">
                  <h5>Mejor rendimiento</h5>
                  <h6>Creatina Monohidratada</h6>
                  <p>De $499 mxn a $445mxn </p>
                </div>
              </div>
              <div className="famous-card">
                <img src="/images/creatina-3.png" alt="" />
                <div className="famous-card-content">
                  <h5 className="text-dark">Mejor rendimiento</h5>
                  <h6 className="text-dark">Creatina Monohidratada</h6>
                  <p className="text-dark">De $499 mxn a $445mxn </p>
                </div>
              </div>
              <div className="famous-card">
                <img src="/images/creatina-4.png" alt="" />
                <div className="famous-card-content">
                  <h5 className="text-dark">Mejor rendimiento</h5>
                  <h6 className="text-dark">Creatina Monohidratada</h6>
                  <p className="text-dark">De $499 mxn a $445mxn </p>
                </div>
              </div>
              <div className="famous-card">
                <img src="/images/creatina-5.png" alt="" />
                <div className="famous-card-content">
                  <h5 className="text-dark">Mejor rendimiento</h5>
                  <h6 className="text-dark">Creatina Monohidratada</h6>
                  <p className="text-dark">De $499 mxn a $445mxn </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-headings">
              <h3>Ofertas Especiales</h3>
            </div>
            <div className="specialProducts-items d-flex gap-10 ">
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
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
      <Container class1="home-wrapper-2 marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper p-3">
              <Marquee className="marquee" autoFill={true}>
                <div>
                  <img src="/images/brand-01.png" alt="brand" />
                </div>
                <div>
                  <img src="/images/brand-02.png" alt="brand" />
                </div>
                <div>
                  <img src="/images/brand-03.png" alt="brand" />
                </div>
                <div>
                  <img src="/images/brand-04.png" alt="brand" />
                </div>

                {/* <div><img src="/images/brand-05.png" alt="brand" /></div> */}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="section-headings">
              <h3>Nuestras Ultimas Noticias</h3>
            </div>
            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
