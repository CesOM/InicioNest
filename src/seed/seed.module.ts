import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from '../cars/cars.module';
import { WashServicesModule } from '../wash-services/wash-services.module';
import { AppointmentsModule } from '../appointments/appointments.module';

@Module({
  imports: [CarsModule, WashServicesModule, AppointmentsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
