import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import TopNavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../providers/Auth';
import useVideo, { VideoProvider } from '../../providers/Video/Video.provider';
import {
  MainContainer,
  DivListContainer,
  DivListRow,
  MainVideo,
  MainVideoDiv,
  VideoMedia,
  MainVideoTitle,
  MainVideoDescription
} from './VideoPlayer.styled';

const VideoPlayerPage = () => {
  const { authenticated } = useAuth();
  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} />
      <VideoProvider>
        <MainContainer>
          <VideoPlayerContainer />
          <VideoListContainer />
        </MainContainer>
      </VideoProvider>
    </>
  );
};

const VideoPlayerContainer = () => {
  const { currentVideo } = useVideo();
  return (
    <MainVideoDiv>
      <VideoPlayer {...currentVideo}/>
    </MainVideoDiv>
  );
};

const VideoPlayer = ({id,title,description}) => {
  return (
    <>
      <MainVideo>
      <iframe title="video" width="100%" height="500px" src={`https://www.youtube.com/embed/${id}`} />
      </MainVideo>
  <MainVideoTitle>{title}</MainVideoTitle>
  <MainVideoDescription>{description}</MainVideoDescription>
    </>
  );
};

const VideoListContainer = () => {
  const { videos,setCurrentVideo } = useVideo();
  const {push}=useHistory()
  const onClickHandler=(id)=>{
    setCurrentVideo(id);
    push('/video/'+id);
  }
  
  return (
    <DivListContainer>
      {videos.map((video, index) => (
        <VideoRow key={video.id} {...video} onClickHandler={onClickHandler} />
      ))}
    </DivListContainer>
  );
};

const VideoRow = ({ id,img, title,onClickHandler }) => {
  return (
    <DivListRow onClick={()=>onClickHandler(id)}>
      <VideoMedia image={img} />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
      </CardContent>
    </DivListRow>
  );
};

export default VideoPlayerPage;
