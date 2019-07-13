import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; 
import Recommend from '../../components/index/Recommend';
import Life from '../../components/index/Life';
import Clothe from '../../components/index/Clothe';
import Food from '../../components/index/Food';
import Clean from '../../components/index/Clean';
import Mombaby from '../../components/index/Mombaby';
import Sport from '../../components/index/Sport';
import Digital from '../../components/index/Digital';
import Global from '../../components/index/Global';
import SearchBox from '../searchBox/SearchBox';
import logo from '../../assets/logo.png';
import './header.styl';

class Header extends Component {
  state = {
    tabList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']
  }
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
        <div className="item-wrapper">
          <div className="tabs">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Header;