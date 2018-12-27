const songsReducer = (state = [], action) => {
  switch (action.type) {
    case "ALBUM_SONGS":
      const filtered_songs = action.payload.results.filter(song => {
        return song.kind === "song";
      });

      return filtered_songs;

    case "CLEAR_SONGS":
      return action.payload;

    default:
      return state;
  }
};

export default songsReducer;
