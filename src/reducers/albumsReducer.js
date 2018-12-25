const albumsReducer = (state = [], action) => {
  if (action.type === "ALL_ALBUMS") {
    return action.payload;
  }

  return state;
};

export default albumsReducer;
