import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { createCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService {
    private cars : Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla' },
        { id: uuid(), brand: 'Honda', model: 'Civic' },
        { id: uuid(), brand: 'Ford', model: 'Focus' },
        { id: uuid(), brand: 'Chevrolet', model: 'Cruze' },
        { id: uuid(), brand: 'Nissan', model: 'Sentra' },
        { id: uuid(), brand: 'Mazda', model: 'Mazda 3' },
        { id: uuid(), brand: 'Hyundai', model: 'Elantra' },
        { id: uuid(), brand: 'Kia', model: 'Forte' },
        { id: uuid(), brand: 'Volkswagen', model: 'Jetta' },
        { id: uuid(), brand: 'Subaru', model: 'Impreza' }
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id){
        const car = this.cars.find(car => car.id == id);
        if( !car ) throw new NotFoundException(`Car with id ${id} not found`);
        return car
    }
    create( createCarDto: createCarDto){

        const brand = createCarDto.brand;
        const model = createCarDto.model;
        const car = {id: uuid(), brand, model}
        this.cars.push(car)
        console.log(this.cars)
        this
        return car;
    }
}
