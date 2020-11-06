import React from 'react';
import styled from "styled-components";
import {Layout as AntdLayout} from 'antd';
import Images from '../../assets/image'
import Menu from "../Menu/Menu";

const navigatorList = [
  {
    icon: '',
    title: 'Introduction & Research',
    key: 'Introduction & Research',
    subMenu: [
      {
        icon: '',
        title: 'Introduction',
        key: '/introduction',
        subMenu: []
      },
      {
        icon: '',
        title: 'Research',
        key: '/introduction/research',
        subMenu: []
      }
    ]
  },
  //2
  {
    icon: '',
    title: 'Professor',
    key: 'Professor',
    subMenu: [
      {
        icon: '',
        title: 'Professor',
        key: '/professor',
        subMenu: []
      },
    ]
  },
  //3
  {
    icon: '',
    title: 'Member',
    key: 'Member',
    subMenu: [
      {
        icon: '',
        title: 'Member',
        key: '/member/current',
        subMenu: []
      },
      {
        icon: '',
        title: 'Alumni',
        key: '/member/alumni',
        subMenu: []
      }
    ]
  },
  //4
  {
    icon: '',
    title: 'Publications',
    key: '/publications',
    subMenu: []
  },
  //5
  {
    icon: '',
    title: 'Lecture',
    key: 'Lecture',
    subMenu: [
      {
        icon: '',
        title: 'A',
        key: '/lecture/A',
        subMenu: []
      },
      {
        icon: '',
        title: 'B',
        key: '/lecture/B',
        subMenu: []
      },
      {
        icon: '',
        title: 'C',
        key: '/lecture/C',
        subMenu: []
      },
    ]
  },
  //6
  {
    icon: '',
    title: 'Community',
    key: 'Community',
    subMenu: [
      {
        icon: '',
        title: 'Notice',
        key: '/community/notice',
        subMenu: []
      },
      {
        icon: '',
        title: 'Gallery',
        key: '/community/gallery',
        subMenu: []
      },
      {
        icon: '',
        title: 'Board',
        key: '/community/board',
        subMenu: []
      },
    ]
  },
]

const Header = (props) => {

  return (
    <Wrapper>
      <Menu list={navigatorList} mode={'horizontal'}/>
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