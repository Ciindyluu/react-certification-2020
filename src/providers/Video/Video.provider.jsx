import React, { createContext, useReducer } from 'react';
import { videoReducer } from './videoReducer';

export const VideoContext = createContext({
    videos: []
});

const VideoProvider = ({children}) => {
    const [videos, dispatch] = useReducer(videoReducer, []);

    return (
        <VideoContext.Provider value={{ videos, dispatch }}>
          {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;