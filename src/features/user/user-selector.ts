import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { UserState } from './user-slice';
//create selector from reselect ref
const getUser = (state: RootState) => state.user

export const selectUserData = () => createSelector((state: RootState) => getUser(state), (user: UserState) => user.data)
export const selectUserEdit = () => createSelector((state: RootState) => getUser(state), (user: UserState) => user.editUser)
export const selectisEdit = () => createSelector((state: RootState) => getUser(state), (user: UserState) => user.isEdit)