import React from 'react';
import { Menu } from 'antd';

class CategoryMenu extends React.Component {

  render() {

    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          
          <Menu.Item key="1" onClick={this.props.onClickMenu}>
            <span>All Menu</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.props.onClickMenu}>
            <span>Burger</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.props.onClickMenu}>
            <span>Side Dish</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.props.onClickMenu}>
            <span>Dessert</span>
          </Menu.Item>
          <Menu.Item key="5" onClick={this.props.onClickMenu}>
            <span>Beverage</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }


}

export default CategoryMenu;