import * as iTunesHelper from "itunes-helper";

export const getAllAlbums = () => async dispatch => {
  try {
    const response = await iTunesHelper.lookup({
      id: "3996865",
      entity: "album",
      limit: 40
    });

    dispatch({
      type: "ALL_ALBUMS",
      payload: response
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

    dispatch({
      type: "ALBUM_SONGS",
      payload: response
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
