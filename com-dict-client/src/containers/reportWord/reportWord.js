import React from "react";
import "../home/home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import FlagWord from "../../components/flag"
import FooterPage from "../../components/footer/FooterPage";

const { Header, Footer, Content } = Layout;

function reportWord() {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <FlagWord />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default reportWord;

