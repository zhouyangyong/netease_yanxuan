import React, { Component } from 'react';
import { getHotSearch } from '../../api/index';
import './search.styl';

class Search extends Component {
  state = {
    inputVal: '',
    searchHistory:[]
  }
  componentDidMount() {
    // this.setState({
    //   searchHistory:this.props.
    // })
    getHotSearch()
  }
  handelChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }
  handleClear = () => {
    this.setState({
      inputVal: ''
    })
  }
  handleBack = () => {
    this.props.history.go(-1);
  }
  keyUp = (e) => {
    if (e.which === 13) {
      if (this.refs.ipt.value) {
        let val = this.refs.ipt.value;
        this.props.addSearchHistory({
          val
        })
      }
    }
  }
  clearSearchHistory = () => {
    this.props.clearSearchHistory()
  }
  renderSearchHistory = () => {
    const { searchHistory } = this.props;
    return (
      <>
        {
          searchHistory.map((item, index) => {
            return (
              <div className="item" key={index}>
                {item.val}
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    const { inputVal } = this.state;
    const { searchHistory } = this.props;
    console.log('history', this.props);
    return (
      <div className="searchPage">
        <div className="topBar">
          <div className="input-box">
            <i className="icon-search" ></i>
            <input className="input" ref="ipt" onKeyUp={this.keyUp} onChange={e => this.handelChange(e)} value={this.state.inputVal} type="text" placeholder="请输入商品名称" />
            <i className="clearIpt" onClick={this.handleClear} style={{ display: inputVal === '' ? 'none' : '' }}></i>
          </div>
          <span className="cancel" onClick={this.handleBack}>取消</span>
        </div>
        <div className="searchHistory" style={{ display: searchHistory.length === 0 ? 'none' : '' }}>
          <div className="header">
            <div className="tit">历史记录</div>
            <i className="del-icon" onClick={this.clearSearchHistory}></i>
          </div>
          <div className="list">
            {
              this.renderSearchHistory()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;