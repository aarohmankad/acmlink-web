import React from 'react';
import './UrlInputs.css';

const UrlInputs = props => (
  <div className="row">
    <div className="col-6">
      <div className="input-group mb-3" id="shortUrl">
        <div className="input-group-prepend">
          <span className="input-group-text">acmucr.link/</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Shortened URL"
          value={props.shorturl}
          onChange={props.shorturlChange}/>
      </div>
    </div>
    <div className="col-6">
      <input
        id="longUrl"
        type="text"
        className="form-control"
        placeholder="Long URL"
        value={props.longurl}
        onChange={props.longurlChange}/>
    </div>
  </div>
)

export default UrlInputs;
