/** Libraries */
import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

/** Reducers */
import { authReducer } from './auth.reducer';
import { streamReducer } from './stream.reducer';

const reducers = combineReducers({
  auth: authReducer,
  form: reducer,
  streams: streamReducer,
});

export default reducers;
