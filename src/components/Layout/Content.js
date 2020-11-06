import React from 'react';
import styled from "styled-components";
import { Layout as AntdLayout } from 'antd';

const Content = (props) => {
  const {
    children
  } = props;
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled(AntdLayout.Content)`
  background: grey;
`;

export default Content;