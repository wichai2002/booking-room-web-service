import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { TableModule } from './table/table.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [PrismaModule, UserModule, CompanyModule, TableModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
