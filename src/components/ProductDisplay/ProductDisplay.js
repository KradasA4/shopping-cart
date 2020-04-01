import React, { Component } from 'react';
import { Row } from 'antd';
import ProductCard from './ProductCard';

export default class ProductDisplay extends Component {
  render() {
    // const { id, product, category, price, image, description } = this.props
    const products = this.props.products
    const productArray = products.map( (item, index) => {   
      return (
        <ProductCard 
          id={products[index].id}
          name={products[index].name}
          category={products[index].category}
          price={products[index].price}
          image={products[index].image}
          description={products[index].description}
        />
      )
    });
    
    console.log("ProductDisplay")
    
    return (
      <Row>
        {productArray}
      </Row>
    )
  }
}
