import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//create type of action

interface GetEmployeeSuccessAction {
  data: [] | undefined;
}

export interface EmployeeState {
  data: [] | undefined;
  loading: boolean;
}

const initialState: EmployeeState = {
  data: [],
  loading: false,
};

//create redux flow (action and reducer)
export const employeeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getEmployee: (state) => {
      state.loading = true;
    },
    getEmployeeSuccess: (
      state,
      action: PayloadAction<GetEmployeeSuccessAction>
    ) => {
      state.data = action.payload.data;
    },
  },
});

export const { getEmployee, getEmployeeSuccess } = employeeSlice.actions;

export default employeeSlice.reducer;
