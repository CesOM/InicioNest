import { IsString } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly brand: string;

    @IsString({message: 'El parametro model no existe'})
    readonly model: string;
}