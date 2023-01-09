import {
  PUT_FETCH_ALL_USERS,
  PUT_FETCH_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
  PUT_DELETE_USER,
  PUT_ERROR,
} from '../actions/actions';

export const users = (state = [], action) => {
  switch (action.type) {
    case PUT_FETCH_ALL_USERS:
      return [...action.payLoad];
    case PUT_CREATE_USER:
      return [...state.users, ...action.payLoad];
    case PUT_UPDATE_USER:
      return [...state.users, ...action.payLoad];
    case PUT_FETCH_USER:
      return [...action.payLoad];
    case PUT_DELETE_USER:
      return [...state.users.map()];
    case PUT_ERROR:
      return { ...state.error };
    default:
      return state;
  }
  // };
  // export const createUser = (state = [], action) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // };
  // export const updateUser = (state = [], action) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // };
  // export const fetchUser = (state = [], action) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // };
  // export const deleteUser = (state = [], action) => {
  //   switch (action.type) {
  //     case PUT_DELETE_USER:
  //       return state.users.map();
  //     default:
  //       return state;
  //   }
};
