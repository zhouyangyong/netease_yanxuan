import React, { Component } from 'react';
import './searchBox.styl'

class SearchBox extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="input-box">
          <i className="icon-search"></i>
          <input type="text" placeholder="搜索商品, 共21829款好物"/>
      </div>
    );
  }
}
 
export default SearchBox;