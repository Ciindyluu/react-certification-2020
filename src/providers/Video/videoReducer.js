
export const initialState = {
  videos: [],
  currentVideo: null,
  searchTerm: 'wizeline',
};

export const videoStorageKey='CURRENT-VIDEO-STORAGE';
export const videoListStorageKey='VIDEOLIST-STORAGE';

export const videoReducer = (state = { videos: [], currentVideo: {} }, action) => {
  console.log('reducer>',action.type)
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return state;
    case 'FETCHED_VIDEOS':
      localStorage.setItem(videoListStorageKey,JSON.stringify(action.videos));
      return { ...state, videos: action.videos };
      case 'SET_CURRENT_VIDEO':
        const hola=state.videos.find((video) => video.id === action.id);
        console.log('setting current video',hola)
        localStorage.setItem(videoStorageKey,JSON.stringify(hola))
        return {
          ...state,
          currentVideo: hola
        };
    default:
      return state;
  }
};
