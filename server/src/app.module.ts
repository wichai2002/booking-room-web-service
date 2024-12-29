import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { TableModule } from './table/table.module';
import { RoomModule } from './room/room.module';
import { BookingModule } from './booking/booking.module';

// middlewares
import { AuthMiddleware } from './middleware/auth';

@Module({
  imports: [PrismaModule, UserModule, CompanyModule, TableModule, RoomModule, BookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .exclude(
        { path: '/user/authen', method: RequestMethod.POST }, // Allowd login path
        { path: '/department', method: RequestMethod.GET },
        { path: '/position', method: RequestMethod.GET }
      )
      .forRoutes('*')
  }
}
