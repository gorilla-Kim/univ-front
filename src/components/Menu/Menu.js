import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Menu as AntdMenu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { navigate } from "../../helper/historyHelper";
import { getLocalStorage, setLocalStorage } from "../../helper/localStorageHelper";

const { SubMenu } = AntdMenu;

const sampleData = [
  {
    key: '/introduction',
    icon: <AppstoreOutlined/>,
    title: 'Introduction', // Menu.Item {value} | SubMenu title(props)
    subMenu: [] // 재귀 { key, icon, name, subMenu }
  },
  {
    key: '/introduction/professor',
    icon: <AppstoreOutlined/>,
    title: 'Professor',
    subMenu: [
      {
        key: '/professor/112',
        icon: <AppstoreOutlined/>,
        title: '112',
        subMenu: []
      },
      {
        key: '/professor/113',
        icon: <AppstoreOutlined/>,
        title: '113',
        subMenu: [
          {
            key: '/professor/113/114',
            icon: <AppstoreOutlined/>,
            title: '114',
            subMenu: []
          },
        ]
      },
    ]
  },
]

const Menu = (props) => {
  const {
    triggerOpen = false,
    mode = 'horizontal', // vertical | horizontal | inline
    style,
    className,
    list = sampleData
  } = props;

  const lsSelectedMenu = getLocalStorage('selectedMenu');
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(lsSelectedMenu? lsSelectedMenu : []);

  console.log('@@ lsSelectedMenu', lsSelectedMenu, 'defaultSelectedKeys', );

  function recursivePrint(list) {
    return list?.map(item =>
      <>
        {
          item.subMenu.length > 0
            ? <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {recursivePrint(item.subMenu)}
            </SubMenu>
            : <AntdMenu.Item key={item.key} icon={item.icon}>{item.title}</AntdMenu.Item>
        }
      </>
    )
  }

  if (!list) {
    return false;
  }

  return (
    <AntdMenu
      // defaultOpenKeys={triggerOpen ? defaultSelectedKeys : undefined}
      // defaultSelectedKeys={triggerOpen ? defaultSelectedKeys : undefined} //{['1']} unit depth menu
      // defaultOpenKeys={'/professor/113/114'} //{['sub1']} sub menu
      // defaultOpenKeys={triggerOpen ? defaultOpenKeys : undefined} //{['sub1']} sub menu
      onSelect={(e) => {
        console.log('@@ onSelect', e);
        setLocalStorage('selectedMenu', e.key)
        navigate(e.key)
      }}
      mode={mode}
      className={className}
      style={style}>
      {recursivePrint(list)}
    </AntdMenu>
  )
};

const Wrapper = styled.div`
`;

export default Menu;