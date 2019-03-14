import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer container-fluid">
            <div className="row">
                <div className="col-md-6 col-6">
                    <a className="logo" href="#">
                        <img src={require('../assets/logo/logo-alterra-academy-plain.png')}/>
                    </a>
                    <span className="d-block marginspan">&copy;Copyright Alterra Group 2019</span>
                </div>
                <div className="col-md-6 col-6">
                    <ul id="footer">
                        <li className="nav-item follow">
                            <h2 className="nav-link" href="#">Follow us On</h2>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"><span><img src={require('../assets/ico/ico-facebook.png')}/></span> Facebook</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"><span><img src={require('../assets/ico/ico-twitter.png')}/></span> Twitter</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"><span><img src={require('../assets/ico/ico-instagram.png')}/></span> Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;