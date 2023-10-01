import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function Forgotpassword() {
  return (
    <>
      <Meta pageTitle="Recuperar Contraseña" />
      <BreadCrumb title="Recuperar Contraseña" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Restablecer Contraseña</h3>
              <p className="text-center mt-2 mb-3">
                Te enviaremos un correo para restablecer tu contraseña
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <CustomInput type="email" name="email" placeholder="Correo" />
                </div>

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Enviar
                    </button>
                    <Link to="/login">Cancelar</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Forgotpassword;
