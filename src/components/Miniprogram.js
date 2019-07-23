import React, { Component } from 'react'
import Header from './Header/Header'
import './Miniprogram.css'

class Miniprogram extends Component {
  render() {
    return (
      <div className="miniprogram">
        <Header title="小程序"></Header>
        <div className="container">
          <div className="img-box">
            <img src="/img/miniprogram-qrcode.jpg" alt="" />
          </div>
          <p className="text">
            长按识别小程序码
        <br />进入“记录美好人生”小程序
      </p>
        </div>
      </div>
    )
  }
}
export default Miniprogram
