const songsReducer = (state = [], action) => {
  switch (action.type) {
    case "ALBUM_SONGS":
      return action.payload;

    case "CLEAR_SONGS":
      return action.payload;

    default:
      return state;
  }
};

export default songsReducer;
