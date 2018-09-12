import React, { Component } from "react";

//Stateless Functional Componenets, just returns a react component
//Same as a class,
//p.s shortcut is sfc
/**
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://www.reddit.com/">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
*/


class NavBar extends Component {

  render() {
    console.log("Navbar rendered!") 
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://www.reddit.com/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
