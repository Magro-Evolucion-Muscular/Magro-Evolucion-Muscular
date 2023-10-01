import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
function Contact() {
  return (
    <>
      <Meta pageTitle="Contactanos" />
      <BreadCrumb title="Contactanos" />
      <Container class1="content-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60168.47875069559!2d-99.15515652640727!3d19.518850035070823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00316a29ba95%3A0xf1277698ca624191!2sGustavo%20A.%20Madero%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1688073035435!5m2!1ses!2smx"
              width="600"
              height="450"
              className="border-0 w-100 maps"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contacto</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <CustomInput
                      type="text"
                      placeholder="Nombre"
                      name="nombre"
                    />
                  </div>
                  <div>
                    <CustomInput
                      type="email"
                      placeholder="Correo"
                      name="email"
                    />
                  </div>
                  <div>
                    <CustomInput
                      type="tel"
                      placeholder="Numero Telefonico"
                      name="tel"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comentarios"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Comunicate con nosotros</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address>
                        Calzada vallejo 1307, UH SCT Vallejo Mz 2 Edif G Depto
                        102
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+525566670398" className="text-black">
                        +52 5566670398
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a
                        href="mailto:l.garciaf.dev@hotmail.com"
                        className="text-black"
                      >
                        l.garciaf.dev@hotmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">Lunes - Viernes 6:00am - 6:00pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
