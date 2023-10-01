import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header-top">
        <header className="header-top-content">
          <div className="header-top-left">
            <h1 className="sm-l">Envio gratis apartir de $150.00 mxn</h1>
          </div>
          <div className="header-top-right">
            <p className="sm-1">
              Contactanos
              <a className="sm-1" href="tel:+525566670398">
                +52 5566670398
              </a>
            </p>
          </div>
        </header>
      </header>
      <header className="header-middle">
        <div className="header-middle-content">
          <div className="header-middle-left">
            <Link to={"/"}>
              <img src="/images/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="header-middle-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Producto..."
                aria-label="Buscar Producto..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch></BsSearch>
              </span>
            </div>
          </div>
          <div className="header-middle-right">
            <div className="list-item">
              <Link to={"/comparar-productos"}>
                <img src="/images/compare.svg" alt="" />
                <p>
                  Comparar <br /> Productos
                </p>
              </Link>
            </div>
            <div className="list-item">
              <Link to={"/wishlist"}>
                <img src="/images/wishlist.svg" alt="" />
                <p>
                  Favoritos <br /> Wish List
                </p>
              </Link>
            </div>
            <div className="list-item">
              <Link to={"/login"}>
                <img src="/images/user.svg" alt="" />
                <p>
                  Iniciar Sesión <br />
                  Mi Cuenta
                </p>
              </Link>
            </div>
            <div className="list-item">
              <Link to={"/cart"}>
                <img src="/images/cart.svg" alt="" />
                <div className="add-cart-icon">
                  <span className="sm-l">0</span>
                  <p className="sm-l">$500.00</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="header-bottom-content">
          <div className="header-bottom-dropdown">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img src="/images/menu.svg" alt="menu-icon" />
                </span>
                Todas las Categorias
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bottom-links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/tienda">Nuestra Tienda</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
