import React from "react";
import { connect } from "react-redux";
import { getAlbumSongs } from "../actions";
import AlbumSong from "./AlbumSong";

class AlbumSongs extends React.Component {
  componentDidMount() {
    this.props.getAlbumSongs(this.props.match.params.id);
    console.log(this.props);
  }

  renderAlbumSongs = () => {
    return this.props.songs.map((song, key) => {
      return <AlbumSong data={song} key={key} />;
    });
  };

  render() {
    return <div>{this.renderAlbumSongs()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  { getAlbumSongs }
)(AlbumSongs);
