import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('vehicles')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllVehicles() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getVehicleById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createVehicle(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Delete(':id')
  deleteVehicle(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.delete(id);
  }

  @Patch(':id')
  updateVehicle(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarsDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarsDto);
  }
}
