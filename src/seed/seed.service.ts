import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { AppointmentStatus } from '../appointments/entities/appointment.entity';
import { AppointmentsService } from '../appointments/appointments.service';
import { CarsService } from '../cars/cars.service';
import { WashServicesService } from '../wash-services/wash-services.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly washServicesService: WashServicesService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  populateDB() {
    const vehicleOneId = randomUUID();
    const vehicleTwoId = randomUUID();
    const serviceOneId = randomUUID();
    const serviceTwoId = randomUUID();

    this.carsService.setVehicles([
      {
        id: vehicleOneId,
        plate: 'ABC123',
        ownerName: 'Laura Gomez',
        ownerPhone: '3001234567',
        brand: 'Toyota',
        model: 'Corolla',
        color: 'Blanco',
      },
      {
        id: vehicleTwoId,
        plate: 'MNO456',
        ownerName: 'Carlos Ruiz',
        ownerPhone: '3109876543',
        brand: 'Mazda',
        model: 'CX-30',
        color: 'Gris',
      },
    ]);

    this.washServicesService.setWashServices([
      {
        id: serviceOneId,
        name: 'Lavado exterior',
        description: 'Lavado de carroceria, rines y secado manual.',
        price: 25000,
        durationMinutes: 30,
        active: true,
      },
      {
        id: serviceTwoId,
        name: 'Lavado premium',
        description: 'Lavado completo, polichado rapido y aroma interior.',
        price: 70000,
        durationMinutes: 90,
        active: true,
      },
    ]);

    this.appointmentsService.setAppointments([
      {
        id: randomUUID(),
        vehicleId: vehicleOneId,
        serviceId: serviceOneId,
        scheduledAt: new Date().toISOString(),
        status: AppointmentStatus.Pending,
        notes: 'Cliente espera en sala.',
        totalPrice: 25000,
        estimatedDurationMinutes: 30,
        createdAt: new Date().toISOString(),
      },
      {
        id: randomUUID(),
        vehicleId: vehicleTwoId,
        serviceId: serviceTwoId,
        scheduledAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        status: AppointmentStatus.InProgress,
        notes: 'Revisar manchas en tapetes.',
        totalPrice: 70000,
        estimatedDurationMinutes: 90,
        createdAt: new Date().toISOString(),
      },
    ]);

    return {
      message: 'Auto wash seed executed',
      vehicles: this.carsService.findAll().length,
      washServices: this.washServicesService.findAll().length,
      appointments: this.appointmentsService.findAll().length,
    };
  }
}
