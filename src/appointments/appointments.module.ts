import { Module } from '@nestjs/common';

import { CarsModule } from '../cars/cars.module';
import { WashServicesModule } from '../wash-services/wash-services.module';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';

@Module({
  imports: [CarsModule, WashServicesModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
