import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

  render() {
    // console.log(this.props)
    return (
      <header className="header">
        {
          this.props.goBack ?
            <div className="header-button is-left">
              <i className="fa fa-chevron-left"></i>
              <button>返回</button>
            </div>
            : null
        }

        <h1 className="header-title">{this.props.title}</h1>
      </header>
    )
  }
}

export default Header
