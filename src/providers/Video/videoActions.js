import axios from 'axios';
import he from 'he';

export const fetchVideos = (dispatch) => (searchTerm) => {
  const { REACT_APP_YOUTUBE_KEY } = process.env;

  axios
    .create({
      baseURL: `https://www.googleapis.com/youtube/v3`,
      params: {
        part: 'snippet',
        maxResults: 16,
        type: 'video'
      },
    })
    .get(`/search?key=${REACT_APP_YOUTUBE_KEY}`, {
      params: {
        q: searchTerm,
      },
    })
    .then((res) => res.data.items)
    .then((videos) =>
      videos.map((video) => {
        const container = {};
        container.id = video.id.videoId;
        container.title = he.decode(video.snippet.title);
        container.description = he.decode(video.snippet.description);
        container.img = video.snippet.thumbnails.medium.url;
        return container;
      })
    )
    .then((videos) => dispatch(fetchedVideos(videos)));
  return {
    type: 'FETCH_VIDEOS',
  };
};

const fetchedVideos = (videos) => {
  return {
    type: 'FETCHED_VIDEOS',
    videos,
  };
};

export const selectVideo = (dispatch) => (id) => {
  dispatch(setCurrentVideo(id));
  return {
    type: 'SET_VIDEO',
  };
};

const setCurrentVideo = (id) => {
  return {
    type: 'SET_CURRENT_VIDEO',
    id,
  };
};

export const addToFavorites = (dispatch) => (video) => {
  dispatch({
    type: 'ADD_FAVORITE',
    video,
  });
};

export const removeFromFavorites = (dispatch) => (video) => {
  dispatch({
    type: 'REMOVE_FAVORITE',
    video,
  });
};

export const setSearchTerm = (dispatch) => (searchTerm) => {
  dispatch({
    type: 'SET_SEARCH_TERM',
    searchTerm,
  });
};
