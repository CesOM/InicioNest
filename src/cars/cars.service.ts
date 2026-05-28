import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateCarDto, UpdateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: randomUUID(),
      plate: 'ABC123',
      ownerName: 'Laura Gomez',
      ownerPhone: '3001234567',
      brand: 'Toyota',
      model: 'Corolla',
      color: 'Blanco',
    },
    {
      id: randomUUID(),
      plate: 'MNO456',
      ownerName: 'Carlos Ruiz',
      ownerPhone: '3109876543',
      brand: 'Mazda',
      model: 'CX-30',
      color: 'Gris',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Vehicle with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const plate = createCarDto.plate.trim().toUpperCase();
    const plateExists = this.cars.some((car) => car.plate === plate);

    if (plateExists) {
      throw new BadRequestException(`Vehicle with plate ${plate} already exists`);
    }

    const car: Car = {
      id: randomUUID(),
      ...createCarDto,
      plate,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException('Vehicle id is not valid inside body');
    }

    if (updateCarDto.plate) {
      const plate = updateCarDto.plate.trim().toUpperCase();
      const plateExists = this.cars.some((car) => car.id !== id && car.plate === plate);

      if (plateExists) {
        throw new BadRequestException(`Vehicle with plate ${plate} already exists`);
      }

      updateCarDto = { ...updateCarDto, plate };
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }

  setVehicles(cars: Car[]) {
    this.cars = cars;
  }
}
