import React from 'react';
import './App.css';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// 引入我们需要的模板
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import Miniprogram from './components/Miniprogram'
import TabBar from './components/TabBar'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/miniprogram" component={Miniprogram} />
        <TabBar />
      </div>
    </Router>
  );
}

export default App;
