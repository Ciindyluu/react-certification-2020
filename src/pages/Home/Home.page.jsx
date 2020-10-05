import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
//import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import useVideo, { VideoProvider } from '../../providers/Video/Video.provider';
import { useHistory } from 'react-router-dom';

import {
  VideoContainer,
  VideosGridContainer,
  VideoCard,
  VideoMedia,
} from './Home.styled';

const HomePage = () => {
  const { authenticated,logout } = useAuth();
  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} logout={logout}/>
      <VideoProvider>
        <VideoGrid />
      </VideoProvider>
    </>
  );
};

const VIDEO = ({id ,img, title, description,onClickHandler }) => {
  return (
    <VideoContainer item xs={12} sm={3} onClick={()=>onClickHandler(id)}>
      <VideoCard>
        <VideoMedia image={img} title={title} />
        <CardContent>
          <Typography variant="h6" component="h1">
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
  const { videos, setCurrentVideo, fetch } = useVideo();
  const [isSearching, setIsSearching] = useState(false);
  const {push}=useHistory()

  const searchVideos = () => {
    fetch();
  };

  const onClickHandler=(id)=>{
    setCurrentVideo(id);
    push('/video/'+id)
  }

  useEffect(() => {
    if (!isSearching) {
      searchVideos();
      setIsSearching(true);
    }
  }, []);

  return (
    <VideosGridContainer
      container
      direction="row"
      alignItems="center"
      justify="space-around"
    >
      <Grid container spacing={3}>
      {videos.map((video, index) => (
    <VIDEO key={video.id} {...video} onClickHandler={onClickHandler} />
  ))}
      </Grid>
    </VideosGridContainer>
  );
};

export default HomePage;
