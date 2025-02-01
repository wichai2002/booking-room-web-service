import { $http } from "./http";

import { IUserPayload } from "../types/interfaces/user.interface";


export const getMeApi = () => {
    async function getMe(): Promise<IUserPayload> {
        const response = await $http.get<IUserPayload>('/api/v1/user/token/me');
        return response.data
    }

    return { getMe }
}