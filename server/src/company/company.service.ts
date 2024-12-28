import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto, CreateDepartmentDto, CreatePositionDto } from './dto/create-company.dto';
import { UpdateCompanyDto, UpdateDepartmentDto, UpdatePositionDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// prisma utills
import { handleNotFoundError } from './../prisma/prisma.utills'

// entities
import { DepartmentEntity, PositionEntity } from './entities/company.entity'


@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDepartmentDto: CreateDepartmentDto): Promise<DepartmentEntity> {
    const createdDepartment = await this.prisma.department.create({ data: createDepartmentDto });
    return new DepartmentEntity(createdDepartment);
  }

  async findAll(): Promise<DepartmentEntity[]> {
    const departments = await this.prisma.department.findMany();
    return departments.map(department => new DepartmentEntity(department));
  }

  async findOne(id: number): Promise<DepartmentEntity> {
    const department = await this.prisma.department.findUnique({ where: { id: id } });

    if (!department) throw new NotFoundException(`Department with id ${id} not found`);

    return new DepartmentEntity(department);
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    try {
      const updatedDepartment = await this.prisma.department.update({
        where: { id },
        data: updateCompanyDto
      })
      return new DepartmentEntity(updatedDepartment);
    } catch (error) {
      handleNotFoundError(error, 'Department', id);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}


@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPosotionDto: CreatePositionDto): Promise<PositionEntity> {
    const createdPosition = await this.prisma.position.create({
      data: createPosotionDto
    });
    return new PositionEntity(createdPosition);
  }

  async findAll(): Promise<PositionEntity[]> {
    const positions = await this.prisma.position.findMany();
    return positions.map(position => new PositionEntity(position));
  }

  async findOne(id: number): Promise<PositionEntity> {
    const position = await this.prisma.position.findUnique({ where: { id } });

    if (!position) throw new NotFoundException(`Position with id ${id} not found`);

    return new PositionEntity(position);
  }

  async update(id: number, updatePosotionDto: UpdatePositionDto): Promise<PositionEntity> {
    try {
      const updatedPosition = await this.prisma.position.update({
        where: { id },
        data: updatePosotionDto
      });
      return new PositionEntity(updatedPosition);

    } catch (error) {
      handleNotFoundError(error, 'Position', id);
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} position`;
  }
}