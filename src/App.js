import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
function App() {
  return (
    <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
