import { v4 as uuid } from 'uuid'

import { Brand } from "src/brands/entities/brand.entity";

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Toyota',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Ford',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'BMW',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mercedes-Benz',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Audi',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Nissan',
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Hyundai',
        createAt: new Date().getTime(),
    }
]