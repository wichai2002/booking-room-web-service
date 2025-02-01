

export interface IRoom {
    id?: number | string | null;
    name: string;
    floor: number;
    coverImage?: string | null
    openTime: string;
    closeTime: string;
    bookingDuration: number
    detail?: string | null | undefined
    isActive: boolean
    typeId?: number | null
}
