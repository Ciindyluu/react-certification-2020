import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
//import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import VideoProvider, {VideoContext} from '../../providers/Video/Video.provider';
import { fetchVideos } from '../../providers/Video/videoActions';

import {
  VideoContainer,
  VideosGridContainer,
  VideoCard,
  VideoMedia,
} from './Home.styled';
import { IsoSharp } from '@material-ui/icons';

const HomePage = () => {
  const { authenticated } = useAuth();
  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} />
      <VideoProvider>
        <VideoGrid />
      </VideoProvider>
    </>
  );
};

const VIDEO = ({img, title, description}) => {
  return (
    <VideoContainer item xs={12} sm={3} >
          <VideoCard>
            <VideoMedia
              image={img}
              title={title}
            />
            <CardContent>
              <Typography  variant="h6"component="h1">
                {title}
              </Typography>
              <Typography color="textSecondary" variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
          </VideoCard>
        </VideoContainer>
  );
};

const VideoGrid = () => {
  const { dispatch, videos } = useContext(VideoContext);
  const [isSearching,setIsSearching]=useState(false)

  const searchVideos = () =>{
    dispatch(fetchVideos(dispatch));
  }

  useEffect(() => {
    if(!isSearching){
      searchVideos();
      setIsSearching(true)
    }
  }, [isSearching, searchVideos])

  return (
      <VideosGridContainer
      container
      direction="row"
      alignItems="center"
      justify="space-around"
      >
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <VIDEO key={index} {...video} />
        ))}
      </Grid>
      </VideosGridContainer>
  );
};

export default HomePage;
