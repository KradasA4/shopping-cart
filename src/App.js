import React from 'react';
import './App.css';
import CategoryMenu from './components/Category/CategoryMenu';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import Cart from './components/Cart/Cart';
import { product, products } from './components/ProductDisplay/ProductArray';

import { Col, Row, Button } from 'antd';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      name: "test",
      category: "",
      price: null,
      image: "",
      description: "",
      selectedMenu: null,

      products: []
    }
  }

  componentDidMount() {
    this.setState({
      products: products
      // selectedMenu: "2",
    })
  }

  render() {
    const { id, name, category, price, image, description, products } = this.state
    console.log("App")
    return (
      <div>
        <Row justify="space-between" gutter={1}>
          <Col span={4}>
            <CategoryMenu  />
          </Col>
          <Col span={12}>
            {/* <ProductDisplay  id={id} name={name} category={category} price={price} image={image} description={description} /> */}
            <ProductDisplay products={products} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
