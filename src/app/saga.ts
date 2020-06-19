import { all, call } from "redux-saga/effects";
import employeeSaga from "../features/exampleAsync/saga";

const sagas = [
  call(employeeSaga),
];

export default function* mainSaga() {
  yield all(sagas);
}
