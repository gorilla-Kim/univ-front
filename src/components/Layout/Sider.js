import React from 'react';
import styled from "styled-components";
import {Layout as AntdLayout} from 'antd';

const Sider = (props) => {

  return (
    <Wrapper>
      SideMenu
    </Wrapper>
  )
};

const Wrapper = styled(AntdLayout.Sider)`
  background: orange;
`;

export default Sider;