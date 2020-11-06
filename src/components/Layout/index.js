import React from 'react';
import styled, { css } from "styled-components";
import { Layout as AntdLayout } from 'antd';
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Layout = (props) => {

  const {
    children
  } = props;

  // rwd breakpoint 3항 연산

  return (
    <LayoutWrapper>
      <Header/>
      <StyledLayout row>
        <Breadcrumb/>
      </StyledLayout>
      <StyledLayout>
        <Sider/>
        <Content>
          {children}
        </Content>
      </StyledLayout>
      <Footer/>
    </LayoutWrapper>
  )
};

const LayoutWrapper = styled(AntdLayout)`
  min-height: 100vh;
`;

const StyledLayout = styled(AntdLayout)`
  width: 1200px;
  margin: 0 auto;
  ${props => props.row && css`
      flex: 0 0 0%;
  `}
`;

// const StyledBreadcrumb = styled(Breadcrumb)`
//
// `;

export default Layout;