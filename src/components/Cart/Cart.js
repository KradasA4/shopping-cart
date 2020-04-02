import React, { Component } from 'react';
import { Button } from 'antd';
import './Cart.css';
import { productArray } from '../ProductDisplay/ProductArray';

export default class Cart extends Component {
  // state = {
  //   totalPrice: 0
  // }

  // sumPrice = () => {
  //   let sum = 0;
  //   this.props.inCartItemId.map( (id) => {
  //     sum += productArray[id-1].price
  //     console.log(`funcsum: ${sum}`)
  //     this.setState({
  //       totalPrice: sum
  //     })
  //   }) 
  // }

  render() {
    // const inCartList = productArray.map( (product) => {
    //   if ( this.props.inCartItemId.includes(product.id) ) {
    //     return <li>{product.name} : {product.price} baht</li>
    //   }
    // })
    const { inCartItemId } = this.props;
    
    let sum = 0;
    sum = inCartItemId.map( (id) => {
      sum += productArray[id-1].price
      return sum
    }) 

    let totalPrice;
    console.log(inCartItemId)
    if (!sum[sum.length-1]) {
      totalPrice = 0;
    } else {
      totalPrice = sum[sum.length-1];
    }
    console.log(`total ${totalPrice}`)

    const inCartList = inCartItemId.map( (inCartId) => {
      return <li>{productArray[inCartId-1].name}: {productArray[inCartId-1].price}</li>
    })

    return (
      <div>
        <h1>cart</h1>
        <ul className="cart">
          {inCartList}
        </ul>
        <p>Total: { totalPrice } baht</p>
        <Button>Checkout</Button>
      </div>
    )
  }
}
