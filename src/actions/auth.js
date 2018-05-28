import * as types from '../constants/auth';
import callApi from '../utils/call-api';

export function signup(username, password) {
  return dispatch => {
    dispatch({
      type: types.SIGNUP_REQUEST,
    });

    return callApi(
      '/signup',
      undefined,
      { method: 'POST' },
      { username, password },
    )
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        // Save JWT to localStorage
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.SIGNUP_FAILURE,
          payload: reason,
        }),
      );
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_REQUEST,
    });

    return callApi(
      '/login',
      undefined,
      { method: 'POST' },
      { username, password },
    )
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }
        // Save JWT to localStorage
        localStorage.setItem('token', json.token);

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.LOGIN_FAILURE,
          payload: reason,
        }),
      );
  };
}

export function logout() {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_REQUEST,
    });
    return callApi('/logout', undefined)
      .then(json => {
        // Remove JWT from localStorage
        localStorage.removeItem('token');

        dispatch({
          type: types.LOGOUT_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: types.LOGOUT_FAILURE,
          payload: reason,
        }),
      );
  };
}

export function receiveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      });
    }

    return callApi('/users/me', token)
      .then(json =>
        dispatch({
          type: types.RECEIVE_AUTH_SUCCESS,
          payload: json,
        }),
      )
      .catch(reason =>
        dispatch({
          type: types.RECEIVE_AUTH_FAILURE,
          payload: reason,
        }),
      );
  };
}
