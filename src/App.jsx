import "./App.css";
import "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OurStore from "./pages/OurStore";
import OurBlog from "./pages/OurBlog";
import ProductCompare from "./pages/ProductCompare";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefoundPolicy from "./pages/RefoundPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="tienda" element={<OurStore />} />
            <Route path="/tienda/:id" element={<SingleProduct />} />
            <Route path="/tienda/checkout" element={<CheckOut />} />
            <Route path="blog" element={<OurBlog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="comparar-productos" element={<ProductCompare />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Reset-Password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refound-policy" element={<RefoundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
