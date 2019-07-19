import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import SearchBox from '../searchBox/SearchBox';
import './header.styl';

class Header extends Component {
  state = {}
  render() {
    return (
      <div className="header">
        <div className="line">
          <img className="logo" src={logo} alt="" />
          <div className="search-box">
            <SearchBox></SearchBox>
          </div>
          <div className="login-btn">登录</div>
        </div>     
      </div>
    );
  }
}

export default Header;