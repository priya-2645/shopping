import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List } from 'antd';
import { ShoppingCartOutlined, NotificationOutlined } from '@ant-design/icons';
import data from './App.json';

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Dresses</Menu.Item>
            <Menu.Item key="2">Snacks &amp; Packaged foods</Menu.Item>
            <Menu.Item key="3">Beverages</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >

              <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
                <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
                <Menu.Item key="2">skirts &amp; shirts</Menu.Item>
                <Menu.Item key="3">Jackets &amp; Shrugs</Menu.Item>
                <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="snacks &amp; packaged foods">
                <Menu.Item key="5">OREO Cream Biscuits</Menu.Item>
                <Menu.Item key="6">Little Hearts</Menu.Item>
                <Menu.Item key="7">Pringles Potato Chips </Menu.Item>
                <Menu.Item key="8">Lay's Waffer</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3"  title="Beverages">
                <Menu.Item key="9">Minute Maid</Menu.Item>
                <Menu.Item key="10">Tropicana</Menu.Item>
                <Menu.Item key="11">paper boat</Menu.Item>
                <Menu.Item key="12">appy FIZZ</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}

            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 3,
                }}
                dataSource={data.Array}
                renderItem={item => (


                  <List.Item>

                    <Card

                      title={item.title}>
                      <img src={item.image} className="image-container" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                     

                    </Card>
                  </List.Item>

                )}
              />,
  </Content>
          </Layout>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
