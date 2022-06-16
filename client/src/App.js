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
import { useSelector } from "react-redux";
import Successful from "./pages/Successful";
import Account from "./pages/Account";
import OrderHistory from "./pages/OrderHistory";
import OrderInformation from "./pages/OrderInformation";
import Wishlist from "./pages/Wishlist";
import UpdateAccount from "./pages/UpdateAccount";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Shop />} />
            <Route path="/products/:category" element={<Shop />} />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/shippingInformation"
              element={<ShippingInformation />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/successful" element={<Successful />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/order/:id" element={<OrderInformation />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<UpdateAccount />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {currentUser?.isAdmin && (
              <Route path="/admin/*" element={<AdminLayout />} />
            )}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </>
  );
}

export default App;
