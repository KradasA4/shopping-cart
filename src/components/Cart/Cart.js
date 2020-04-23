import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import './Cart.css';
import { productArray } from '../ProductDisplay/ProductArray';

export default class Cart extends Component {

  // onClickCheckout = (totalPrice) => {
  //   console.log(totalPrice)
  //   alert(`You selected  x products. \nTotal price is ${totalPrice} baht`)
  // }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { inCartItemId } = this.props;
    
    // total price calculator
    let sum = 0;
    sum = inCartItemId.map( (id) => {
      sum += productArray[id-1].price
      return sum
    }) 

    // show 0 if there's no totalprice yet
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
      <div className="cart">
        <span className="cart__header">cart</span>
        <div className="cart__products-box">
          <ul className="cart__products">
            {inCartList}
          </ul>
        </div>
        <p>Total: { totalPrice } baht</p>
        <Button onClick={this.showModal}>Checkout</Button>
        
        {/* checkout confirm modal */}
        <Modal
          title="Please confirm your orders"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Confirm"
        >
          <p>You selected {inCartItemId.length} products. </p>
          <p>Total price is {totalPrice} baht</p>
        </Modal>
      </div>
    )
  }
}
