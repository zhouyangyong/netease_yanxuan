import React, { Component } from 'react';
import Stepper from '../stepper/Stepper';
import Price from '../price/Price';
import './goodInCart.styl';
class GoodInCart extends Component {
  state = {  }
  render() { 
    const cart = this.props
    return (
      <div className="goodInCartContainer">
        <div className="selectedOrNot">
          <img src={require('../../assets/check_box.png')} alt=""/>
        </div>
        <div className="goodInCartPic">
          <img src={cart.img} alt=""/>
        </div>
        <div className="goodInCartInfo">
          <div className="goodInCartInfo-title">
            {cart.name}
          </div>
          <div className="goodInCartInfo-spec">
            {cart.color}
          </div>
          <div className="goodInCartInfo-price">
            <Price newPrice={cart.price} oldPrice="300" />
          </div>
        </div>
        <div className="goodInCartCount">
          <Stepper></Stepper>
        </div>
      </div>
    );
  }
}
 
export default GoodInCart;
