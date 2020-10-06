import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import TopNavBar from '../../components/NavBar/NavBar';
import IconButton from '@material-ui/core/IconButton';
import { Favorite } from '@material-ui/icons';
import { useAuth } from '../../providers/Auth';
import useVideo from '../../providers/Video/Video.provider';
import {
  MainContainer,
  DivListContainer,
  DivListRow,
  MainVideo,
  MainVideoDiv,
  VideoMedia,
  MainVideoDescription,
  MainVideoDetails,
} from './VideoPlayer.styled';

const VideoPlayerPage = () => {
  const { authenticated } = useAuth();
  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} />
      <MainContainer>
        <VideoPlayerContainer />
        <VideoListContainer />
      </MainContainer>
    </>
  );
};

const VideoPlayerContainer = () => {
  const { currentVideo, isInFavorites, addToFavorites, removeFromFavorites } = useVideo();
  const favoriteHandler = (video) => {
    if (isInFavorites(video)) {
      removeFromFavorites(video);
    } else {
      addToFavorites(video);
    }
  };

  return (
    <MainVideoDiv>
      <VideoPlayer
        {...currentVideo}
        video={currentVideo}
        inFavorites={isInFavorites}
        favoriteHandler={favoriteHandler}
      />
    </MainVideoDiv>
  );
};

const VideoPlayer = ({ video, id, title, description, inFavorites, favoriteHandler }) => {
  return (
    <>
      <MainVideo>
        <iframe
          title="video"
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${id}`}
        />
      </MainVideo>
      <MainVideoDetails inputprops= {{'data-testid': 'favorite'}}>
        <Typography variant="h6">{title}</Typography>
        <IconButton color="inherit" onClick={() => favoriteHandler(video)} >
          <Typography variant="subtitle1">
            {inFavorites(video) ? 'Remove from Favorites' : 'Add to Favorites'}
          </Typography>
          <Favorite />
        </IconButton>
      </MainVideoDetails>
      <MainVideoDescription>{description}</MainVideoDescription>
    </>
  );
};

const VideoListContainer = () => {
  const { videos, setCurrentVideo } = useVideo();
  const { push } = useHistory();
  const onClickHandler = (id) => {
    setCurrentVideo(id);
    push('/video/' + id);
  };

  return (
    <DivListContainer>
      {videos.map((video, index) => (
        <VideoRow key={video.id} {...video} onClickHandler={onClickHandler} />
      ))}
    </DivListContainer>
  );
};

const VideoRow = ({ id, img, title, onClickHandler }) => {
  return (
    <DivListRow onClick={() => onClickHandler(id)}>
      <VideoMedia image={img} />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
      </CardContent>
    </DivListRow>
  );
};

export default VideoPlayerPage;
