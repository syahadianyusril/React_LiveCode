import React, { Component } from 'react';
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-transparent">
          <a className="navbar-item" href="#" onClick={this.props.doClick1}>Sports</a>
          <a className="navbar-item" href="#" onClick={this.props.doClick2}>Lifestyle</a>
          <a className="navbar-item" href="#" onClick={this.props.doClick3}>Health</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" name="search" id="search" onChange={this.props.doSearch} />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>  
    )
  }
}

Search.propTypes = {
  title: PropTypes.string.isRequired
}

export default Search;