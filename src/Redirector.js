import React, { Component } from 'react';

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
      return <h1>Looking for acm.link/{match.params.shorturl}</h1>
    } else if (error) {
      return <h1>Could not find acm.link/{match.params.shorturl}</h1>
    }

    return <h1>You are being redirected to acm.link/{match.params.shorturl}</h1>
  }
}
