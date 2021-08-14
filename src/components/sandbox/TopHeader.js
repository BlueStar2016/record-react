import React, { useState } from "react";
import store from "../../store";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
  //声明变量
  const [collapsed, setCollapsed] = useState(false);
  //改变切换的状态，并向store提交状态
  const changeCollapsed = () => {
    let collapsedTemp = !collapsed;
    setCollapsed(collapsedTemp);
    // console.info(a);
    store.dispatch({
      type: "isCollapsed",
      content: { collapsed: collapsedTemp },
    });
  };
  const menu = (
    <Menu>
      <Menu.Item>超级管理员</Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: changeCollapsed,
      })}
      <div className="right">
        <span className="welcome-text">欢迎回来</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
