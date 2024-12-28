import { PartialType } from '@nestjs/swagger';
import { CreateRoomDto, CreateRoomTypeDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {}
