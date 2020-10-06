import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { VideoContainer, VideoCard, VideoMedia } from '../VideoGrid/Home.styled';

const VideoItem = ({ id, img, title, description, onClickHandler }) => {
  return (
    <VideoContainer item xs={12} sm={3} onClick={() => onClickHandler(id)}>
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

export default VideoItem;
