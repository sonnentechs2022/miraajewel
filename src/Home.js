import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
// import  Navtab  from "./Component/Navtab/Navtab.jsx";
import Topbar from "./Component/Topbar/Topbar";
import Navtab2 from "./Component/Navtab/Navtab2";
import Shopbar from "./Component/Shopbar/Shopbar.jsx";
import Categoriesbar from "./Component/CategoiesBar/Categoriesbar";
import Product from "./Component/Producttab/Product.jsx";
import Footertab from "./Component/FooterTab/Footertab";
import LoginScreen from "./Pages/LoginScreen";
import SignUpScreen from "./Pages/SignUpScreen";
import ProductCate from "./Component/ProductCategories/ProductCate";
import ContactUs from "./Pages/ContactUs";
import TermPolicy from "./Pages/Term&condition";
import CartPage from "./Component/CartProduct/CartPage";
import ScrollToTop from "./ScrollToTop";
import Billingtab from "./Component/BillingTab/Billingtab";
import CardPay from "./Component/BillingTab/CardPay";
import TermCon from "./Component/TermsRefund/TermCon.jsx";
import OTPScreen from "./Pages/OTPScreen";
import MobileNumScreen from "./Pages/MobileNumScreen";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data);
        
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Topbar />
        <Navtab2 />
        <Routes>
          <Route path="/" element={<Shopbar />} />
          <Route path="/" element={<ProductCate />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/Billingtab" element={<Billingtab />} />
          <Route path="/CardPay" element={<CardPay />} />
          <Route
            path="/Categoriesbar"
            element={<Categoriesbar handler={data} />}
          />

          <Route path="/Product" element={<Product />} />
          <Route path="/OTPScreen" element={<OTPScreen />} />
          <Route path="/MobileNumScreen" element={<MobileNumScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/SignUp" element={<SignUpScreen />} />
          <Route path="/TermCon" element={<TermCon />} />
        </Routes>
        <Footertab />
      </BrowserRouter>
      {/* <TermPolicy/> */}
    </>
  );
}
