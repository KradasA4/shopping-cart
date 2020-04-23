import React from 'react';
import { Menu } from 'antd';
import './CategoryMenu.css';

class CategoryMenu extends React.Component {

  render() {
    return (
      <div style={{ width: 256 }} className="menu">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          className="menu__list"
        >
          
          <Menu.Item key="1" onClick={this.props.onClickMenu} className="menu__item">
            <span>All Menu</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.props.onClickMenu} className="menu__item" style={{}}>
            <span>Burger</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.props.onClickMenu} className="menu__item">
            <span>Side Dish</span>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.props.onClickMenu} className="menu__item">
            <span>Dessert</span>
          </Menu.Item>
          <Menu.Item key="5" onClick={this.props.onClickMenu} className="menu__item">
            <span>Beverage</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }


}

export default CategoryMenu;