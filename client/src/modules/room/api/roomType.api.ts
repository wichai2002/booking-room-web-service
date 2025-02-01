import { $http } from "../../../api/http";
import { IRoomType } from "../types/roomType.type";

export const roomTypeApi = () => {

    async function getAll(params: any): Promise<IRoomType[]> {
        const response = await $http.get<IRoomType[]>('/api/v1/room-type', {params})
        return response.data
    }

    async function getById(id: number | string) {
        const response = await $http.get<IRoomType>(`/api/v1/room-type/${id}`)
        return response.data
    }

    async function createRoom(data: IRoomType) {
        const response = await $http.post(`/api/v1/room-type`, data)
        return response.data
    }

    async function updateRoom(data: IRoomType, id: number | string) {
        const response = await $http.put(`api/v1/room-type/${id}`, data)
        return response.data
    }

    return {
        getAll,
        getById,
        createRoom,
        updateRoom
    }
}
