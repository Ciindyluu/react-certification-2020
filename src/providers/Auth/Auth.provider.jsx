import React, { useEffect, useContext, useReducer } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { loginAction,logoutAction } from './AuthActions';
import { authReducer,initialState } from './AuthReducer';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {...initialState,
    user: localStorage.getItem(AUTH_STORAGE_KEY) ? JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) : null,
  });

  const value={
    ...state,
    login:loginAction(dispatch),
    logout:logoutAction(dispatch),
    authenticated:Boolean(state.user)
  }

  useEffect(() => {
    if (state.user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state.user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
