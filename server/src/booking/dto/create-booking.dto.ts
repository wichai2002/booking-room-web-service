import { 
    IsNotEmpty,
    IsString,
    IsNumber,
    IsBoolean,
    IsEnum,
    IsOptional,
 } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';
import { bookingStatus } from "@prisma/client";

export class CreateBookingDto {

    @ApiProperty({description: 'Room ID to booking', example: 1})
    @IsNotEmpty()
    @IsNumber()
    roomId: number;

    @ApiProperty({description: 'Booking remark', example: 'Meeting with client'})
    @IsOptional()
    @IsString()
    remarks: string | null;

    @ApiProperty({description: 'Booking status', example: 'PENDING'})
    @IsNotEmpty()
    @IsString()
    @IsEnum(bookingStatus)
    status: bookingStatus;

    @ApiProperty({description: 'Booking by', example: 1})
    @IsNotEmpty()
    @IsNumber()
    bookingBy: number;

    @ApiProperty({description: 'Cancelled Booking by Staff id', example: 1})
    @IsNotEmpty()
    @IsNumber()
    cancelledBy: number;

    @ApiProperty({description: 'Booking start time', example: '2021-08-01T08:00:00.000Z'})
    @IsNotEmpty()
    startTime: Date;

    @ApiProperty({description: 'Booking end time', example: '2021-08-01T09:00:00.000Z'})
    @IsNotEmpty()
    endTime: Date;
}
