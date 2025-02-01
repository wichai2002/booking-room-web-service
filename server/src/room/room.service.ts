import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto, CreateRoomTypeDto } from './dto/create-room.dto';
import { UpdateRoomDto, UpdateRoomTypeDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// prisma utillity
import { handleNotFoundError } from 'src/prisma/prisma.utills';

// entities
import { RoomEntity, RoomTypeEntity } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async create(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const createdRoom = await this.prisma.room.create({data: createRoomDto});
    return new RoomEntity(createdRoom);
  }

  async findAll(): Promise<RoomEntity[]> {
    const rooms = await this.prisma.room.findMany();
    return rooms.map(room => new RoomEntity(room));
  }

  async findOne(id: number): Promise<RoomEntity> {
    const room = await this.prisma.room.findUnique({where: {id: id}});

    if (!room) throw new NotFoundException(`Room with ID ${id} not found`);

    return new RoomEntity(room)
  }

  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<RoomEntity> {
    try{
      const updatedRoom = await this.prisma.room.update({where: {id}, data: updateRoomDto});
      return new RoomEntity(updatedRoom);
    } catch (error) {
      handleNotFoundError(error, 'Room', id);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}


@Injectable()
export class RoomTypeService {
  constructor(private prisma: PrismaService) {}

  async create(createRoomTypeDto: CreateRoomTypeDto): Promise<RoomTypeEntity> {
    const createdRoomType = await this.prisma.roomType.create({data: createRoomTypeDto});
    return new RoomTypeEntity(createdRoomType);
  }

  async findAll(): Promise<RoomTypeEntity[]> {
    const roomTypes = await this.prisma.roomType.findMany();
    return roomTypes.map(roomType => new RoomTypeEntity(roomType));
  }

  async findOne(id: number): Promise<RoomTypeEntity> {
    const roomType = await this.prisma.roomType.findUnique({where: {id: id}});

    if (!roomType) throw new NotFoundException(`Room Type with ID ${id} not found`);

    return new RoomTypeEntity(roomType)
  }

  async update(id: number, updateRoomTypeDto: UpdateRoomTypeDto): Promise<RoomTypeEntity> {
    try{
      const updatedRoomType = await this.prisma.roomType.update({where: {id}, data: updateRoomTypeDto});
      return new RoomTypeEntity(updatedRoomType);
      
    } catch (error) {
      handleNotFoundError(error, 'Room Type', id);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} room type`;
  }
}