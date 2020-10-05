import { CssBaseline } from '@material-ui/core';
import React from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import useVideo from '../../providers/Video/Video.provider';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {VideosGridContainer} from '../../components/Video/VideoGrid/Home.styled';
import VideoItem from '../../components/Video/VideoGrid/VideoItem';

const FavoritesPage = () => {
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
  const { favoriteVideos, setCurrentVideo } = useVideo();
  const { push } = useHistory();

  const onClickHandler = (id) => {
    setCurrentVideo(id);
    push('/video/' + id);
  };

  if (favoriteVideos.length === 0) {
    return (
      <Alert severity="error" style={{ margin: 50 }}>
        Here goes your favorites videos!
      </Alert>
    );
  };

  return (
    <VideosGridContainer
      container
      direction="row"
      alignItems="center"
      justify="space-around"
    >
      <Grid container spacing={3}>
        {favoriteVideos.map((video) => (
          <VideoItem key={video.id} {...video} onClickHandler={onClickHandler} />
        ))}
      </Grid>
    </VideosGridContainer>
  );
};

export default FavoritesPage;
