import React from 'react';

const UrlInputs = props => (
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
          value={props.shorturl}
          onChange={props.shorturlChange}/>
      </div>
    </div>
    <div className="col-6">
      <input
        type="text"
        className="form-control"
        placeholder="Long URL"
        value={props.longurl}
        onChange={props.longurlChange}/>
    </div>
  </div>
)

export default UrlInputs;
