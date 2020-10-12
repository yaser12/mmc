import * as types from './types';


export const checkLicenseCodeFail = error => {
  return {
    type: types.CHECK_LICENSE_CODE_FAILURE, // used from saga to trigger reducer
    error: error
  };
};

export const authUser = (authData) => ({
  type: types.AUTH_USER,   // used for triggering authUserSaga 
  data: authData
});

export const authCheck = () => ({
  type: types.AUTH_CHECK  // used for triggering checkAuthSaga
});

export const authSuccess = (userId, email) => ({
  type: types.AUTH_SUCCESS,  // used from saga to trigger reducer 
  data: {
    email: email,
    userId: userId
  }
});

export const authFail = error => {
  return {
    type: types.AUTH_FAILURE,  // used from saga to trigger reducer 
    error: error
  };
};

export const initLogout = (history) => {
  return {
    type: types.INIT_LOGOUT,  // used for triggering logoutUserSaga
    history: history
  }
}

export const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS // used from Saga to trigger reducer
  }
}

export const logoutFailure = () => {
  return {
    type: types.LOGOUT_FAILURE // used from Saga to trigger reducer(currently no reducer equavalente for it)
  }
}