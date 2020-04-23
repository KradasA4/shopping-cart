import React, { Component } from 'react'
import { Card, Button } from 'antd';
import './ProductCard.css';


const { Meta } = Card;

export default class ProductCard extends Component {
  
  render() {
    const {id, name, category, price, image, description} = this.props;

    return (
      <div className="product-card">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <div className="product-card__img-box">
              <img className="product-card__img" alt={name} src={require(`${image}`)} />
            </div>
          }
        >
          <Meta 
            title={name}
            description={
              <>
                <h4>{price} baht</h4>
                <p>{description}</p>
              </>
            }
          />


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
