import React, { Component } from "react";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <p>LOGO</p>
        <div id="small">
          <button>Home</button>
          <button>My Portfolio</button>
          <button>Clients</button>
          <button>Get In Touch</button>
        </div>
      </div>
    );
  }
}

export default Header;
