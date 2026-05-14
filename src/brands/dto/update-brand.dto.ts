// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    name: string;
}
