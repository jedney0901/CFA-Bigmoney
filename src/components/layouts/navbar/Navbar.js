import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';


class MainNav extends Component {

  render() {

    return (

      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
              </button>
              <a className="navbar-brand" href="#">BigMoney</a>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">MyBudget</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
