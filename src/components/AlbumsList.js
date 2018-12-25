import React from "react";
import { connect } from "react-redux";
import { getAllAlbums } from "../actions";
import Album from "./Album";
import "../styles/AlbumsList.css";

class AlbumsList extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.props.getAllAlbums();
  }

  renderAlbums = () => {
    return this.props.albums.map((album, key) => {
      return <Album info={album} key={key} />;
    });
  };

  render() {
    return (
      <div className="ui container seven stackable cards albumslist-intro ">
        {this.renderAlbums()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { getAllAlbums }
)(AlbumsList);
