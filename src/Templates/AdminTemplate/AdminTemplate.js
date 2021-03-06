import React, { Component } from 'react'
import { NavLink, Redirect, Route } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { USER_LOGIN } from '../../util/settings';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class AdminTemplate extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    let Component = this.props.component;
    const { collapsed } = this.state;

    if (!localStorage.getItem(USER_LOGIN)) {
      alert('Đăng nhập quản trị để vào trang này !');
      return <Redirect to="/login" />
    } else {
      let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
      if (userLogin.maLoaiNguoiDung !== "QuanTri") {
        return <Redirect to="/login" />
      }
    }




    return (
      <Route exact path={this.props.path} render={(propsRoute) => {
        return <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" >
              <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                <Menu.Item key="3">Create user</Menu.Item>
                <Menu.Item key="4">Users</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Films">
                <Menu.Item key="6">
                  <NavLink to="/admin/createfilm">
                    Create film
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="8">Films</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Component {...propsRoute} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      }} />
    )
  }
}
