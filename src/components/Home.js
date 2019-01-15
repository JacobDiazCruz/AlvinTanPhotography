import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';
import { Wave, Random } from 'react-animated-text';
import TextLoop from "react-text-loop";
import { Fade, Bounce } from 'react-reveal';
import Intro from './Intro';
import { Transition } from "react-transition-group";
import { TweenMax, Expo, Power2, TimelineMax } from "gsap/all";
import $ from 'jquery';
import {NavLink, Route, withRouter} from 'react-router-dom';

class Home extends Component {

  componentDidMount() {

    TweenMax.to(".alvintures", 1, {
          y: -100,
          opacity: 0,
          delay: 1,
    });

    TweenMax.from(".overlay", 3, {
          delay: 1,
          ease: Power2.easeInOut
    });

     TweenMax.to(".overlay", 3, {
          delay: 1,
          top: "-110%",
          opacity: 1,
          ease: Expo.easeInOut
    });

     TweenMax.to(".overlay-2", 10, {
          delay: 3,
          top: "-110%",
          ease: Expo.easeInOut
     });

    TweenMax.from(".home", 2, {
          delay: 2,
          opacity: 1,
          ease: Power2.easeInOut
    });

     TweenMax.to(".home", 2, {
          opacity: 1,
          y: -29,
          delay: 2,
          ease: Power2.easeInOut
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="overlay">
              <p className="alvintures">
                  <Wave 
                  text="Alvintures"
                  effect="verticalFadeIn"
                  effectDirection="down"
                  iterations={1}
                  speed={20}
                  >
                  </Wave>
              </p>
        </div>
        <div className="home">
            <Fade clear duration={20}>
              <h1>CREAT IVES</h1>
            </Fade>
            <div className="center">
              <h1 id="big-logo">
                <Wave 
                text="ALVIN TAN"
                effect="verticalFadeIn"
                effectDirection="down"
                iterations={1}
                speed={10}
                >
                </Wave>
              </h1>
              <div className="home-pic">
                <img src="images/home-pic.jpeg" id="home-pic"/>
              </div>
              <p id="small-logo">
                <Wave 
                text="PHOTOGRAPHY"
                effect="verticalFadeIn"
                effectDirection="down"
                iterations={1}
                speed={20}
                delay={5}
                >
                </Wave>
              </p>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;