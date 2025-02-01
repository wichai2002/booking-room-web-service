import { $http } from "../../../api/http";

// types
import { IPosition } from "../types/position";


export const PositionApi = () => {

    async function getPositions() {
        // Get all positions datas
        const response = await $http.get<IPosition[]>('/api/v1/position');
        return response.data;
    }

    return {getPositions}
}