import React from "react";
import { connect } from "react-redux";
import { clearSongs } from "../actions";
import "../styles/AlbumSong.css";
import AudioPlayer from "react-modular-audio-player";

class AlbumSong extends React.Component {
  componentWillUnmount() {
    this.props.clearSongs([]);
  }

  render() {
    const {
      artworkUrl60,
      collectionName,
      previewUrl,
      releaseDate,
      trackName
    } = this.props.data;

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
              borderRadius: "3px"
            }
          }
        ]
      }
    ];

    return (
      <div className="ui list">
        <div className="item fade">
          <div className="ui image">
            <AudioPlayer
              audioFiles={[{ src: previewUrl }]}
              rearrange={rearrangedPlayer}
              playerWidth="4.2rem"
              iconSize="4.2rem"
            />
          </div>

          <div className="ui content ">
            <p className=" header ">{trackName}</p>
            <div className="description">{collectionName}</div>
            <div className="description">{releaseDate.substring(0, 4)}</div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default connect(
  null,
  { clearSongs }
)(AlbumSong);
