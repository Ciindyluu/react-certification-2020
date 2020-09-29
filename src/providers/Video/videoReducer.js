export const videoReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_VIDEOS':
            return state;

        case 'FETCHED_VIDEOS': 
            return [...state, ...action.videos]        
        default:
            return state;
    }
};
