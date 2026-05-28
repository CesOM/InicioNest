import { IsBoolean, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateWashServiceDto {
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsString()
  @MinLength(8)
  readonly description: string;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsNumber()
  @Min(5)
  readonly durationMinutes: number;

  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;
}
