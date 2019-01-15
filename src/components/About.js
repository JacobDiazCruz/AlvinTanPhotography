import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';
import Award from './Award';
import { Wave, Random } from 'react-animated-text';
import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';

class About extends Component {

  render() {
    return (
      <React.Fragment>
      <div className="about">
      	<div className="column column-extra">
      	</div>
	      	<div className="column column-one">
	      		<div className="about-p-box">
		        	<img src="images/main-pic.jpg" id="about-pic"/>
				</div>
			</div>
			<div className="column column-two">
				<div className="about-p-box">
		        	<p className="about-p">
			          	I am John Alvin Tan, a Mechanical Engineering student of Adamson University and a Junior 
			          	Photojournalist of Adamson Chronicle, the official student publication of Adamson University.
						My love for photography only started as a hobby. Taking pictures around the streets of Manila and 
						when I'm travelling to some places in the Philippines. Eventually, someone hired me and believed in my skills.
						I never thought that I can make a living out of it.
						<br/>
						<br/>
						I specialize in Sports, Urban, Events and Street Photography.
						<br/>
						<br/>
						<br/>
						johnalvintanphotography@gmail.com
						<br/>
						<br/>
						<a href="https://www.facebook.com/tan.johnalvin321" target="_blank" rel="noopener noreferrer">
							<i class="fab fa-facebook-f" id="fb-logo"></i>
						</a>
						<a href="https://www.instagram.com/alvintancreatives/" target="_blank" rel="noopener noreferrer">
							<i class="fab fa-instagram"></i>
						</a>
					</p>
				</div>
			</div>
			<div className="column column-three">
			</div>
	      </div>
      <Award/>
      </React.Fragment>
    );
  }
}
export default About;