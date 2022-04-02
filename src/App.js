import 'antd/dist/antd.css';
import React from 'react';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
//import Header from './components/Header/Header';
//import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes, NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = (props) => {



  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            Social Network
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                <Menu.Item key="1"><NavLink to='./profile'>Profile</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/dialogs'>Message</NavLink></Menu.Item>

              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Tools">
                <Menu.Item key="5">Music</Menu.Item>
                <Menu.Item key="6">News</Menu.Item>
                <Menu.Item key="7">Trending</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
                <Menu.Item key="9">Privacy and Security</Menu.Item>
                <Menu.Item key="10">Notification and Sounds</Menu.Item>
                <Menu.Item key="11">FAQ</Menu.Item>
                <Menu.Item key="12">Contact</Menu.Item>
                <Menu.Item key="13">Language</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Routes>
              <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
              <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
            </Routes>

          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Create by Kraiev Oleh</Footer>
    </Layout>
  )
};
export default App