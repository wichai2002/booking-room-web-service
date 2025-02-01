
export interface IUserPayload {
    id?: number | null | undefined;
    username: string;
    fullName: string;
    isStaff: boolean;
    isAdmin: boolean;
    staffCode?: string;
    image?: string | null
    iat?: number
    exp?: number
}
