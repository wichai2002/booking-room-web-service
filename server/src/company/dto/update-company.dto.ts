import { PartialType } from '@nestjs/swagger';
import { CreateCompanyDto, CreateDepartmentDto, CreatePositionDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}

export class UpdatePositionDto extends PartialType(CreatePositionDto) {}