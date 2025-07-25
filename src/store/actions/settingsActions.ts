import { CHANGE_USER_ROLE } from "../types";

export const changeUserRole = (payload: string) => ({
    type: CHANGE_USER_ROLE,
    payload: payload
})