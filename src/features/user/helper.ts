import { UserProps } from "./model";

//helper function for reducer
export const getUserFormStorage = () => {
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    return data.sort((prev: UserProps, next: UserProps) => prev.key - next.key);
};
export const addUserToStorage = (data: UserProps) => {
    const currentData = getUserFormStorage();
    const keys = currentData.map((item: UserProps) => item.key);
    localStorage.setItem(
        "user",
        JSON.stringify(currentData.concat({ ...data, key: Math.max(...keys) + 1 }))
    );
};
export const editUserToStorage = (data: UserProps) => {
    deleteUserToStorage(data.key);
    const currentData = getUserFormStorage();
    localStorage.setItem("user", JSON.stringify(currentData.concat({ ...data })));
};

export const deleteUserToStorage = (key: number) => {
    const currentData = getUserFormStorage();
    const data = currentData.filter((user: UserProps) => {
        return user.key !== key;
    });
    localStorage.setItem("user", JSON.stringify(data));
};