import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class Signin extends Component {
  doLogin = () => {
    const self = this
    this.props.postLogin().then(() => {
      self.props.history.replace("/profil");
    });
  };
  render() {
    console.log("state", this.state);
    return (
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <h4>SignIn</h4>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={e => this.props.setField(e)}
            />
            <br></br>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={e => this.props.setField(e)}
            />
          </div>
          <button onClick={() => this.doLogin()}>SignIn</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}

export default connect(
  "is_login,username",
  actions
)(withRouter(Signin));
