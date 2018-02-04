import React, { Component } from 'react';
import './Redirector.css';

export default class Redirector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      loading: true,
    };
  }

  componentWillMount() {
    fetch(`http://acmucrlink-api.herokuapp.com/${this.state.match.params.shorturl}`)
      .then(res => res.json())
      .then(mapping => window.location.href = mapping.longurl)
      .catch(error => this.setState({
        ...this.state,
        loading: false,
        error: true,
      }));
  }

  render() {
    const {
      match,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <h1 class="msg">Looking for acmucr.link/{match.params.shorturl}</h1>
    } else if (error) {
      return <h1 class="msg">Could not find acmucr.link/{match.params.shorturl}</h1>
    }

    return <h1 class="msg">You are being redirected to acmucr.link/{match.params.shorturl}</h1>
  }
}
