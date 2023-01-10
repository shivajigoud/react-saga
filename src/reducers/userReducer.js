import {
  PUT_FETCH_ALL_USERS,
  PUT_FETCH_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
  PUT_DELETE_USER,
  PUT_ERROR,
} from '../actions/actions';

export const users = (state = {}, action) => {
  switch (action.type) {
    case PUT_FETCH_ALL_USERS:
      return { ...action.payLoad };
    case PUT_CREATE_USER:
      return { ...state, ...action.payLoad };
    case PUT_UPDATE_USER:
      return { ...state, ...action.payLoad };
    case PUT_FETCH_USER:
      return Object.keys(state).filter((user) => user.id == action.payLoad);
    case PUT_DELETE_USER:
      return Object.keys(state).filter((user) => user.id !== action.payLoad);
    default:
      return state;
  }
};
export const usersError = (state = { error: null }, action) => {
  switch (action.type) {
    case PUT_ERROR:
      return { error: action.payLoad };
    default:
      return state;
  }
};
