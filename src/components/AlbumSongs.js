import React from "react";
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { getAlbumSongs } from "../actions";
import AlbumSong from "./AlbumSong";
import Menu from "./Menu";

class AlbumSongs extends React.Component {
  state = { loading: null };

  componentDidMount() {
    this.props.getAlbumSongs(this.props.match.params.id);

    if (this.props.songs.length === 0) {
      this.setState({ loading: true });
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.songs.length !== 0) {
      return { loading: false };
    }

    return state;
  }

  renderAlbumSongs = () => {
    if (this.state.loading) {
      return (
        <ScaleLoader
          className="loader"
          sizeUnit={"px"}
          size={150}
          color={"black"}
        />
      );
    }

    return this.props.songs.map(song => {
      return <AlbumSong data={song} key={song.trackId} />;
    });
  };

  render() {
    return (
      <div className="ui container">
        <Menu />
        {this.renderAlbumSongs()}
      </div>
    );
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
