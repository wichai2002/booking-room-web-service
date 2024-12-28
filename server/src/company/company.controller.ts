import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService, PositionService } from './company.service';
import { CreateDepartmentDto, CreatePositionDto } from './dto/create-company.dto';
import { UpdateCompanyDto, UpdatePositionDto } from './dto/update-company.dto';

import { ApiResponse } from '@nestjs/swagger';

// Enities
import { DepartmentEntity, PositionEntity } from './entities/company.entity';

@Controller('department')
export class DepartmentController {
  constructor(private readonly companyService: DepartmentService) {}

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) : Promise<DepartmentEntity> {
    return this.companyService.create(createDepartmentDto);
  }

  @ApiResponse({ status: 200, description: 'Get all departments', type: DepartmentEntity, isArray: true })
  @Get()
  findAll(): Promise<DepartmentEntity[]> {
    return this.companyService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get department by id', type: DepartmentEntity })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<DepartmentEntity> {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}


@Controller('position')
export class PositionController {
  constructor(private readonly companyService: PositionService) {}

  @ApiResponse({ status: 201, description: 'Create position', type: PositionEntity })
  @Post()
  create(@Body() createPosotionDto: CreatePositionDto): Promise<PositionEntity> {
    return this.companyService.create(createPosotionDto);
  }

  @ApiResponse({ status: 200, description: 'Get all positions', type: PositionEntity, isArray: true })
  @Get()
  findAll(): Promise<PositionEntity[]> {
    return this.companyService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get position by id', type: PositionEntity })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PositionEntity> {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto): Promise<PositionEntity> {
    return this.companyService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}