import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Layout as AntdLayout } from 'antd';
import Menu from "../Menu/Menu";
import { AppstoreOutlined } from "@ant-design/icons/";
import { useSelector } from "react-redux";
import COMMON_CONST from "../../assets/constant/common";

const siteWholeMenu = [
  {
    head: 'Introduction\n & Research',
    list: [COMMON_CONST.WHOLE_MENU[0]] // [ {} ]
  },
  {
    head: 'Professor',
    list: [COMMON_CONST.WHOLE_MENU[1]]
  },
  {
    head: 'Member',
    list: [COMMON_CONST.WHOLE_MENU[2]]
  },
  {
    head: 'Publication',
    list: [COMMON_CONST.WHOLE_MENU[3]]
  },
  {
    head: 'Lecture',
    list: [COMMON_CONST.WHOLE_MENU[4]]
  },
  {
    head: 'Community',
    list: [COMMON_CONST.WHOLE_MENU[5]]
  }
]

const Sider = (props) => {

  const { currentViewKey } = useSelector(state => state.app);
  const [currentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    currentViewKey
      ? setCurrentItem(COMMON_CONST.WHOLE_MENU.filter(item => item.key.toLowerCase() === currentViewKey.toLowerCase()))
      : setCurrentItem(null)

  }, [currentViewKey])

  if (!currentItem) {
    return null;
  }

  return (
    <Wrapper width={240}>
      <Head>{currentItem[0]?.title}</Head>
      <Menu mode={'inline'} list={currentItem} openFistKey={true}/>
    </Wrapper>
  )
};

const Wrapper = styled(AntdLayout.Sider)`
  border-right: initial;
  .ant-menu-sub {
    > li{
      padding-top: 10px;
      padding-bottom: 10px;
      color:#6c6c6c;
    }
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title {
    .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after{
        background:#999;
    }
  }
  .ant-menu-item, .ant-menu-submenu-title, .ant-menu-item-only-child {
    margin: 0!important;
    padding-top: 0!important;
    padding-bottom: 0!important;
    height: 55px!important;
    line-height: 55px!important;
    font-size: 14px!important;
    font-weight: 400;
    color:#484848;
    border-bottom:1px solid #f1f1f1;
    &:first-child {
      border-top:1px solid #f1f1f1;
    }
    &:hover {
      color:#1890ff;
    }
    span {
      font-size: 14px!important;
    }
  }
`;

const Head = styled.div`
  white-space: pre-line;
  padding: 20px 10px;
  background: #094c90;
  text-transform: capitalize;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color:#fff;
`;

export default Sider;