import React from "react";

import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Container from "../components/Container";

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Container></Container>
      </Layout>
    </div>
  );
};

export default Home;
