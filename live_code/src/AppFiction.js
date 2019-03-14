import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./Store";
import Fictioncontent from "./fiction/Content.js";

class AppFiction extends Component {

  componentDidMount = () => {
    this.props.fictionMovies().then(
      () => {
        console.log(this)
      }
    )
  }

  

  render() {
    const {listNews} = this.props;
    return (
      <div>
        <div className="container">
          <div class="row">
            <div className="col-md-12">
              {listNews.map((item, key) => {
                  return (
                    <Fictioncontent
                      key={key}
                      poster={item.Poster}
                      title={item.Title}
                      year={item.Year}
                      synopsis={item.Synopsis}
                      category={item.Category}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "listNews",
  actions
)(withRouter(AppFiction));
