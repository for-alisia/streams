/** Types */
import { SIGN_OUT, SIGN_IN } from '../actions/actions.types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (authState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...authState, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...authState, isSignedIn: false, userId: null };
    default:
      return authState;
  }
};
