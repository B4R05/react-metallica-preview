import * as iTunesHelper from "itunes-helper";

export const getAllAlbums = () => async dispatch => {
  try {
    const response = await iTunesHelper.lookup({
      id: "3996865",
      entity: "album",
      limit: 40
    });

    const filtered_albums = response.results.filter(album => {
      return album.wrapperType === "collection";
    });

    dispatch({
      type: "ALL_ALBUMS",
      payload: filtered_albums
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAlbumSongs = albumId => async dispatch => {
  try {
    const response = await iTunesHelper.lookup({
      id: albumId,
      entity: "song",
      limit: 20
    });

    const filtered_songs = response.results.filter(song => {
      return song.kind === "song";
    });

    dispatch({
      type: "ALBUM_SONGS",
      payload: filtered_songs
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearSongs = payload => {
  return {
    type: "CLEAR_SONGS",
    payload: payload
  };
};
