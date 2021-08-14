import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import store from "../../store";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu(props) {
  // let history = useHistory();
  const menu = [
    {
      path: "/home",
      icon: <UserOutlined />,
      title: "首页",
    },
    {
      path: "/user-manage",
      icon: <LaptopOutlined />,
      title: "用户管理",
      childrens: [
        {
          path: "/user-manage/list",
          icon: "",
          title: "用户列表",
        },
      ],
    },
    {
      path: "/right-manage",
      icon: <NotificationOutlined />,
      title: "权限管理",
      childrens: [
        {
          path: "/right-manage/role/list",
          icon: "",
          title: "角色列表",
        },
        {
          path: "/right-manage/right/list",
          icon: "",
          title: "权限列表",
        },
      ],
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const [curremtPath] = useState(props.history.location.pathname);
  store.subscribe(() => {
    setCollapsed(store.getState().collapsed);
  });
  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.childrens) {
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {renderMenu(item.childrens)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.path}
          icon={item.icon}
          onClick={() => {
            // setCurremtPath(item.path);
            props.history.push(item.path);
            // history.push(item.path);
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">新闻发布会系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[curremtPath]}>
        {renderMenu(menu)}
      </Menu>
    </Sider>
  );
}
//将组件升级为高阶组件，能让组件得到props
export default withRouter(SideMenu);
