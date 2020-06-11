import { useDispatch, useSelector } from "react-redux"
import { deleteUser, getUser, add, editUser, cancel, updateUser } from "./user-slice"
import { useCallback, useMemo, useLayoutEffect } from "react"
import { UserProps } from "./model"
import { selectUserData, selectUserEdit, selectisEdit } from "./user-selector"

//create hook from store
export const useUser = () => {
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const userData = useSelector(useMemo(selectUserData, [dispatch]));
    const editData = useSelector(useMemo(selectUserEdit, [dispatch]));
    const isEdit = useSelector(useMemo(selectisEdit, [dispatch]));


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