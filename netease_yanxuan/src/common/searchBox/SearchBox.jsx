import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../../components/search/Search';
import './searchBox.styl';

class SearchBox extends Component {
  state = {}
  render() {
    return (
      // <Router>
      //   <NavLink to="/search">
      <div>
        <NavLink to="/search">
          <div className="input-box">
            <i className="icon-search"></i>
            <span className="placeholder">搜索商品, 共21829款好物</span>
          </div>
        </NavLink>
      </div>
      //   {/* </NavLink>
      //   <Route path="/search" component={Search} />
      // </Router> */}
    );
  }
}

export default SearchBox;