import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta pageTitle="Inicio de Sesión" />
      <BreadCrumb title="Inicio de Sesión" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Inicio de Sesión</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <CustomInput type="email" name="email" placeholder="Correo" />
                </div>
                <div className="mt-1">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                </div>

                <div>
                  <Link to="/forgot-password">¿Olvidaste la contraseña?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Ingresar
                    </button>
                    <Link to="/signup" className="button signup">
                      Registrarme
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
