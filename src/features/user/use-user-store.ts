import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getUser, selectUserEdit, selectUserData, add, editUser, cancel, selectisEdit, updateUser } from "./user-slice"
import { useCallback, useEffect } from "react"
import { UserProps } from "./model"

export const useUser = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const userData = useSelector(selectUserData);
    const editData = useSelector(selectUserEdit);
    const isEdit = useSelector(selectisEdit);
    const handleAddUser = useCallback((data: UserProps) => {
        dispatch(add({ data }))
    }, [dispatch])

    const handleEditForm = useCallback((key: number) => {
        dispatch(editUser({ key }))
    }, [dispatch])

    const handleUpdateUser = useCallback((data: UserProps) => {
        dispatch(updateUser({ data }));
    }, [dispatch])


    const handleCancelForm = useCallback(() => {
        dispatch(cancel())
    }, [dispatch])

    const handleDeleteUser = useCallback((index: number) => {
        dispatch(deleteUser({ key: index }));
    }, [dispatch]);

    return {
        editData,
        userData,
        isEdit,
        handleAddUser,
        handleUpdateUser,
        handleDeleteUser,
        handleEditForm,
        handleCancelForm
    }
}