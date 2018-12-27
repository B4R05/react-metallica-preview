import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "../styles/Album.css";

class Album extends React.Component {
  state = { active: false };

  componentDidMount() {
    this.setState({ active: false });
  }

  navigate = id => {
    this.setState({ active: true }, () => {
      setTimeout(() => {
        this.props.history.push(`/albums/${id}`);
      }, 200);
    });
  };

  render() {
    return (
      <div
        className={`album-card ui card ${this.state.active && "album-active"}`}
        onClick={() => {
          this.navigate(this.props.info.collectionId);
        }}
      >
        <div className="image">
          <img src={this.props.info.artworkUrl100} alt="album cover" />
          <div className="hidden">
            <br />
            <small>
              <strong> {this.props.info.collectionName}</strong>
            </small>
            <br />
            <small>{this.props.info.releaseDate.substring(0, 4)}</small>
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  info: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  }),
  history: PropTypes.object.isRequired
};

export default withRouter(Album);
