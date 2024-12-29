
export interface ILogin {
    username: string;
    password: string;
}


export interface IRegister {
    fullName: string;
    username: string;
    password: string;
    email: string;
    mobile: string;
    birhtdate: string;
    image?: string | null;
    isStaff: boolean;
    isAdmin: boolean;
    staffCode?: string | null;
    positionID?: number | null;
}