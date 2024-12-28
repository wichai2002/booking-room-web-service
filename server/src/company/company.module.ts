import { Module } from '@nestjs/common';
import { DepartmentService, PositionService } from './company.service';
import { DepartmentController, PositionController } from './company.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DepartmentController, PositionController],
  providers: [DepartmentService, PositionService],
  imports: [PrismaModule]
})
export class CompanyModule { }
