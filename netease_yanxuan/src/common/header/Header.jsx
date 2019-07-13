import React, { Component } from 'react';
import Header from '../searchBox/SearchBox';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="header">
        <div className="logo"></div>
        <Header></Header>
        <div className="login-btn">登录</div>
      </div>
    );
  }
}
 
export default Header;