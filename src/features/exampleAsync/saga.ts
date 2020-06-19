import { getUserApi } from "./api";
import { takeEvery, call, put } from "redux-saga/effects";
import { getEmployeeSuccess, getEmployee } from "./slice";

export function* fetchUserDataSaga() {
  try {
    const { data } = yield call(getUserApi);
    yield put(getEmployeeSuccess({ data: data.data }));
  } catch (e) {
    return e;
  }
}

export default function* employeeSaga() {
  yield takeEvery(getEmployee, fetchUserDataSaga);
}
