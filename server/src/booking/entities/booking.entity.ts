import { ApiProperty } from "@nestjs/swagger";

export class BookingEntity {

    constructor(data: Partial<BookingEntity>) {Object.assign(this, data);}

    @ApiProperty({type: Number, description: 'Booking ID', example: 1})
    id: number;

    @ApiProperty({type: Number, description: 'Room ID to booking', example: 1})
    roomId: number;

    @ApiProperty({type: String, description: 'Booking remark', example: 'Meeting with client'})
    remarks: string | null;

    @ApiProperty({type: String, description: 'Booking status', example: 'PENDING'})
    status: string;

    @ApiProperty({type: Number, description: 'Booking by', example: 1})
    bookingBy: number;

    @ApiProperty({type: Number, description: 'Cancelled Booking by Staff id', example: 1})
    cancelledBy: number;

    @ApiProperty({type: String, description: 'Booking start time', example: '2021-08-01T08:00:00.000Z'})
    startTime: Date;

    @ApiProperty({type: String, description: 'Booking end time', example: '2021-08-01T09:00:00.000Z'})
    endTime: Date;
}
