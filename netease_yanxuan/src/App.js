import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Index from './components/index/Index';
import Cate from './components/cate/Cate';
import Topic from './components/topic/Topic';
import Cart from './components/cart/Cart';
import Mine from './components/mine/Mine';
import Search from './container/Search';
import Detail from './components/detail/Detail';
import * as tabIcon from './assets/img/indexImg';
import './App.styl';

class App extends Component {
  state = {
    selectTab: 'index',
    tabData: [
      {
        name: '首页',
        key: 'index',
        path: '/index',
        icon: tabIcon.index,
        selectedIcon: tabIcon.index_active,
      },
      {
        name: '分类',
        key: 'cate',
        path: '/cate',
        icon: tabIcon.cate,
        selectedIcon: tabIcon.cate_active,
      },
      {
        name: '识物',
        key: 'topic',
        path: '/topic',
        icon: tabIcon.topic,
        selectedIcon: tabIcon.topic_active,
      },
      {
        name: '购物车',
        key: 'cart',
        path: '/cart',
        icon: tabIcon.cart,
        selectedIcon: tabIcon.cart_active,
      },
      {
        name: '个人',
        key: 'mine',
        path: '/mine',
        icon: tabIcon.mine,
        selectedIcon: tabIcon.mine_active,
      }
    ]
  }
  changeTab = (tab) => {
    const { selectTab } = this.state;
    this.setState({
      selectTab: tab
    })
  }
  render() {
    const { tabData } = this.state;
    return (
      <Router>
        <div className="app">
          <div className="tab-wrapper">
            <div className="tab-view">
              <Switch>
                <Route path="/index" component={Index} />
                <Route path="/cate" component={Cate} />
                <Route path="/topic" component={Topic} />
                <Route path="/cart" component={Cart} />
                <Route path="/mine" component={Mine} />
                <Route path="/search" component={Search} />
                <Route path="/detail/:id" component={Detail} />
                <Redirect from="/" to="/index" />
              </Switch>
            </div>
            <div className="tabBar">
              {
                tabData.map((item, index) => {
                  return (
                    // style={{color: this.state.selectTab === item.key?'#b4282d':''}}
                    <div className="tab-item" key={index}>
                      <NavLink className="nav-link" to={item.path} onClick={() => this.changeTab(item.key)}>
                        <div className="item">
                          {
                            this.state.selectTab === item.key
                            ?
                            <img className="tab-icon" src={item.selectedIcon} alt="" />
                            :
                            <img className="tab-icon" src={item.icon} alt="" />
                          }
                          <span className="txt">{item.name}</span>
                        </div>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
