import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layouts/Layout";
import AdminLayout from "./admin/components/AdminLayout";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import Contact from "./sections/Contact";
import NotFound from "./sections/NotFound";
import UpdateAccount from "./pages/UpdateAccount";
import Loader from "./components/Layouts/Loader";
import ScrollToTop from "./utils/ScrollToTop";
import Categories from "./sections/Categories";
import ProductDetail from "./pages/ProductDetail";
import About from "./sections/About";
import React, { Suspense } from "react";
const Shop = React.lazy(() => import("./pages/Shop"));
const Home = React.lazy(() => import("./pages/Home"));
const Successful = React.lazy(() => import("./pages/Successful"));
const Account = React.lazy(() => import("./pages/Account"));
const OrderHistory = React.lazy(() => import("./pages/OrderHistory"));
const OrderInformation = React.lazy(() => import("./pages/OrderInformation"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/products/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={currentUser ? <Navigate to={-1} /> : <Login />}
            />
            <Route
              path="/orders"
              element={
                currentUser === null ? (
                  <Navigate to="/login" />
                ) : (
                  <OrderHistory />
                )
              }
            />
            <Route
              path="/order/:id"
              element={
                currentUser === null ? (
                  <Navigate to="/login" />
                ) : (
                  <OrderInformation />
                )
              }
            />
            <Route
              path="/register"
              element={currentUser ? <Navigate to={-2} /> : <Registration />}
            />
            <Route
              path="/account"
              element={
                currentUser === null ? <Navigate to="/login" /> : <Account />
              }
            />
            <Route
              path="/successful"
              element={
                currentUser === null ? <Navigate to="/login" /> : <Successful />
              }
            />
            <Route
              path="/account/:id"
              element={
                currentUser === null ? (
                  <Navigate to="/login" />
                ) : (
                  <UpdateAccount />
                )
              }
            />

            {currentUser?.isAdmin && (
              <Route path="/admin/*" element={<AdminLayout />} />
            )}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Suspense>
  );
}

export default App;
