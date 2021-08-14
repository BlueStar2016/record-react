import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./NewsSandBox.css";
// antd
import { Layout } from "antd";
const { Content } = Layout;

// components
// import SideMenu from "../../components/sandbox/SideMenu";
// import TopHeader from "../../components/sandbox/TopHeader";
// import BreadCrumb from "../../components/sandbox/BreadCrumb";

const SideMenu = lazy(() => import("../../components/sandbox/SideMenu"));
const TopHeader = lazy(() => import("../../components/sandbox/TopHeader"));
const BreadCrumb = lazy(() => import("../../components/sandbox/BreadCrumb"));
// page
// import Home from "./home/Home";
// import UserList from "./user-manage/UserList";
// import RoleList from "./right-manage/RoleList";
// import RightList from "./right-manage/RightList";
// import NoPermission from "./nopermission/NoPermission";

const Home = lazy(() => import("./home/Home"));
const UserList = lazy(() => import("./user-manage/UserList"));
const RoleList = lazy(() => import("./right-manage/RoleList"));
const RightList = lazy(() => import("./right-manage/RightList"));
const NoPermission = lazy(() => import("./nopermission/NoPermission"));

export default function NewsSandBox() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <SideMenu />
        <Layout className="site-layout">
          <TopHeader />
          <BreadCrumb />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/user-manage/list" component={UserList}></Route>
              <Route
                path="/right-manage/role/list"
                component={RoleList}
              ></Route>
              <Route
                path="/right-manage/right/list"
                component={RightList}
              ></Route>

              <Redirect from="/" to="/home" exact />
              <Route path="*" component={NoPermission}></Route>
            </Switch>
          </Content>
        </Layout>
      </Suspense>
    </Layout>
  );
}
