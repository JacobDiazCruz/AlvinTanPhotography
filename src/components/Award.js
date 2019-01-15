import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import TextLoop from "react-text-loop";
import { Fade, Rotate  } from 'react-reveal';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { Scrollbars } from 'react-custom-scrollbars';
import Works from './Works';

class Award extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="award">
          <h1>&nbsp;AWARDS DAMSON</h1>
          <div className="best-photo-box">
            <img src="images/best-photo.png" id="best-photo"/>
          </div>
          <div className="best-p-box">
            <p>This photo was chosen by The Adamson Chronicle as the best photo for November issue of the publication.</p>
          </div>
        </div>
        <Works/>
      </React.Fragment>
    );
  }
}

export default Award;