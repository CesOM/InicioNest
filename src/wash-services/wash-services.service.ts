import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateWashServiceDto } from './dto/create-wash-service.dto';
import { UpdateWashServiceDto } from './dto/update-wash-service.dto';
import { WashService } from './entities/wash-service.entity';

@Injectable()
export class WashServicesService {
  private washServices: WashService[] = [
    {
      id: randomUUID(),
      name: 'Lavado exterior',
      description: 'Lavado de carroceria, rines y secado manual.',
      price: 25000,
      durationMinutes: 30,
      active: true,
    },
    {
      id: randomUUID(),
      name: 'Lavado completo',
      description: 'Lavado exterior, aspirado interior, tablero y vidrios.',
      price: 45000,
      durationMinutes: 60,
      active: true,
    },
  ];

  findAll() {
    return this.washServices;
  }

  findOneById(id: string) {
    const service = this.washServices.find((service) => service.id === id);
    if (!service) throw new NotFoundException(`Wash service with id ${id} not found`);
    return service;
  }

  create(createWashServiceDto: CreateWashServiceDto) {
    const service: WashService = {
      id: randomUUID(),
      active: true,
      ...createWashServiceDto,
    };

    this.washServices.push(service);
    return service;
  }

  update(id: string, updateWashServiceDto: UpdateWashServiceDto) {
    let serviceDB = this.findOneById(id);

    this.washServices = this.washServices.map((service) => {
      if (service.id === id) {
        serviceDB = { ...serviceDB, ...updateWashServiceDto };
        return serviceDB;
      }
      return service;
    });

    return serviceDB;
  }

  remove(id: string) {
    this.findOneById(id);
    this.washServices = this.washServices.filter((service) => service.id !== id);
    return this.washServices;
  }

  setWashServices(washServices: WashService[]) {
    this.washServices = washServices;
  }
}
