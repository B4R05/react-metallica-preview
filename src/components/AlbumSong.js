import React from "react";
import PropTypes from "prop-types";
import EQ from "./EQ";
import "../styles/AlbumSong.css";
import AudioPlayer from "react-modular-audio-player";

class AlbumSong extends React.Component {
  state = {
    showEQ: false
  };

  toggleEQ = () => {
    if (this.state.showEQ === true) {
      this.setState({ showEQ: false });
    } else {
      this.setState({ showEQ: true });
      this.timeOut();
    }
  };

  timeOut = () => {
    setTimeout(() => {
      this.setState({ showEQ: false });
    }, 30000);
  };

  render() {
    const {
      artworkUrl60,
      collectionName,
      previewUrl,
      releaseDate,
      trackName
    } = this.props.data;

    const { showEQ } = this.state;

    const rearrangedPlayer = [
      {
        className: "metallica",
        innerComponents: [
          {
            type: "play",
            style: {
              width: "100%",
              justifyContent: "center",
              filter: "invert(10%)",
              background: `url(${artworkUrl60})`,
              borderRadius: "0.28rem"
            }
          }
        ]
      }
    ];

    return (
      <div className="ui list">
        <div className="item fade">
          <div className="ui image" onClick={this.toggleEQ}>
            <AudioPlayer
              audioFiles={[{ src: previewUrl }]}
              rearrange={rearrangedPlayer}
              playerWidth="4.2rem"
              iconSize="4.2rem"
            />
          </div>

          <div className="ui content ">
            <p className="header">{trackName}</p>
            <div className="description">{collectionName}</div>
            <div className="description">{releaseDate.substring(0, 4)}</div>
            {showEQ && <EQ />}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

AlbumSong.propTypes = {
  data: PropTypes.object.isRequired
};

export default AlbumSong;
