import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsTwitch,
} from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="footer-top">
        <div className="footer-top-content">
          <div className="footer-top-left">
            <img src="/images/newsletter.png" alt="" />
            <h4>Regístrate al boletín informativo</h4>
          </div>
          <div className="footer-top-right">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Escribe tu email..."
                aria-label="Escribe tu email..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-center">
        <div className="footer-center-content">
          <div className="footer-center-contact ">
            <h6>Contactanos</h6>

            <ul>
              <li>
                <address>
                  Calzada vallejo 1307, UH SCT Vallejo <br /> Mz 2 Edif G Depto 102
                </address>
              </li>
              <li>
                <a className="mt-4" href="tel:+525566670398">
                  +52 5566670398
                </a>
              </li>
              <li>
                <a href="mailto:l.garciaf.dev@hotmail.com">
                  l.garciaf.dev@hotmail.com
                </a>
              </li>
            </ul>

            <div className="footer-center-socialmedia">
              <a href="">{<BsFacebook />}</a>
              <a href="">{<BsInstagram />}</a>
              <a href="">{<BsTwitch />}</a>
              <a href="">{<BsTwitter />}</a>
              <a href="">{<BsLinkedin />}</a>
            </div>
          </div>
          <div className="footer-center-information ">
            <h6>Información</h6>
            <ul>
              <li>
                <Link to={"/privacy-policy"}>Politica de Privacidad</Link>
              </li>
              <li>
                <Link to={"/refound-policy"}>Politica de Reembolso</Link>
              </li>
              <li>
                <Link to={"/shipping-policy"}>Politiva de Envio</Link>
              </li>
              <li>
                <Link to={"/terms-and-conditions"}>Terminos y Condiciones</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-center-account ">
            <h6>Cuenta</h6>
            <ul>
              <li>
                <Link>Buscar</Link>
              </li>
              <li>
                <Link>Nosotros</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="footer-center-quicklinks ">
            <h6>Accesos Rapidos</h6>
            <ul>
              <li>
                <Link>Proteinas</Link>
              </li>
              <li>
                <Link>Pre Entrenos</Link>
              </li>
              <li>
                <Link>BCAA´s</Link>
              </li>
              <li>
                <Link>Creatinas</Link>
              </li>
            </ul>
          </div>
          <div className="footer-center-app ">
            <h6>Nuestra Aplicación</h6>
            <span>
              Descarga nuestra app y obten un descuento extra del 15% en tu
              primer compra.
            </span>
            <div className="footer-center-app-img">
              <a href="">
                <img src="/images/googleplay.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/appstore.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>
              &copy; {new Date().getFullYear()}. Magro Evolución Muscular{" "}
            </span>
          </div>
          <div className="footer-bottom-right">
            <img src="/images/paymethod.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
