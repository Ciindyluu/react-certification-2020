import loginApi from './loginApi';

export const loginAction = (dispatch) => async (username, password) => {
  dispatch({ type: 'LOGIN' });

  try {
    const user = await loginApi(username, password);

    dispatch({
      type: 'LOGIN_SUCCESS',
      user
    });
    return user;
  } catch (error) {
    dispatch({
      type: 'LOGIN_ERROR',
      error: error.message
    });
    return null;
  }
};

export const logoutAction = (dispatch) => () => {
  dispatch({ type: 'LOGOUT' });
};