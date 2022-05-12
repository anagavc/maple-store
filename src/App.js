import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ShippingInformation from "./pages/ShippingInformation";
import Payment from "./pages/Payment";
import NotFound from "./sections/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="shop" element={<Shop />} />

          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shippingInformation" element={<ShippingInformation />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
