import { IsISO8601, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  readonly vehicleId: string;

  @IsUUID()
  readonly serviceId: string;

  @IsISO8601()
  readonly scheduledAt: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly notes?: string;
}
