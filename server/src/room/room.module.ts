import { Module } from '@nestjs/common';
import { RoomService, RoomTypeService } from './room.service';
import { RoomController, RoomTypeController } from './room.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RoomController, RoomTypeController],
  providers: [RoomService, RoomTypeService],
  imports: [PrismaModule]
})
export class RoomModule {}
