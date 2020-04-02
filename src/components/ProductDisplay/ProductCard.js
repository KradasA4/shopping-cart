import React, { Component } from 'react'
import { Card, Button } from 'antd';
import './ProductCard.css';


const { Meta } = Card;

export default class ProductCard extends Component {
  
  render() {
    const {id, name, category, price, image, description} = this.props;

    return (
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={name} src={require(`${image}`)} />}
          className="antd__Card"
        >
          <Meta title={name} description={description} />

          <Button 
            type="primary" 
            className="Button--center" 
            justify="center" 
            id={id}
            onClick={ (e) => this.props.onClickAddToCart(e.target.id) }
          >
            Add
          </Button>
        </Card>
      </div>
    )
  }
}
