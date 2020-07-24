import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUser,
  add,
  editUser,
  cancel,
  updateUser,
} from "./user-slice";
import { useMemo, useLayoutEffect } from "react";
import { UserProps } from "./model";
import { selectUserData, selectUserEdit, selectisEdit } from "./user-selector";

//create hook from store
export const useUser = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const userData = useSelector(selectUserData);
  const editData = useSelector(selectUserEdit);
  const isEdit = useSelector(selectisEdit);

  const handleAddUser = (data: UserProps) => {
    dispatch(add({ data }));
  };

  const handleEditForm = (key: number) => {
    dispatch(editUser({ key }));
  };

  const handleUpdateUser = (data: UserProps) => {
    dispatch(updateUser({ data }));
  };

  const handleCancelForm = () => {
    dispatch(cancel());
  };

  const handleDeleteUser = (index: number) => {
    dispatch(deleteUser({ key: index }));
  };

  return {
    editData,
    userData,
    isEdit,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    handleEditForm,
    handleCancelForm,
  };
};
