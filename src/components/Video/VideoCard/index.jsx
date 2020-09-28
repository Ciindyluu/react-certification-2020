import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { VideoContainer, VideoCard, VideoMedia } from './Card.styled';

export default function VideoCardContainer() {
  return (
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
  );
};
