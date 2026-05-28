import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CarsService } from '../cars/cars.service';
import { WashServicesService } from '../wash-services/wash-services.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment, AppointmentStatus } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  private appointments: Appointment[] = [];

  constructor(
    private readonly carsService: CarsService,
    private readonly washServicesService: WashServicesService,
  ) {}

  findAll() {
    return this.appointments.map((appointment) => this.withDetails(appointment));
  }

  findOneById(id: string) {
    const appointment = this.findRawById(id);
    return this.withDetails(appointment);
  }

  create(createAppointmentDto: CreateAppointmentDto) {
    this.carsService.findOneById(createAppointmentDto.vehicleId);
    const service = this.washServicesService.findOneById(createAppointmentDto.serviceId);

    const appointment: Appointment = {
      id: randomUUID(),
      ...createAppointmentDto,
      status: AppointmentStatus.Pending,
      totalPrice: service.price,
      estimatedDurationMinutes: service.durationMinutes,
      createdAt: new Date().toISOString(),
    };

    this.appointments.push(appointment);
    return this.withDetails(appointment);
  }

  update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    let appointmentDB = this.findRawById(id);
    const service = updateAppointmentDto.serviceId
      ? this.washServicesService.findOneById(updateAppointmentDto.serviceId)
      : this.washServicesService.findOneById(appointmentDB.serviceId);

    if (updateAppointmentDto.vehicleId) {
      this.carsService.findOneById(updateAppointmentDto.vehicleId);
    }

    this.appointments = this.appointments.map((appointment) => {
      if (appointment.id === id) {
        appointmentDB = {
          ...appointmentDB,
          ...updateAppointmentDto,
          totalPrice: service.price,
          estimatedDurationMinutes: service.durationMinutes,
        };
        return appointmentDB;
      }
      return appointment;
    });

    return this.withDetails(appointmentDB);
  }

  remove(id: string) {
    this.findRawById(id);
    this.appointments = this.appointments.filter((appointment) => appointment.id !== id);
    return this.findAll();
  }

  setAppointments(appointments: Appointment[]) {
    this.appointments = appointments;
  }

  private findRawById(id: string) {
    const appointment = this.appointments.find((appointment) => appointment.id === id);
    if (!appointment) throw new NotFoundException(`Appointment with id ${id} not found`);
    return appointment;
  }

  private withDetails(appointment: Appointment) {
    return {
      ...appointment,
      vehicle: this.carsService.findOneById(appointment.vehicleId),
      service: this.washServicesService.findOneById(appointment.serviceId),
    };
  }
}
