import React, { Component } from 'react'
import Header from './Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
  }
  componentDidMount() {
    fetch("https://wd8716077287svpjzp.wilddogio.com/movie.json")
      .then(res => res.json())
      .then(res => {
        var blogsArray = [];
        for (let key in res) {
          res[key].id = key;
          blogsArray.push(res[key]);
        }
        return this.setState({
          movieList: blogsArray.reverse()
        })
      })
  }
  render() {
    // console.log(this.state.movieList)
    const movieItem = this.state.movieList.map(movie => (
      <div
        className="weui-media-box weui-media-box_text" key={movie.id}
      >
        <h4 className="weui-media-box__title">{movie.title}</h4>
        <ul className="weui-media-box__info">
          <li className="weui-media-box__info__meta">{movie.address}</li>
          <li className="weui-media-box__info__meta">{movie.createTime}</li>
          <li className="weui-media-box__info__meta weui-media-box__info__meta_extra">{movie.grade}分</li>
        </ul>
      </div>
    ))
    return (
      <div>
        <Header title="我看过的电影" />
        <div className="weui-panel">
          <div className="weui-panel__bd">
            {movieItem}
          </div>
        </div>

      </div>
    )
  }
}
export default Home
