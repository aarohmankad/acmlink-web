import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shorturl: "",
      longurl: "",
    };

    this.submitURL = this.submitURL.bind(this);
  }

  submitURL() {
    fetch('http://acmucrlink-api.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>acmucr.<i>link</i></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">acmucr.link/</span>
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="Short URL"
                value={this.state.shorturl}
                onChange={(event) => this.setState({
                  ...this.state,
                  shorturl: event.target.value,
                })}/>
            </div>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Long URL"
              value={this.state.longurl}
              onChange={(event) => this.setState({
                ...this.state,
                longurl: event.target.value,
              })}/>
          </div>
        </div>

        <div className="row justify-content-center">
          <button
            className="btn btn-primary"
            onClick={this.submitURL}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
