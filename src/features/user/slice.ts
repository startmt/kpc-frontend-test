import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  data: UserProps[];
  editingKey: string;
}

export interface UserProps {
  birthDate: any;
  firstname: string;
  gender: string;
  lastname: string;
  nationality: string;
  passport: string;
  phone: string;
  phonecode: string;
  salary: string;
  title: string;
  index: number;
}

const initialState: UserState = {
  data: [],
  editingKey: "",
};

export const getUserFormStorage = () => {
  const data = JSON.parse(localStorage.getItem("user") || "[]");
  return data;
};
export const addUserToStorage = (data: UserProps) => {
  const currentData = getUserFormStorage();
  localStorage.setItem(
    "user",
    JSON.stringify(currentData.concat({ ...data, index: currentData.length }))
  );
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload.data;
    },
    getUser: (state) => {
      const data = JSON.parse(localStorage.getItem("user") || "[]");
      state.data = data;
    },
    editUser: (state, action) => {
      state.editingKey = action.payload.editingKey;
    },
  },
});

export const { update, getUser } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;
