import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @MinLength(5)
  @IsOptional()
  readonly plate?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly ownerName?: string;

  @IsString()
  @MinLength(7)
  @IsOptional()
  readonly ownerPhone?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'El parametro model no existe' })
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly color?: string;
}
