/** Libraries */
import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

/** Reducers */
import { authReducer } from './auth.reducer';

const reducers = combineReducers({
  auth: authReducer,
  form: reducer,
});

export default reducers;
