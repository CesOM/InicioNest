import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';

import { CreateWashServiceDto } from './dto/create-wash-service.dto';
import { UpdateWashServiceDto } from './dto/update-wash-service.dto';
import { WashServicesService } from './wash-services.service';

@Controller('wash-services')
export class WashServicesController {
  constructor(private readonly washServicesService: WashServicesService) {}

  @Get()
  findAll() {
    return this.washServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.washServicesService.findOneById(id);
  }

  @Post()
  create(@Body() createWashServiceDto: CreateWashServiceDto) {
    return this.washServicesService.create(createWashServiceDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWashServiceDto: UpdateWashServiceDto,
  ) {
    return this.washServicesService.update(id, updateWashServiceDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.washServicesService.remove(id);
  }
}
