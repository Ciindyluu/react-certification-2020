import { CardContent, CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TopNavBar from '../../components/NavBar/NavBar';
import { useAuth } from '../../providers/Auth';
import Grid from '@material-ui/core/Grid';
import useVideo, { VideoProvider } from '../../providers/Video/Video.provider';
import { useHistory } from 'react-router-dom';

import {
  VideoContainer,
  VideosGridContainer,
  VideoCard,
  VideoMedia,
} from '../../components/Home';

const FavoritesPage = () => {
    const { authenticated,logout } = useAuth();
    return (
      <>
        <CssBaseline />
        <TopNavBar authenticated={authenticated} logout={logout}/>
        <VideoProvider>
          <VideoGrid />
        </VideoProvider>
      </>
    );
  };