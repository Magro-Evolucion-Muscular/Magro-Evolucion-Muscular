import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
function ShippingPolicy() {
  return (
    <>
      <Meta pageTitle="Politica de Envio" />
      <BreadCrumb title="Politica de Envio" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ShippingPolicy;
