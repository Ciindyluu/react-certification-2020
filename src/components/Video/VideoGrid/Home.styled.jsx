import styled from '@emotion/styled';
import { Grid, Card, CardMedia } from '@material-ui/core';

export const VideosGridContainer = styled(Grid)`
  padding: 2%;
  width: 100%;
`;

export const VideoContainer = styled(Grid)`
  padding: 2%;
`;

export const VideoCard = styled(Card)`
  height: 380px;
  width: 400px;
  &:hover {
    border: 3px solid #66b3b8;
    color: #66b3b8;
  }
`;

export const VideoMedia = styled(CardMedia)`
  height: 200px;
`;
