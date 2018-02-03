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
        <img src= "http://www.emoji.co.uk/files/mozilla-emojis/symbols-mozilla/12113-black-down-pointing-double-triangle.png"
        className="down-arrow" alt="down-arrow"/>
        <img src= "http://www.emoji.co.uk/files/mozilla-emojis/symbols-mozilla/12113-black-down-pointing-double-triangle.png"
        className="down-arrow2" alt="down-arrow2"/>
      </div>


    );
  }
}


export default App;
