import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
const ResetPassword = () => {
  return (
    <>
      <Meta pageTitle="Restablecer Contraseña" />
      <BreadCrumb title="Restablecer Contraseña" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Restablecer Contraseña</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="position-relative">
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Nueva Contraseña"
                    />
                  </div>
                  <div className="position-relative">
                    <CustomInput
                      type="password"
                      name="password2"
                      placeholder="Confirmar Contraseña"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Restaurar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
