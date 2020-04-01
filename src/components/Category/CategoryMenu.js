import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

class CategoryMenu extends React.Component {
  constructor() {
    super();

  }



  
  
  render() {
    console.log("Menu")

    return (
      <div style={{ width: 256 }}>
        {/* <h1>{selectedMenu}</h1> */}
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          
          <Menu.Item key="1" onClick={this.props.onClickMenu}>
            <PieChartOutlined />
            <span>All Menu</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.props.onClickMenu}>
            <PieChartOutlined />
            <span>Burger</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.props.onClickMenu}>
            <DesktopOutlined />
            <span>Side Dish</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.props.onClickMenu}>
            <ContainerOutlined />
            <span>Dessert</span>
          </Menu.Item>
          <Menu.Item key="5" onClick={this.props.onClickMenu}>
            <ContainerOutlined />
            <span>Beverage</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }


}

export default CategoryMenu;