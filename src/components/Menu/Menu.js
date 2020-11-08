import React, { useState } from 'react';
import styled from "styled-components";
import { Menu as AntdMenu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { navigate } from "../../helper/historyHelper";
import { getLocalStorage, setLocalStorage } from "../../helper/localStorageHelper";

const { SubMenu, Item : MenuItem } = AntdMenu;

const sampleData = [
  {
    icon: <AppstoreOutlined/>,
    title: 'Sample', // Menu.Item {value} | SubMenu title(props)
    key: '/sample',
    subMenu: [] // 재귀 { key, icon, name, subMenu }
  },
  {
    icon: <AppstoreOutlined/>,
    title: 'Sample2',
    key: 'Sample2',
    subMenu: [
      {
        icon: <AppstoreOutlined/>,
        title: '112',
        key: '/sample2/112',
        subMenu: []
      },
      {
        icon: <AppstoreOutlined/>,
        title: '113',
        key: '/sample2/113',
        subMenu: [
          {
            icon: <AppstoreOutlined/>,
            title: '114',
            key: '/sample2/113/114',
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
    mode = 'vertical', // vertical | horizontal | inline
    style,
    className,
    list = sampleData,
  } = props;

  const lsSelectedMenu = getLocalStorage('selectedMenu');
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(lsSelectedMenu? lsSelectedMenu : []);

  if(!list){
    return false;
  }

  function recursivePrint(list) {
    return list?.map(item =>
      <>
        {
          item?.subMenu?.length > 0
            ? <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {recursivePrint(item.subMenu)}
            </SubMenu>
            : <MenuItem key={item.key} icon={item.icon}>{item.title}</MenuItem>
        }
      </>
    )
  }

  if (!list) {
    return false;
  }

  return (
    <StyledAntdMenu
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
    </StyledAntdMenu>
  )
};

const StyledAntdMenu = styled(AntdMenu)`

`;

export default Menu;