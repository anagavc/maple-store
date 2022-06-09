import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import AdminLayout from "./admin/components/AdminLayout";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ShippingInformation from "./pages/ShippingInformation";
import Payment from "./pages/Payment";
import NotFound from "./sections/NotFound";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import Categories from "./sections/Categories";
import About from "./sections/About";
import Contact from "./sections/Contact";
import UserDashboard from "./pages/UserDashboard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const [activeUser, setActiveUser] = useState(currentUser);
  useEffect(() => {
    setActiveUser(currentUser);
  }, [currentUser, activeUser]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/shippingInformation"
            element={<ShippingInformation />}
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/userDashboard" element={<UserDashboard />} />

          <Route
            path="/admin/*"
            element={
              activeUser?.isAdmin ? (
                <Navigate to="/" replace />
              ) : (
                <AdminLayout />
              )
            }
          />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
