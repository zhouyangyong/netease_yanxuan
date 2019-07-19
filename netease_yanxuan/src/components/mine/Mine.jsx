import React, { Component } from 'react';
import Scroll from '../../common/scroll/Scroll';
import './mine.styl'

class Mine extends Component {
  state = {
    assetList: [
      {unit: '¥', value: 0, name: '回馈金'},
      {value: 0, name: '红包'},
      {value: 0, name: '优惠劵'},
      {unit: '¥', value: 0, name: '津贴'},
      {value: 0, name: '礼品卡'}
    ]
  }
  renderAssetList = () => {
    const { assetList } = this.state;
    return (
      <>
        {
          assetList.map((item, index) => {
            console.log(item.unit);
            return (
              <div className="assetItem" key={index}>
                <div className="assetCount">
                  <span className="unit" style={{display: (item.unit === undefined) ? 'none' : ''}}>{item.unit}</span>
                  <span className="value">{item.value}</span>
                </div>
                <div className="assetName">{item.name}</div>
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    return (
      <div className="mainPage">
        <Scroll>
          <div>
            <div className="header">
              <div className="m-info">
                <img className="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="" />
                <div className="info">
                  <div className="nickName">山口百惠</div>
                  <div className="memberTitle">普通用户</div>
                </div>
              </div>
            </div>
            <div className="myAsset">
              <div className="tt">我的资产</div>
              <div className="assetList">
                {this.renderAssetList()}
              </div>
            </div>
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Mine;