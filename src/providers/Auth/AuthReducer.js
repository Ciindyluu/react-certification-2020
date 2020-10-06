import { AUTH_STORAGE_KEY } from '../../utils/constants';
export const initialState = {
  loading: false,
  user: null,
  error: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(action.user));
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'LOGOUT':
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return {
        ...initialState,
      };
    default:
      throw new Error(`Invalid action "${action.type}"`);
  }
}
