import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
function Signup() {
  const [pass, setPass] = useState("password");
  const showpassword = () => {
    if (pass === "text") {
      setPass("password");
    } else {
      setPass("text");
    }
  };

  return (
    <>
      <Meta pageTitle="Registrarme" />
      <BreadCrumb title="Registrarme" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Registrarme</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="d-flex gap-2">
                  <CustomInput
                    type="text"
                    name="firstname"
                    placeholder="Nombre"
                  />
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                  />
                </div>
                <div>
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Telefono"
                  />
                </div>
                <div>
                  <CustomInput type="email" name="email" placeholder="Correo" />
                </div>
                <div className="position-relative">
                  <span
                    onClick={showpassword}
                    className="showpass position-absolute"
                  >
                    <AiFillEye />
                  </span>
                  <CustomInput
                    type={pass}
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="position-relative">
                  <CustomInput
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Confirmar Contraseña"
                  />
                </div>

                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Registrarme
                    </button>
                    <Link to="/login">Ya tengo cuenta</Link>
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

export default Signup;
