import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
//import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import {
  VideoContainer,
  VideosGridContainer,
  VideoCard,
  VideoMedia,
} from './Home.styled';
//import { VideoCardContainer } from '../../components/Video/VideoCard/index';

const HomePage = () => {
  const { authenticated } = useAuth();

  return (
    <>
      <CssBaseline />
      <TopNavBar authenticated={authenticated} />
      <VideoGrid />
    </>
  );
};

const VideoGrid = () => {
  return (
    <VideosGridContainer
      container
      direction="row"
      alignItems="center"
      justify="space-around"
    >
      <Grid container spacing={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
          <VideoContainer key={value} item xs={12} sm={3} >
          <VideoCard>
            <VideoMedia
              image="https://cdn-3.expansion.mx/dims4/default/5a989d7/2147483647/strip/true/crop/1117x629+0+0/resize/1600x900!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F08%2Ff27f600d407abcb25addad1a2d11%2Fs109495915.JPG"
              title="Video"
            />
            <CardContent>
              <Typography  variant="h6"component="h1">
                This video is awesome
              </Typography>
              <Typography color="textSecondary" variant="h7" component="p">
                Well, the way they make shows is, they make one show. That show's called
                a pilot. Then they show that show to the people who make shows, and on
                the strength of that one show they decide if they're going to make more
                shows.
              </Typography>
            </CardContent>
          </VideoCard>
        </VideoContainer>
        ))}
      </Grid>
    </VideosGridContainer>
  );
};

export default HomePage;
