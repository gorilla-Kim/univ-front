import React from 'react';
import styled from "styled-components";
import {Layout as AntdLayout} from 'antd';
import Images from '../../assets/image'
import Menu from "../Menu/Menu";

const Header = (props) => {

  return (
    <Wrapper>
      <Menu/>

    </Wrapper>
  )
};

const Wrapper = styled(AntdLayout.Header)`
  background-image:url(${Images.headerCover});
  background-position:50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Header;