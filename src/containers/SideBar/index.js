import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Logout from '../Logout';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      showNav : false,
      auth: false
    };
  }

  toggleNav(evt) {
    evt.preventDefault();
    this.setState({
      showNav : !this.state.showNav
    });
  }

  render() {
    //const auth = this.state.auth || localStorage.auth;
    return(
      <div id="sidebar">
      {/*!auth?
        null:*/
        <Menu
        width="200px"
        noOverlay>

        <Link to="/">
        Home</Link>
        <div id="line"/>

        <Link to="/users">
        Users</Link>
        <Link to="/logout">

        <div id="line"/>
        <Logout/></Link>
      </Menu>
    }
      </div>
      )

    }


}

export default SideBar;