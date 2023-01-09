import { combineReducers } from '@reduxjs/toolkit';
import {
  users,
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
} from './userReducer';

export const rootReducer = combineReducers({
  users,
  createUser,
  updateUser,
  fetchUser,
  deleteUser,
});
