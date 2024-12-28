import { ApiProperty } from "@nestjs/swagger";


export class RoomEntity {

    constructor(data: Partial<RoomEntity>) {Object.assign(this, data);}

    @ApiProperty({ type: Number, description: 'ID of the room', example: 1 })
    id : number;

    @ApiProperty({ type: String, description: 'Name of the room', example: 'Room 1' })
    name: string;

    @ApiProperty({ type: Number, description: 'Floor of the room', example: 1 })
    floor: number;

    @ApiProperty({ type: String, description: 'Cover image of the room', example: 'https://example.com/image.jpg' })
    coverImage: string | null;

    @ApiProperty({ type: String, description: 'Open time of the room', example: '08:00' })
    openTime: string;

    @ApiProperty({ type: String, description: 'Close time of the room', example: '20:00' })
    closeTime: string;

    @ApiProperty({ type: Number, description: 'Booking duration of the room', example: 60 })
    bookingDuration: number;

    @ApiProperty({ type: String, description: 'Detail of the room', example: 'This is the room 1' })
    detail: string | null;

    @ApiProperty({ type: Boolean, description: 'Status Active of the room', example: true })
    isActive: boolean;

    @ApiProperty({ type: Number, description: 'ID of the room type', example: 1 })
    typeId : number;
}


export class RoomTypeEntity {

    constructor(data: Partial<RoomEntity>) {Object.assign(this, data);}
    
    @ApiProperty({ type: Number, description: 'ID of the room type', example: 1 })
    id : number;

    @ApiProperty({ type: String, description: 'Name of the room type', example: 'Room Type 1' })
    name: string;

    @ApiProperty({ type: String, description: 'Detail of the room type', example: 'This is the room type 1' })
    detail: string | null;

    @ApiProperty({ type: Boolean, description: 'Status Active of the room type', example: true })
    isActive: boolean;
}