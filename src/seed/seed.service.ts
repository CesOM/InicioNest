import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){}

  populateDB() {

    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandService.fillBransWithSeedData(BRANDS_SEED)
    // BRANDS_SEED
    // CARS_SEED

    return 'SEED execute'

  }
}
