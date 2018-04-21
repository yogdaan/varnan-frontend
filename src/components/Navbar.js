import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav">
            <div className="nav__link nav__link--active">OVERVIEW</div>
            <div className="nav__link">USERS</div>
            <div className="nav__link">ENDPOINT STATS</div>
          </div>
        </div>
      </nav>
    );
  }
}
