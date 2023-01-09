import { takeEvery, call, put } from '@redux-saga/core/effects';
import userAPI from '../restAPI/userAPI';
import {
  FETCH_ALL_USERS,
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  PUT_FETCH_ALL_USERS,
  PUT_FETCH_USER,
  PUT_CREATE_USER,
  PUT_UPDATE_USER,
  PUT_DELETE_USER,
  PUT_ERROR,
} from '../actions/actions';

function* fetchAllUsers() {
  const { response, error } = yield call(userAPI.fetchAllUsers);
  if (response.status == 200) {
    const users = yield response.json();
    yield put({ type: PUT_FETCH_ALL_USERS, payLoad: users });
    console.log(users);
  } else {
    console.log(error);
    yield put({ type: PUT_ERROR, payLoad: error });
  }
}
export default function* userSaga() {
  yield takeEvery(FETCH_ALL_USERS, fetchAllUsers);
}
