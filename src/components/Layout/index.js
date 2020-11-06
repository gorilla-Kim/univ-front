import React from 'react';
import styled, { css } from "styled-components";
import { Breadcrumb, Layout as AntdLayout } from 'antd';
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";

const Layout = (props) => {

  const {
    children
  } = props;

  // rwd breakpoint 3항 연산

  return (
    <LayoutWrapper>
      <Header/>
      <StyledLayout row>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
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