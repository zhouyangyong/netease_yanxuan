import React, { Component } from 'react';
import './search.styl';

class Search extends Component {
  state = {}
  render() {
    return (
      <div className="searchPage">
        <div className="topBar">
          <div className="input-box">
            <i className="icon-search"></i>
            <span className="placeholder">搜索商品, 共21829款好物</span>
          </div>
          <span className="cancel"></span>
        </div>
      </div>
    );
  }
}

export default Search;