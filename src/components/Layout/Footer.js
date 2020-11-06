import React from 'react';
import styled from "styled-components";
import {Layout as AntdLayout} from 'antd';
import Container from "./Container";

const Footer = (props) => {

  return (
    <StyledAntdFooter>
      <Container>
        Footer내용
      </Container>
    </StyledAntdFooter>
  )
};

const StyledAntdFooter = styled(AntdLayout.Footer)`
  background: darkgrey;
`;

export default Footer;