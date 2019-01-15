import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';
import Fade from 'react-reveal/Fade';
import {NavLink, Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Drawer from 'react-motion-drawer';
import { TweenMax, Expo, Power2, TimelineMax } from "gsap/all";
import $ from 'jquery';
import About from './About';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeClassName: "tab",
    }
  }

  closeToggle = () => {
    let t2 = new TimelineMax({paused: false});

    t2.to(".menu", 3, {
      left: "-100%",
      ease: Expo.easeInOut,
      delay: -1,
    });
  }

  navToggle = () => {
    let t1 = new TimelineMax({paused: false});
    t1.to(".menu", 3, {
      left: '0%',
      ease: Expo.easeInOut,
      delay: -1,
    });
  }

  aboutToggle = () => {
    let t2 = new TimelineMax({paused: false});

    t2.to(".menu", 3, {
      left: "-100%",
      ease: Expo.easeInOut,
      delay: -1
    });

    TweenMax.to(".home", 3, {
      delay: 0.5,
      opacity: 0.5,
      x: "-100%",
      opacity: 0,
      ease: Power2.easeOut,
    });

    TweenMax.to(".award", 1.5, {
      delay: 0.5,
      x: "100%",
      ease: Power2.easeInOut
    });

    TweenMax.to(".about", 1, {
      delay: 0.5,
      x: "-100%",
      opacity: 1,
      ease: Power2.easeInOut
    });

    TweenMax.to(".works", 1.5, {
      delay: 0.5,
      x: "100%",
      ease: Power2.easeInOut
    });
  }

  homeToggle = () => {
    let t3 = new TimelineMax({paused: false});

    t3.to(".menu", 3, {
      left: "-100%",
      ease: Expo.easeInOut,
      delay: -1
    });

    TweenMax.to(".award", 1.5, {
      delay: 0,
      x: "100%",
      ease: Power2.easeInOut
    });

    TweenMax.to(".about", 1, {
      opacity: 0.1,
      delay: 0,
      x: "0%",
      ease: Power2.easeInOut,
    });

    TweenMax.to(".home", 1, {
      delay: 0.5,
      opacity: 1,
      x: "0%",
      ease: Power2.easeInOut,
    });

    TweenMax.to(".works", 1.5, {
      delay: 0.5,
      x: "100%",
      ease: Power2.easeInOut
    });
  }

  awardToggle = () => {
    let t3 = new TimelineMax({paused: false});

    t3.to(".menu", 3, {
      left: "-100%",
      ease: Expo.easeInOut,
      delay: -1
    });

    TweenMax.to(".home", 2, {
      delay: 1,
      opacity: 0.5,
      x: "-100%",
      opacity: 0,
      ease: Power2.easeOut,
    });

    TweenMax.to(".about", 1.5, {
      delay: 0.5,
      opacity: 0.5,
      x: "-1000px",
      ease: Power2.easeInOut,
    });

    TweenMax.to(".award", 1.5, {
      delay: 0.5,
      x: "-100%",
      ease: Power2.easeInOut
    });

    TweenMax.to(".works", 1.5, {
      delay: 0.5,
      x: "100%",
      ease: Power2.easeInOut
    });
  }

  worksToggle = () => {
    let t3 = new TimelineMax({paused: false});

    t3.to(".menu", 3, {
      left: "-100%",
      ease: Expo.easeInOut,
      delay: -1
    });

    TweenMax.to(".home", 2, {
      delay: 1,
      opacity: 0,
      x: "-100%",
      opacity: 0,
      ease: Power2.easeOut,
    });

    TweenMax.to(".about", 1.5, {
      delay: 0.5,
      opacity: 0.5,
      x: "-4000px",
      ease: Power2.easeInOut,
    });

    TweenMax.to(".award", 1.5, {
      delay: 0.5,
      x: "-2000px",
      ease: Power2.easeInOut
    });

    TweenMax.to(".works", 1.5, {
      delay: 0.5,
      x: "-100%",
      ease: Power2.easeInOut
    });
  }

  render() {

    return (
      <React.Fragment>
        <div className="toggle-btn" onClick={this.navToggle}>
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <div className="menu">
          <div className="close-btn" onClick={this.closeToggle}>
            <span className="three"></span>
            <span className="four"></span>
          </div>
          <div className="data">
            <ul>
              <li><a className="nav-item" onClick={this.homeToggle}>Home</a></li>
              <li><a className="nav-item" onClick={this.aboutToggle}>About</a></li>
              <li><a className="nav-item" onClick={this.awardToggle}>Award/s</a></li>
              <li><a className="nav-item" onClick={this.worksToggle}>Works</a></li>
            </ul>
          </div>
        </div>
        <About/>
      </React.Fragment>
      );
  }
}

export default Navbar;