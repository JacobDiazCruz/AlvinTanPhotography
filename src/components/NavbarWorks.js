import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {NavLink, Route, withRouter } from 'react-router-dom';

class NavbarWorks extends Component {

  render() {
    return (
    <React.Fragment>
    	<nav className="navbar-works">
      	<div id="logo-container">
      	 <a id="works-logo">Alvin Tan</a>
      	</div>
      		<NavLink exact to ="/works"  id="works-tab2">
      			Works
      		</NavLink>
      		<NavLink exact to ="/about" id="about-tab2"> 
      			About
      		</NavLink>
      		<NavLink exact to ="/" id="home-tab2">
      			Home
      		</NavLink>
    	</nav>
	</React.Fragment>
      );
  }
}

export default NavbarWorks;