import {
  FETCH_ALL_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actions/actions';

export const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return [...action.payLoad];
    default:
      return state;
  }
};
export const createUser = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state.users, ...action.payLoad];
    default:
      return state;
  }
};
export const updateUser = (state = [], action) => {
  switch (action.type) {
    case UPDATE_USER:
      return [...state.users, ...action.payLoad];
    default:
      return state;
  }
};
export const fetchUser = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...action.payLoad];
    default:
      return state;
  }
};
export const deleteUser = (state = [], action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.users.map();
    default:
      return state;
  }
};
