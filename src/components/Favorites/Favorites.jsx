import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Favorites = () => {
  const favoriteVideos = [];

  if (favoriteVideos.length === 0) {
    return (
      <Alert severity="error" style={{ margin: 30 }}>
        Here goes the favorites videos
      </Alert>
    );
  }
};

export default Favorites;
