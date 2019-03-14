import React, { Component } from 'react';
import PropTypes from "prop-types";

const Actioncontent = props => {
  return (
    <div>
      <div className="card my-4">
        <img className="card-img-top text-center" src={props.poster} alt="Card image cap" style={{maxHeight:200,maxWidth:200}}/>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.year}</p>
          <p className="card-text">{props.synopsis}</p>
        </div>
        <div className="card-footer text-muted">
          Category: {props.category}<br></br>
        </div>
      </div>
    </div>
  )
}

Actioncontent.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Actioncontent;