
export interface IJwtPayload {
    id: number;
    username: string;
    fullName: string;
    isStaff: boolean;
    isAdmin: boolean;
    staffCode: string;
    image?: string | null
}
