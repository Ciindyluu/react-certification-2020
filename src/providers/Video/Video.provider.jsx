import React, { createContext, useReducer } from 'react';
import { videoReducer } from './videoReducer';

export const VideoContext = createContext({
    videos: []
});

const VideoProvider = ({children}) => {
    const [videos, dispatch] = useReducer(videoReducer, [
        {
            title: 'This video is awesome', 
            img:'https://cdn-3.expansion.mx/dims4/default/5a989d7/2147483647/strip/true/crop/1117x629+0+0/resize/1600x900!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F08%2Ff27f600d407abcb25addad1a2d11%2Fs109495915.JPG', 
            description: `Well, the way they make shows is, they make one show. That show is called
            a pilot. Then they show that show to the people who make shows, and on the strength of 
            that one show they decide if they are going to make more shows.`
        },
        {
            title: 'This video is awesome', 
            img:'https://cdn-3.expansion.mx/dims4/default/5a989d7/2147483647/strip/true/crop/1117x629+0+0/resize/1600x900!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F08%2Ff27f600d407abcb25addad1a2d11%2Fs109495915.JPG', 
            description: `Well, the way they make shows is, they make one show. That show is called
            a pilot. Then they show that show to the people who make shows, and on the strength of 
            that one show they decide if they are going to make more shows.`
        },
        {
            title: 'This video is awesome', 
            img:'https://cdn-3.expansion.mx/dims4/default/5a989d7/2147483647/strip/true/crop/1117x629+0+0/resize/1600x900!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F08%2Ff27f600d407abcb25addad1a2d11%2Fs109495915.JPG', 
            description: `Well, the way they make shows is, they make one show. That show is called
            a pilot. Then they show that show to the people who make shows, and on the strength of 
            that one show they decide if they are going to make more shows.`
        },
        {
            title: 'This video is awesome', 
            img:'https://cdn-3.expansion.mx/dims4/default/5a989d7/2147483647/strip/true/crop/1117x629+0+0/resize/1600x900!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F08%2Ff27f600d407abcb25addad1a2d11%2Fs109495915.JPG', 
            description: `Well, the way they make shows is, they make one show. That show is called
            a pilot. Then they show that show to the people who make shows, and on the strength of 
            that one show they decide if they are going to make more shows.`
        }
    ]);

    return (
        <VideoContext.Provider value={{ videos, dispatch }}>
          {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;