import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class Profil extends Component  {
  render(){
    if (!this.props.is_login) {
      return <Redirect to={{pathname: "/signin"}}/>;
    }
    else {
      return (
        <section>
          <h1>PROFILE</h1>
          <p>
            <label>Name:</label> Awesome Ata
          </p>
          <p>
            <label>Email:</label> Academy@alphatech.id
          </p>
          <img src="https:/cdn150.picsart.com/upscale-245339439045212.png?r1024x1024"/>
        </section>
      )
    }
  }  
};

export default connect(
  "is_login,email, full_name",
  actions
)(withRouter(Profil));