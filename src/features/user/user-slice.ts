import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "./model";

//create type of action
interface AddUserAction {
  data: UserProps;
}

interface EditUserAction {
  key: number;
}

interface UpdateUserAction {
  data: UserProps;
}

interface DeleteUserAction {
  key: number;
}

export interface UserState {
  data: UserProps[];
  editUser: UserProps | undefined;
  isEdit: boolean;
}

const initialState: UserState = {
  data: [],
  editUser: undefined,
  isEdit: false,
};

//helper function for reducer
const getUserFormStorage = () => {
  const data = JSON.parse(localStorage.getItem("user") || "[]");
  return data.sort((prev: UserProps, next: UserProps) => prev.key - next.key);
};
const addUserToStorage = (data: UserProps) => {
  const currentData = getUserFormStorage();
  const keys = currentData.map((item: UserProps) => item.key);
  localStorage.setItem(
    "user",
    JSON.stringify(currentData.concat({ ...data, key: Math.max(...keys) + 1 }))
  );
};
const editUserToStorage = (data: UserProps) => {
  deleteUserToStorage(data.key);
  const currentData = getUserFormStorage();
  localStorage.setItem("user", JSON.stringify(currentData.concat({ ...data })));
};

const deleteUserToStorage = (key: number) => {
  const currentData = getUserFormStorage();
  const data = currentData.filter((user: UserProps) => {
    return user.key !== key;
  });
  localStorage.setItem("user", JSON.stringify(data));
};

//create redux flow (action and reducer)
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<AddUserAction>) => {
      addUserToStorage(action.payload.data);
      state.data = getUserFormStorage();
    },
    getUser: (state) => {
      const data = JSON.parse(localStorage.getItem("user") || "[]");
      state.data = data;
    },
    editUser: (state, action: PayloadAction<EditUserAction>) => {
      state.isEdit = true;
      state.editUser = state.data.find(
        (item) => item.key === action.payload.key
      );
    },
    updateUser: (state, action: PayloadAction<UpdateUserAction>) => {
      editUserToStorage(action.payload.data);
      state.data = getUserFormStorage();
      state.editUser = undefined;
      state.isEdit = false;
    },
    cancel: (state) => {
      state.isEdit = false;
      state.editUser = undefined;
    },
    deleteUser: (state, action: PayloadAction<DeleteUserAction>) => {
      deleteUserToStorage(action.payload.key);
      state.isEdit = false;
      state.editUser = undefined;
      state.data = getUserFormStorage();
    },
  },
});

export const {
  add,
  getUser,
  editUser,
  updateUser,
  cancel,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
