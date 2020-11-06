import React from 'react';
import styled, { css } from "styled-components";
import { Layout as AntdLayout } from 'antd';
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Container from "./Container";

const Layout = (props) => {

  const {
    children
  } = props;

  // rwd breakpoint 3항 연산

  return (
    <AntdLayoutWrapper>
      <Header/>
      <AntdLayout style={{backgroundColor: '#f1f1f1', ...row}}>
        <Container>
          <Breadcrumb/>
        </Container>
      </AntdLayout>
      <AntdLayout style={{width: '1200px', margin: '0 auto'}}>
          <Sider/>
          <Content>
            {children}
          </Content>
      </AntdLayout>
      <Footer/>
    </AntdLayoutWrapper>
  )
};

const AntdLayoutWrapper = styled(AntdLayout)`
  min-height: 100vh;
`;

const row = {
  flex: '0 0 0%'
}


export default Layout;