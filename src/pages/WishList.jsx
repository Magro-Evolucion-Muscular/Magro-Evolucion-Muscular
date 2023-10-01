import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const WishList = () => {
  return (
    <>
      <Meta pageTitle="WishList" />
      <BreadCrumb title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Creatina Monohidratada 500gr Valara</h5>
                <h6 className="price">$100.00</h6>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
