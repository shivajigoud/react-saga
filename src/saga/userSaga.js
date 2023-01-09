import { takeEvery, call, put } from '@redux-saga/core/effects';
import { fetchAllUsers } from '../restAPI/userAPI';
import {
  FETCH_ALL_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../actions/actions';

function* fetchAllUsers() {
  const users = yield call(fetchAllUsers);
  console.log(users);
}
export default function* userSaga() {
  yield takeEvery(FETCH_ALL_USERS);
}
