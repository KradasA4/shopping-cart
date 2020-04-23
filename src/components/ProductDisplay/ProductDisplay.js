import React, { Component } from 'react';
import { Row } from 'antd';
import ProductCard from './ProductCard';
import './ProductDisplay.css'

export default class ProductDisplay extends Component {

  render() {
    const { products, onClickAddToCart } = this.props
    
    const productArray = products.map( (item) => {
      return (
        <ProductCard 
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          image={item.image}
          description={item.description}
          onClickAddToCart={onClickAddToCart}
          className="products__display"
        />
      )
    });
    
    return (
      <Row 
        align="middle"
        justify="center"
        className="products">
        {productArray}
      </Row>
    )
  }
}
