import React, { Component } from 'react';
import { Button } from 'antd';
import './Cart.css';
import { productArray } from '../ProductDisplay/ProductArray';

export default class Cart extends Component {

  onClickCheckout = (totalPrice) => {
    console.log(totalPrice)
    alert(`You selected  x products. \nTotal price is ${totalPrice} baht`)
  }

  render() {
    const { inCartItemId } = this.props;
    
    // total price calculator
    let sum = 0;
    sum = inCartItemId.map( (id) => {
      sum += productArray[id-1].price
      return sum
    }) 

    // show 0 if there's no totalpirce yet
    let totalPrice;
    console.log(inCartItemId)
    if (!sum[sum.length-1]) {
      totalPrice = 0;
    } else {
      totalPrice = sum[sum.length-1];
    }
    console.log(`total ${totalPrice}`)

    const inCartList = inCartItemId.map( (inCartId) => {
      return <li>{productArray[inCartId-1].name}: {productArray[inCartId-1].price} baht</li>
    })

    return (
      <div>
        <h1>cart</h1>
        <ul className="cart">
          {inCartList}
        </ul>
        <p>Total: { totalPrice } baht</p>
        <Button onClick={ () => this.onClickCheckout(totalPrice) }>Checkout</Button>
      </div>
    )
  }
}
