import { combineReducers } from 'redux';
import authReducer from './auth';
import reportingReducer from './reporting';
import snackbarReducer from './snackbar.js';

const rootReducer = combineReducers({
  auth: authReducer,
  reporting: reportingReducer,
  snackbar: snackbarReducer
});

export default rootReducer;