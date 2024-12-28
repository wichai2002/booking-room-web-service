import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { bookingStatus } from '@prisma/client';

// prisma utils
import { handleNotFoundError } from 'src/prisma/prisma.utills';

// entities
import { BookingEntity } from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async create(createBookingDto: CreateBookingDto) {
    const createdBooking = await this.prisma.booking.create({data: createBookingDto});
    return new BookingEntity(createdBooking);
  }

  async findAll(): Promise<BookingEntity[]> {
    const bookings = await this.prisma.booking.findMany();
    return bookings.map(booking => new BookingEntity(booking));
  }

  async findOne(id: number): Promise<BookingEntity> {
    const booking = await this.prisma.booking.findUnique({where: {id: id}});

    if (!booking) throw new NotFoundException(`Booking with ID ${id} not found`);

    return new BookingEntity(booking);
  }

  async update(id: number, updateBookingDto: UpdateBookingDto): Promise<BookingEntity> {
    try{
      const updatedBooking = await this.prisma.booking.update({
        where: {id: id},
        data: updateBookingDto
      });
      return new BookingEntity(updatedBooking);
    } catch(error) {
      handleNotFoundError(error, 'Booking', id);
    }
  }

  async cancel(id: number): Promise<BookingEntity> {
    try{
      const cancelledBooking = await this.prisma.booking.update({
        where: {id: id},
        data: {status: bookingStatus.CANCELLED}
      });
      return new BookingEntity(cancelledBooking);
    } catch(error) {
      handleNotFoundError(error, 'Booking', id);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
