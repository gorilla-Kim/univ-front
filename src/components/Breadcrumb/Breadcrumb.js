import React from 'react';
import styled from "styled-components";
import { Breadcrumb as AntdBreadcrumb } from 'antd';

const { Item: BreadcrumbItem } = AntdBreadcrumb;

const sampleData = [
  {
    to: '',
    title: 'sample',
  },
  {
    to: '/sample2',
    title: 'sample2',
  },
  {
    to: '/sample3',
    title: 'sample3',
  },
]

const Breadcrumb = (props) => {
  const {
    list = sampleData,
  } = props;

  return (
    <AntdBreadcrumb>
      {
        list.map(item => <BreadcrumbItem key={item.to}>
            {
              item.to.length > 0
                ? <a href={item.to}>{item.title}</a>
                : <>{ item.title }</>
            }
          </BreadcrumbItem>
        )
      }
    </AntdBreadcrumb>
  )
};

const Wrapper = styled.div`
`;

export default Breadcrumb;