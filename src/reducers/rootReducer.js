import { combineReducers } from '@reduxjs/toolkit';
import { users } from './userReducer';

export const rootReducer = combineReducers({
  users,
});
