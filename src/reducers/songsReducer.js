const songsReducer = (state = [], action) => {
  if (action.type === "ALBUM_SONGS") {
    return action.payload;
  }

  if (action.type === "CLEAR_SONGS") {
    return action.payload;
  }

  return state;
};

export default songsReducer;
