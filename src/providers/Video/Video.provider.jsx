import React, { createContext, useReducer, useEffect } from 'react';
import {
  videoReducer,
  initialState,
  videoListStorageKey,
  videoStorageKey,
  favoriteVideoListStorageKey,
} from './videoReducer';
import {
  selectVideo,
  fetchVideos,
  addToFavorites,
  removeFromFavorites,
  setSearchTerm
} from './videoActions';

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    ...initialState,
    currentVideo: localStorage.getItem(videoStorageKey)
      ? JSON.parse(localStorage.getItem(videoStorageKey))
      : null,
    videos: localStorage.getItem(videoListStorageKey)
      ? JSON.parse(localStorage.getItem(videoListStorageKey))
      : [],
    favoriteVideos: localStorage.getItem(favoriteVideoListStorageKey)
      ? JSON.parse(localStorage.getItem(favoriteVideoListStorageKey))
      : [],
  });

  const isInFavorites = (video) => {
    return state.favoriteVideos.find((fav) => fav.id === video.id);
  };

  const value = {
    ...state,
    isInFavorites,
    fetch: fetchVideos(dispatch),
    setCurrentVideo: selectVideo(dispatch),
    addToFavorites: addToFavorites(dispatch),
    removeFromFavorites: removeFromFavorites(dispatch),
    setSearchTerm: setSearchTerm(dispatch),
  };

  useEffect(() => {
    fetchVideos(dispatch)(state.searchTerm);
  }, [state.searchTerm]);

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

function useVideo() {
  return React.useContext(VideoContext);
}

export default useVideo;
