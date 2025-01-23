import { $http } from "../../../api/http";

// types
import { IDepartment } from "../types/department";


export const DepartmentApi = () => {

    async function getDepartments(): Promise<IDepartment[]> {
        // Get all departments datas
        const response = await $http.get<IDepartment[]>('/api/v1/department');
        return response.data;
    }

    async function getDepartmentById(id: string) {
        // Get department by id
        const response = await $http.get<IDepartment>(`/api/v1/department/${id}`);
        return response.data;
    }

    async function createDepartment(data: IDepartment) {
        // Create department
        const response = await $http.post<IDepartment>('/api/v1/department', data);
        return response.data;
    }

    return { getDepartments, getDepartmentById, createDepartment }
}