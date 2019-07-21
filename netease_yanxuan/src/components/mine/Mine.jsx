import React, { Component } from 'react';
import Scroll from '../../common/scroll/Scroll';
import * as minePic from '../../assets/img/mineImg';
import './mine.styl'

class Mine extends Component {
  state = {
    refreshScroll: false,
    assetList: [
      {unit: '¥', value: 0, name: '回馈金'},
      {value: 0, name: '红包'},
      {value: 0, name: '优惠劵'},
      {unit: '¥', value: 0, name: '津贴'},
      {value: 0, name: '礼品卡'}
    ],
    menu: [
      {pic: minePic.order, text: '我的订单'},
      {pic: minePic.calendar, text: '周六一起拼'},
      {pic: minePic.afterSale, text: '售后服务'},
      {pic: minePic.invitation, text: '邀请返利'},
      {pic: minePic.purchase, text: '优先购'},
      {pic: minePic.integral, text: '积分中心'},
      {pic: minePic.member, text: '会员俱乐部'},
      {pic: minePic.address, text: '地址管理'},
      {pic: minePic.account, text: '账号安全'},
      {pic: minePic.service, text: '帮助与客服'},
      {pic: minePic.feedback, text: '意见反馈'}
    ]
  }

  componentDidMount() {
    this.setState({
      refreshScroll: true
    })
  }
  renderAssetList = () => {
    const { assetList } = this.state;
    return (
      <>
        {
          assetList.map((item, index) => {
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
  renderMenu = () => {
    const { menu } = this.state;
    return (
      <>
        {
          menu.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="menuItem">
                  <img src={item.pic} alt=""/>
                  <span className="text">{item.text}</span>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    const { refreshScroll } = this.state;
    return (
      <div className="mainPage">
        <Scroll refresh={refreshScroll}>
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
            <div className="menu">
              {this.renderMenu()}
            </div>
            <div className="launchLogin">
              <button className="button">退出登录</button>
            </div>
            <div className="blank"></div>
          </div>
        </Scroll>
      </div>
    );
  }
}

export default Mine;