import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService, RoomTypeService } from './room.service';
import { CreateRoomDto, CreateRoomTypeDto } from './dto/create-room.dto';
import { UpdateRoomDto, UpdateRoomTypeDto } from './dto/update-room.dto';
import { ApiResponse } from '@nestjs/swagger';

import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';




// entities
import { RoomEntity, RoomTypeEntity } from './entities/room.entity';


@ApiBearerAuth()
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiResponse({ status: 201, description: 'Create room', type: RoomEntity })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    return this.roomService.create(createRoomDto);
  }

  @ApiResponse({ status: 200, description: 'Get all rooms', type: RoomEntity, isArray: true })
  @Get()
  findAll(): Promise<RoomEntity[]> {
    return this.roomService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get room by id', type: RoomEntity })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoomEntity> {
    return this.roomService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Update room by id', type: RoomEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto): Promise<RoomEntity> {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}

@ApiBearerAuth()
@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @ApiResponse({ status: 201, description: 'Create room type', type: RoomTypeEntity })
  @Post()
  create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    return this.roomTypeService.create(createRoomTypeDto);
  }

  @ApiResponse({ status: 200, description: 'Get all room types', type: RoomTypeEntity, isArray: true })
  @Get()
  findAll(): Promise<RoomTypeEntity[]> {
    return this.roomTypeService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get room type by id', type: RoomTypeEntity })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoomTypeEntity> {
    return this.roomTypeService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Update room type by id', type: RoomTypeEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto): Promise<RoomTypeEntity> {
    return this.roomTypeService.update(+id, updateRoomTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypeService.remove(+id);
  }
}