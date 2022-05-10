import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Header from "./sections/Header";
import Main from "./sections/Main";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="shop" element={<Shop />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
