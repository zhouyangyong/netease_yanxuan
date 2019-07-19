import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Recommend from './Recommend';
import Life from './Life';
import Clothe from './Clothe';
import Food from './Food';
import Clean from './Clean';
import Mombaby from './Mombaby';
import Sport from './Sport';
import Digital from './Digital';
import Global from './Global';
import Header from '../../common/header/Header';
import './styl/index.styl';

class Index extends Component {
  state = {
    show: false
  }
  toggleWarp = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    })
  }
  render() {
    const { show } = this.state;
    return (
      <div className="indexPage">
        <Header></Header>
        <div className="item-wrapper">
          <div className="tabs">
            <NavLink className="nav-link" to="/index/recommend">
              <span className="item">推荐</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/life">
              <span className="item">居家生活</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/clothe">
              <span className="item">服饰鞋包</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/food">
              <span className="item">美食酒水</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/clean">
              <span className="item">个护清洁</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/mombaby">
              <span className="item">母婴亲子</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/sport">
              <span className="item">运动旅行</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/digital">
              <span className="item">数码家电</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/global">
              <span className="item">全球特色</span>
            </NavLink>
          </div>
          <div className="tabAlter" style={{ display: show ? '' : 'none' }}>全部频道</div>
          <div className="toggleWrap">
            <div className="linear"></div>
            <div className="toggle" onClick={this.toggleWarp}>
              <div className={`icon ${show ? 'iconActive' : ''}`}></div>
            </div>
          </div>
        </div>
        <div className="mask" style={{ display: show ? '' : 'none' }}></div>
        <div className="header-tab-view">
          <Switch>
            <Route path="/index/recommend" component={Recommend} />
            <Route path="/index/life" component={Life} />
            <Route path="/index/clothe" component={Clothe} />
            <Route path="/index/food" component={Food} />
            <Route path="/index/clean" component={Clean} />
            <Route path="/index/mombaby" component={Mombaby} />
            <Route path="/index/sport" component={Sport} />
            <Route path="/index/digital" component={Digital} />
            <Route path="/index/global" component={Global} />
            <Redirect from="/index" to="/index/recommend" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Index;