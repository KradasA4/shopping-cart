import React from 'react';
import './App.css';
import CategoryMenu from './components/Category/CategoryMenu';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import Cart from './components/Cart/Cart';
import { productArray } from './components/ProductDisplay/ProductArray';

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
      products: productArray
    })
  }
  
  filterByCategory = (state, category) => {
    return(
          state.filter( (item) => {
            return item.category == category
      })
    )
  }

  onClickMenu = (e) => {
    let filteredProducts;

    if(e.key === "1") {
      filteredProducts = productArray
    } if(e.key === "2") {
      filteredProducts = this.filterByCategory(productArray, "burger");
    } else if (e.key === "3") {
      filteredProducts = this.filterByCategory(productArray, "side dish");
    } else if (e.key === "4") {
      filteredProducts = this.filterByCategory(productArray, "dessert");
    } else if (e.key === "5") {
      filteredProducts = this.filterByCategory(productArray, "beverage");
    }

    this.setState({
      products: filteredProducts
    })
  }

  render() {
    const { products } = this.state
    console.log("App")
    console.log(this.state.products);
    return (
      <div>
        <Row justify="space-between" gutter={1}>
          <Col span={4}>
            <CategoryMenu onClickMenu={this.onClickMenu} />
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
