import React, { Component } from 'react';
import '../App.css';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Works from './Works';
import Award from './Award';


class Template extends Component {
  
  render() {
    return (
    	<React.Fragment>
    	<span id="main-logo">Alvintures</span>
	    	<HashRouter>
	    	  <React.Fragment>
	    	  	<Navbar/>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
		      </React.Fragment>
		    </HashRouter>
	    </React.Fragment>
    );
  }
}

export default Template;