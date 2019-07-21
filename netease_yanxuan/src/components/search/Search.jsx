import React, { Component } from 'react';
import './search.styl';

class Search extends Component {
  state = {
    inputVal: ''
  }
  handelChange = (e) => {
    const { inputVal } = this.state;
    this.setState({
      inputVal: e.target.value
    })
  }
  handleClear = () => {
    const { inputVal } = this.state;
    this.setState({
      inputVal: ''
    })
  }
  handleBack = () => {
    this.props.history.goBack()
  }
  render() {
    const { inputVal } = this.state;
    return (
      <div className="searchPage">
        <div className="topBar">
          <div className="input-box">
            <i className="icon-search"></i>
            <input className="input" ref="ipt" onChange={e => this.handelChange(e)} value={this.state.inputVal} type="text" placeholder="请输入商品名称" />
            <i className="clearIpt" onClick={() => this.handleClear()} style={{ display: inputVal === '' ? 'none' : '' }}></i>
          </div>
          <span className="cancel" onClick={() => this.handleBack()}>取消</span>
        </div>

      </div>
    );
  }
}

export default Search;