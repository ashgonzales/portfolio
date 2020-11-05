import React, { Component } from "react";
import { HeaderLinks } from "./HeaderLinks";
import "./Header.css";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="header">
        <div className="container">
          <h1 className="header-logo">acg</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul
            className={this.state.clicked ? "header-menu active" : "header-menu"}
          >
            {HeaderLinks.map((link, idx) => {
              return (
                <li key={idx}>
                  <span className="header-span"><a className={link.class} href={link.url}>
                    {link.title}
                  </a></span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
