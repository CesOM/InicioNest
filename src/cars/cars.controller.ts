import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
export class CarsController {

    constructor (
        private readonly carsService: CarsService
    ){}
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ) {
        console.log({ id })
        // Number(id) = +id
        return this.carsService.findOneById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCars( @Body() createCarDto: CreateCarDto) {
        const car = this.carsService.create(createCarDto)
        return car;
    }

    @Delete(':id')
    deleteCars( @Param('id', new ParseUUIDPipe({ version: '4'})) id: string) {
        return this.carsService.delete(id);
    }

    @Patch(':id')
    updateCars( @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarsDto: UpdateCarDto) {
        return this.carsService.update(id, updateCarsDto);
    }
}
