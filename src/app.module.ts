import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { SeedModule } from './seed/seed.module';
import { WashServicesModule } from './wash-services/wash-services.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [CarsModule, WashServicesModule, AppointmentsModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
