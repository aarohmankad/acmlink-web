import React, { Component } from 'react';
import UrlInputs from './UrlInputs';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlList: [{
        shorturl: "",
        longurl: "",
      }]
    };

    this.submitURL = this.submitURL.bind(this);
  }

  submitURL() {
    this.state.urlList.forEach(mapping => {
      fetch('http://acmucrlink-api.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(mapping),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => response.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>acmucr.<i>link</i></h1>
          </div>
        </div>

        {
          this.state.urlList.map((mapping, index) => (
            <UrlInputs
              shorturl={mapping.shorturl}
              longurl={mapping.longurl}
              shorturlChange={event => {
                event.persist();
                
                this.setState(state => {
                  state.urlList[index].shorturl = event.target.value;
                  return state;
                });
              }}
              longurlChange={event => {
                event.persist();

                this.setState(state => {
                  state.urlList[index].longurl = event.target.value;
                  return state;
                })
              }}
              />
          ))
        }

        <div className="row justify-content-center">
          <button
            className="btn btn-secondary"
            onClick={() => this.setState(state => {
              state.urlList.push({
                shorturl: "",
                longurl: "",
              });
              return state;
            })}>
            Add Link
          </button>

          <button
            className="btn btn-success"
            onClick={this.submitURL}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
