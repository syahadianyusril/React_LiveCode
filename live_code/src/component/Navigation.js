import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import {Link} from "react-router-dom"
const Navigation = props => {
  return (
      <header className="container">
          <div className="row">
              <div className="col-md-12">
                  <ul className="nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/profil" className="nav-link">Profil</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/signin" className="nav-link">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => props.postSignout()}>Logout</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <br></br>
      </header>
  )
}

export default Navigation;