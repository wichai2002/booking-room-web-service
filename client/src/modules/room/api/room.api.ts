
import { $http } from "../../../api/http";
import { IRoom } from "../types/room.type";


export const roomApi = () => {

    async function getAll(params: any): Promise<IRoom[]> {
        const response = await $http.get<IRoom[]>(`api/v1/room`, {params})
        return response.data
    }

    async function getById(id: number | string) {
        const response = await $http.get<IRoom>(`api/v1/room/${id}`)
        return response.data
    }

    async function createRoom(data: IRoom) {
        const response = await $http.post(`api/v1/room`, data)
        return response.data
    }

    async function updateRoom(data: IRoom, id: number | string) {
        const response = await $http.post(`api/v1/room/${id}`, data)
        return response.data
    }

    return {
        getAll,
        getById,
        createRoom,
        updateRoom
    }
}
