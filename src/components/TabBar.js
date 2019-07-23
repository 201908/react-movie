import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './TabBar.css'


class TabBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabbarData: [
        { title: "首页", icon: "/img/home.png", path: "/home" },
        {
          title: "新增",
          icon: "/img/add.png",
          path: "/add"
        },
        {
          title: "小程序",
          icon: "/img/tabs-miniprogram.png",
          path: "/miniprogram"
        }
      ]
    }
  }

  render() {
    return (
      <div className="tabbar">
        {
          this.state.tabbarData.map((tab, index) => {
            return (
              <NavLink to={tab.path} key={index} className="tab-item" activeClassName="is-selected">
                <div className="tab-item-icon">
                  <img src={tab.icon} alt="" />
                </div>
                <div className="tab-item-label">{tab.title}</div>
              </NavLink>
            )
          })
        }
      </div>
    )
  }
}
export default TabBar
