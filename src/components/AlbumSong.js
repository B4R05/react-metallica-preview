import React from "react";
import { connect } from "react-redux";
import { clearSongs } from "../actions";

class AlbumSong extends React.Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  componentWillUnmount() {
    this.props.clearSongs([]);
  }

  render() {
    const {
      artworkUrl60,
      artworkUrl30,
      collectionName,
      previewUrl,
      releaseDate,
      trackName,
      trackPrice,
      trackTimeMillis,
      trackViewUrl
    } = this.props.data;

    return (
      <div>
        <p>{trackName}</p>
        <p>{releaseDate}</p>
        <p>${trackPrice}</p>
        <p>{trackTimeMillis}</p>
        <img src={artworkUrl60} />
        <audio controls>
          <source src={previewUrl} />
        </audio>
      </div>
    );
  }
}

export default connect(
  null,
  { clearSongs }
)(AlbumSong);
