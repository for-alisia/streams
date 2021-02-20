/** Router */
import history from '../history';

/** API */
import streams from '../api/streams';

/** Types */
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from './actions.types';

/** Action Creators */

/** Authentification */
export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

/** Streams Async */
export const createStream = (formValues) => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const { data } = await streams.post('/streams', { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const fetchStreams = () => async (dispatch) => {
  try {
    const { data } = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchStream = (id) => async (dispatch) => {
  try {
    const { data } = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteStream = (id) => async (dispatch) => {
  try {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const editStream = (id, formValues) => async (dispatch) => {
  try {
    const { data } = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};
