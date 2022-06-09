import React from "react";
import Main from "../sections/Main";
import Header from "../sections/Header";
import Layout from "../components/Layouts/Layout";
const Home = () => {
  return (
    <Layout>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </Layout>
  );
};

export default Home;
