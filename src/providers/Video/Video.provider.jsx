import React, { createContext, useReducer, useEffect } from 'react';
import { videoReducer,initialState,videoListStorageKey,videoStorageKey } from './videoReducer';
import { selectVideo,fetchVideos } from './videoActions';

export const VideoContext = createContext(null);


export const VideoProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducer,{
      ...initialState,
      currentVideo:localStorage.getItem(videoStorageKey)?JSON.parse(localStorage.getItem(videoStorageKey)):null,
      videos:localStorage.getItem(videoListStorageKey)?JSON.parse(localStorage.getItem(videoListStorageKey)):[]
    });

    const value={
      ...state,
      fetch:fetchVideos(dispatch),
      setCurrentVideo:selectVideo(dispatch)
    }

    return (
        <VideoContext.Provider value={value}>
          {children}
        </VideoContext.Provider>
    );
};

function useVideo() {
    return React.useContext(VideoContext);
  }

export default useVideo;