import React, { Component } from 'react';
import { Row } from 'antd';
import ProductCard from './ProductCard';

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
        />
      )
    });
    
    return (
      <Row>
        {productArray}
      </Row>
    )
  }
}
