import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

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
    create( createCarDto: CreateCarDto){

        const brand = createCarDto.brand;
        const model = createCarDto.model;
        const car = {id: uuid(), brand, model}
        this.cars.push(car)
        console.log(this.cars)
        this
        return car;
    }
    update(id:string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id != id)
            throw new BadRequestException('Car id is not valid inside body');

        this.cars = this.cars.map(car => {
            if (car.id == id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        } );
        return carDB;   
    }
    delete(id:string){
        const car = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id)
        return this.cars;
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }
}
