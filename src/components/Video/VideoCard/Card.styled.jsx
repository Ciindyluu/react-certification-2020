import styled from 'styled-components';
import { Grid, Card, CardMedia } from '@material-ui/core';

export const VideoContainer = styled(Grid)`
  padding: 2%;
`;

export const VideoCard = styled(Card)`
  height: 380px;
  width: 400px;
  &:hover {
    border: 3px solid #66B3B8;
    color: #66B3B8;
  }
`;

export const VideoMedia = styled(CardMedia)`
  height: 200px;
`;
