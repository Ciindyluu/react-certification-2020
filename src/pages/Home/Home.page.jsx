import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import useVideo from '../../providers/Video/Video.provider';
import { useHistory } from 'react-router-dom';

import { VideosGridContainer } from '../../components/Video/VideoGrid/Home.styled';
import VideoItem from '../../components/Video/VideoGrid/VideoItem';

const HomePage = () => {
  const { authenticated, logout } = useAuth();
  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} logout={logout} />
      <VideoGrid />
    </>
  );
};

const VideoGrid = () => {
  const { videos, searchTerm, setCurrentVideo, fetch } = useVideo();
  const [isSearching, setIsSearching] = useState(false);
  const { push } = useHistory();

  const searchVideos = () => {
    fetch(searchTerm);
  };

  const onClickHandler = (id) => {
    setCurrentVideo(id);
    push('/video/' + id);
  };

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
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} onClickHandler={onClickHandler} />
        ))}
      </Grid>
    </VideosGridContainer>
  );
};

export default HomePage;
