import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Content extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top"src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt=""/></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <h2 class="text-center">Romance</h2>
                  </h4>
                </div>
                <div class="card-footer text-center">
                  <Link to="/romance" className="btn btn-primary">See Movies</Link>
                </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top"src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt=""/></a>
              <div class="card-body">
                <h4 class="card-title">
                  <h2 href="#" class="text-center">Action</h2>
                </h4>
              </div>
              <div class="card-footer text-center">
                <Link to="/action" className="btn btn-primary">See Movies</Link>  
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top"src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" alt=""/></a>
              <div class="card-body">
                <h4 class="card-title">
                <h2 href="#" class="text-center">Fiction</h2>
                </h4>
              </div>
              <div class="card-footer text-center">
                <Link to="/fiction" className="btn btn-primary">See Movies</Link> 
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top"src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" alt=""/></a>
              <div class="card-body">
                <h4 class="card-title">
                  <h2 href="#" class="text-center">Comedy</h2>
                </h4>
              </div>
              <div class="card-footer text-center">
                <Link to="/comedy" className="btn btn-primary">See Movies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;