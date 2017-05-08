import React, { Component } from 'react';
import DownloadMenu from '~/components/DownloadMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <h5 className="title">我是容器</h5>
        </div>
        <DownloadMenu />
      </div>
    );
  }
}

export default App;
