
export const initialState = {
  videos: [],
  favoriteVideos:[],
  currentVideo: null,
  searchTerm: 'wizeline',
};

export const videoStorageKey='CURRENT-VIDEO-STORAGE';
export const videoListStorageKey='VIDEOLIST-STORAGE';
export const favoriteVideoListStorageKey='FAVORITE-VIDEOLIST-STORAGE';

export const videoReducer = (state = { videos: [], currentVideo: {} }, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return state;
    case 'FETCHED_VIDEOS':
      localStorage.setItem(videoListStorageKey,JSON.stringify(action.videos));
      return { ...state, videos: action.videos };
      case 'SET_CURRENT_VIDEO':
        const currentVideo=state.videos.find((video) => video.id === action.id);
        localStorage.setItem(videoStorageKey,JSON.stringify(currentVideo))
        return {
          ...state,
          currentVideo: currentVideo
        };
        case 'ADD_FAVORITE':
          const newFavorites=[...state.favoriteVideos,action.video];
          localStorage.setItem(favoriteVideoListStorageKey,JSON.stringify(newFavorites));
          return{
            ...state,
            favoriteVideos:newFavorites
          }
          case 'REMOVE_FAVORITE':
            const filteredFavorites=state.favoriteVideos.filter(fav=>fav.id!==action.video.id);
            localStorage.setItem(favoriteVideoListStorageKey,JSON.stringify(filteredFavorites));
            return{
              ...state,
              favoriteVideos:filteredFavorites
            }
            case 'SET_SEARCH_TERM':
              return{
                ...state,
                searchTerm:action.searchTerm
              }

    default:
      return state;
  }
};
