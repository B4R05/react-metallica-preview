import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import songsReducer from "./songsReducer";

export default combineReducers({
  songs: songsReducer,
  albums: albumsReducer
});
