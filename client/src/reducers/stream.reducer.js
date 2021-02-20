/** Libraries */
import _ from 'lodash';

/** Actions */
import {
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
} from '../actions/actions.types';

export const streamReducer = (streamState = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return { ...streamState, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...streamState, ..._.mapKeys(action.payload, 'id') };
    case DELETE_STREAM:
      return _.omit(streamState, action.payload);
    default:
      return streamState;
  }
};
