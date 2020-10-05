import styled from '@emotion/styled';
import { Card, CardMedia, Typography } from '@material-ui/core';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DivListContainer = styled.div`
  width: 25%;
  height: 100%;
  overflow: scroll;
  padding: 0 1%;
`;

export const DivListRow = styled(Card)`
  widht: 100%;
  height: 100px;
  position: relative;
  display: flex;
  alignitems: center;
  margin-top: 5px;
  margin-bottom: 5px;
  & :hover {
    cursor: pointer;
  }
`;

export const VideoMedia = styled(CardMedia)`
  width: 144px;
  height: 108px;
`;

export const MainVideoDiv = styled.div`
  width: 75%;
  height: 750px;
  padding: 1%;
`;

export const MainVideo = styled.div`
  width: 100%;
  height: 600px;
`;

export const MainVideoDescription = styled(Typography)`
  padding: 0px 30px;
  box-sizing: border-box;
`;

export const MainVideoDetails = styled.div`
  padding: 10px 30px;
  boxsizing: border-box;
  display: flex;
  justify-content: space-between;
`;
