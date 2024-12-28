import {
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsOptional,
    IsNumber,
    Max
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomTypeDto {

    @ApiProperty({ type: String, description: 'Name of the room type', example: 'Room Type 1' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ type: String, description: 'Detail of the room type', example: 'This is the room type 1' })
    @IsString()
    @IsOptional()
    detail: string | null;

    @ApiProperty({ type: Boolean, description: 'Status Active of the room type', example: true })
    @IsBoolean()
    isActive: boolean;
}

export class CreateRoomDto {

    @ApiProperty({ type: String, description: 'Name of the room', example: 'Room 1' })
    @IsString()
    @IsNotEmpty()
    @Max(150)
    name: string;

    @ApiProperty({ type: Number, description: 'Floor of the room', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    floor: number;

    @ApiProperty({ type: String, description: 'Cover image of the room', example: 'https://example.com/image.jpg' })
    @IsString()
    @IsOptional()
    coverImage: string | null;

    @ApiProperty({ type: String, description: 'Open time of the room', example: '08:00' })
    @IsString()
    @IsNotEmpty()
    openTime: string;

    @ApiProperty({ type: String, description: 'Close time of the room', example: '20:00' })
    @IsString()
    @IsNotEmpty()
    closeTime: string;

    @ApiProperty({ type: Number, description: 'Booking duration of the room', example: 60 })
    @IsNotEmpty()
    @IsNumber()
    bookingDuration: number;

    @ApiProperty({ type: String, description: 'Detail of the room', example: 'This is the room 1' })
    @IsString()
    @IsOptional()
    detail: string | null;

    @ApiProperty({ type: Boolean, description: 'Status Active of the room', example: true })
    @IsBoolean()
    isActive: boolean;

    @ApiProperty({ type: Number, description: 'ID of the room type', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    typeId: number;
}
