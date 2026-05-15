import { v4 as uuid } from 'uuid'

import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Camaro'
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'X5'
    },
    {
        id: uuid(),
        brand: 'Mercedes-Benz',
        model: 'C-Class'
    },
    {
        id: uuid(),
        brand: 'Audi',
        model: 'A4'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Sentra'
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Elantra'
    },
    {
        id: uuid(),
        brand: 'Kia',
        model: 'Sportage'
    }
]