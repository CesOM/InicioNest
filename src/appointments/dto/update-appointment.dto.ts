import { IsEnum, IsISO8601, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

import { AppointmentStatus } from '../entities/appointment.entity';

export class UpdateAppointmentDto {
  @IsUUID()
  @IsOptional()
  readonly vehicleId?: string;

  @IsUUID()
  @IsOptional()
  readonly serviceId?: string;

  @IsISO8601()
  @IsOptional()
  readonly scheduledAt?: string;

  @IsEnum(AppointmentStatus)
  @IsOptional()
  readonly status?: AppointmentStatus;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly notes?: string;
}
