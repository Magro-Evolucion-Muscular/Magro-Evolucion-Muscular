import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta pageTitle="Nombre Dinamico" />
      <BreadCrumb title="Nombre Dinamico" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10"> <HiOutlineArrowLeft className="fs-4"/>Regresar a blog</Link>
                <h3 className="title">A beutiful sunday morning renaissance</h3>
                <img src="/images/blog-1.jpg" className="img-fluid w-100 py-4" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam deserunt sit recusandae vero eveniet vitae eos
                doloremque pariatur magni? Inventore officia, voluptatem, omnis
                sint sunt dolore consequatur porro, atque sit odio repellendus
                molestiae voluptatum dolor perferendis. Eaque ipsa quae ex odio
                fuga, libero blanditiis tempore laboriosam vero delectus
                possimus omnis corporis ullam ipsum quam nam voluptates dolores.
                Quia, fugiat ex omnis harum dolor natus optio. Nobis, error
                ipsum reprehenderit quibusdam mollitia quod numquam odit quis
                enim officia expedita dolorum fuga ratione provident, fugiat
                illum alias molestiae voluptate exercitationem explicabo, saepe
                neque. Fuga labore facilis dolore reiciendis perferendis quaerat
                aspernatur soluta?
              </p>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
