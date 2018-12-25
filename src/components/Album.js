import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Album.css";

class Album extends React.Component {
  navigate = id => {
    this.props.history.push(`/albums/${id}`);
  };

  render() {
    return (
      <div
        className="album--resize ui card "
        onClick={() => {
          this.navigate(this.props.info.collectionId);
        }}
      >
        <div className="image ">
          <img src={this.props.info.artworkUrl100} alt="album cover" />
          <div className="hidden" style={{ borderRadius: 3 }}>
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

// <div className="content">
//   <a className="meta" href="#">
//     {this.props.info.collectionName}
//   </a>
//   <div className="meta">
//     <a>{this.props.info.releaseDate}</a>
//   </div>
//   <div className="meta">
//     <a>{this.props.info.trackCount}</a>
//   </div>
//   <div className="meta">
//     <a>{this.props.info.collectionPrice}</a>
//   </div>
// </div>

export default withRouter(Album);
