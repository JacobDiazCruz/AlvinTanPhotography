import React, { Component } from 'react';
import '../App.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const sportsImg = [
  'images/sports/sports1.jpg',
  'images/sports/sports2.jpg',
  'images/sports/sports3.jpg',
  'images/sports/sports4.jpg',
  'images/sports/sports5.jpg',
  'images/sports/sports6.jpg',
  'images/sports/sports7.jpg',
  'images/sports/sports8.jpg',
  'images/sports/sports9.jpg',
  'images/sports/sports10.jpg'
];

const streetsImg = [
  'images/streets/streets1.jpg',
  'images/streets/streets2.jpg',
  'images/streets/streest3.jpg',
  'images/streets/streets4.jpg',
  'images/streets/streets5.jpg',
  'images/streets/streets6.jpeg',
  'images/streets/streets7.jpeg',
  'images/streets/streets8.jpeg',
  'images/streets/streets9.jpeg',
  'images/streets/streets10.jpeg',
];

const travelImg = [
  'images/travel/travel1.jpeg',
  'images/travel/travel2.jpg',
  'images/travel/travel3.jpg',
  'images/travel/travel4.jpg',
  'images/travel/travel5.jpg',
  'images/travel/travel6.jpeg',
  'images/travel/travel7.jpeg',
  'images/travel/travel8.jpg',
  'images/travel/travel9.jpeg',
  'images/travel/travel10.jpeg',
];

const urbanImg = [
  'images/urban/urban1.jpeg',
  'images/urban/urban2.jpg',
  'images/urban/urban3.jpeg',
  'images/urban/urban4.jpeg',
  'images/urban/urban5.jpeg',
  'images/urban/urban6.jpg',
  'images/urban/urban7.jpeg',
  'images/urban/urban8.jpeg',
  'images/urban/urban9.jpeg',
  'images/urban/urban10.jpeg',
];

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsIndex: 0,
      sportsOpen: false,
      streetsIndex: 0,
      streetsOpen: false,
      travelIndex: 0,
      travelOpen: false,
      urbanIndex: 0,
      urbanOpen: false
    }
  }

  render() {
    const { sportsIndex, sportsOpen } = this.state;
    const { streetsIndex, streetsOpen } = this.state;
    const { travelIndex, travelOpen } = this.state;
    const { urbanIndex, urbanOpen } = this.state;

    return (
      <React.Fragment>
        <div className="works">
          <div className="gallery">
              <img src="images/front/sports-feature.jpg" onClick={() => this.setState({ sportsOpen: true })}/>
              <img src="images/front/streets-front.jpg" onClick={() => this.setState({ streetsOpen: true })}/>
              <img src="images/front/travel-front.jpg" onClick={() => this.setState({ travelOpen: true })}/>
              <img src="images/front/urban-front.jpg" onClick={() => this.setState({ urbanOpen: true })}/>
          </div>
        </div>

        {sportsOpen && (
          <Lightbox
            mainSrc={sportsImg[sportsIndex]}
            nextSrc={sportsImg[(sportsIndex + 1) % sportsImg.length]}
            prevSrc={sportsImg[(sportsIndex + sportsImg.length - 1) % sportsImg.length]}
            onCloseRequest={() => this.setState({ sportsOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                sportsIndex: (sportsIndex + sportsImg.length - 1) % sportsImg.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                sportsIndex: (sportsIndex + 1) % sportsImg.length
              })
            }
          />
        )}

        {streetsOpen && (
          <Lightbox
            mainSrc={streetsImg[streetsIndex]}
            nextSrc={streetsImg[(streetsIndex + 1) % streetsImg.length]}
            prevSrc={streetsImg[(streetsIndex + streetsImg.length - 1) % streetsImg.length]}
            onCloseRequest={() => this.setState({ streetsOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                streetsIndex: (streetsIndex + streetsImg.length - 1) % streetsImg.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                streetsIndex: (streetsIndex + 1) % streetsImg.length
              })
            }
          />
        )}

        {travelOpen && (
          <Lightbox
            mainSrc={travelImg[travelIndex]}
            nextSrc={travelImg[(travelIndex + 1) % travelImg.length]}
            prevSrc={travelImg[(travelIndex + travelImg.length - 1) % travelImg.length]}
            onCloseRequest={() => this.setState({ travelOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                travelIndex: (travelIndex + travelImg.length - 1) % travelImg.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                travelIndex: (travelIndex + 1) % travelImg.length
              })
            }
          />
        )}

        {urbanOpen && (
          <Lightbox
            mainSrc={urbanImg[urbanIndex]}
            nextSrc={urbanImg[(urbanIndex + 1) % urbanImg.length]}
            prevSrc={urbanImg[(urbanIndex + urbanImg.length - 1) % urbanImg.length]}
            onCloseRequest={() => this.setState({ urbanOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                urbanIndex: (urbanIndex + urbanImg.length - 1) % urbanImg.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                urbanIndex: (urbanIndex + 1) % urbanImg.length
              })
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default Works;