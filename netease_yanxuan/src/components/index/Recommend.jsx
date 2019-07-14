import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import { swiperList } from '../../assets/indexImg/swiperList';

class Recommend extends Component {
  state = {}
  componentDidMount() {
    var mySwiper = new Swiper('.slider-container', {
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }
  renderSwiperItem = () => {
    return (
      <>
        {
          swiperList.map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <img src={item} width="100%" height="185px" alt="" />
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    return (
      <div>
        <div className="slider-container">
          <div className="swiper-wrapper">
            {this.renderSwiperItem()}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default Recommend;