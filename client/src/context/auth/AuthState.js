import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';

import setAuthToken from '../../utilts/setAuthToken';

import {


  CLEAR_ERRORS,
  LOGIN_FAIL,

  LOGIN_SUCSESS,
  LOGOUT,

} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    users: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //dispatch({ type: UPDATE_QUESTION, payload: question });

  //Load User
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  //Login User
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCSESS,
        payload: res.data,
      });
      state.token = localStorage.getItem('token');

    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        ///shaly el data
        payload: err.response.data.msg,
      });
    }
  };

  //LogOut
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
    localStorage.getItem('token');
  }

  //Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };


  return (
    <AuthContext.Provider
      value={{
        token: localStorage.getItem('token'),
        isAuthenticated: state.isAuthenticated,

        loading: state.loading,
        error: state.error,

        login,
        logout,
        clearErrors,

      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
