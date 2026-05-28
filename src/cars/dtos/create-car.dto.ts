import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(5)
  readonly plate: string;

  @IsString()
  @MinLength(3)
  readonly ownerName: string;

  @IsString()
  @MinLength(7)
  readonly ownerPhone: string;

  @IsString()
  readonly brand: string;

  @IsString({ message: 'El parametro model no existe' })
  readonly model: string;

  @IsString()
  @IsOptional()
  readonly color?: string;
}
