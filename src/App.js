import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navigation/Navbar";
import Header from "./sections/Header";
import Main from "./sections/Main";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
        <Header />
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
