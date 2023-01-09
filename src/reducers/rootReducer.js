import { combineReducer } from '@reduxjs/toolkit';
import {
  users,
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
} from './userReducer';

export default rootReducer = combineReducer({
  users,
  createUser,
  updateUser,
  fetchUser,
  deleteUser,
});
