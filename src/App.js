import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ACM Link</h1>
        </header>
        <p className="App-intro">
        Welcome! This is ACM Link, a link shortening device for ACM@UCR.
        </p>
        <p className= "App-body">
        Do you have a really long url that needs to be reduced? Enter your url down below!
        </p>
      </div>
    );
  }
}


export default App;
