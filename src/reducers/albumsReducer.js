const albumsReducer = (state = [], action) => {
  if (action.type === "ALL_ALBUMS") {
    const filtered_albums = action.payload.results.filter(album => {
      return album.wrapperType === "collection";
    });

    return filtered_albums;
  }

  return state;
};

export default albumsReducer;
