import React, { Component } from 'react';
import GoodInCart from '../../common/goodInCart/GoodInCart'
import './cart.styl'
class Cart extends Component {
  state = {}
  renderCartList = () => {
    const { cartList } = this.props;
    return (
      <>
        {
          cartList && cartList.map((item, index) => {
            console.log('pic', item);
            return (
              <div key={index}>
                <GoodInCart 
                  img={item.img[0]}
                  name={item.name}
                  color={item.color}
                  price={item.price}
                />
              </div>
            )
          })
        }
      </>
    )
  }
  render() { 
    console.log(this.props);
    return (  
      <div className="cartContainer">
        <div className="cartHeader">购物车</div>
        <div className="cartTips">
          <span>你关心的商品降价啦~</span>
          <span>></span>
        </div>
        <div className="cartList">  
          {this.renderCartList()}
        </div>
        <div className="cartOperation">
          <div className="selectAll">
            <img src={require('../../assets/check_box.png')} alt=""/>
            已选
          </div>
          <div className="countAllPrice">合计:</div>
          <div className="overBooking">下单</div>
        </div>
      </div>
    );
  }
}
 
export default Cart;
