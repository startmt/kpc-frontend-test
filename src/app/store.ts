import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import employeeReducer from "../features/exampleAsync/slice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
