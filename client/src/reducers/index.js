/** Libraries */
import { combineReducers } from 'redux';

/** Reducers */
import { authReducer } from './auth.reducer';

const reducers = combineReducers({ auth: authReducer });

export default reducers;
