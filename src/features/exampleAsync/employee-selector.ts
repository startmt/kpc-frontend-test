import { createSelector } from "../../helpers/createSelector";
import { RootState } from "../../app/store";
import { EmployeeState } from "./slice";

//create selector from reselect ref
const getEmployee = (state: RootState) => state.employee;

export const selectEmployeeData = () =>
  createSelector(
    (state: RootState) => getEmployee(state),
    (data: EmployeeState) => {
      return data.data;
    }
  );
