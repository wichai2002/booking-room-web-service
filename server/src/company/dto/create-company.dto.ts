import { IsString, IsNotEmpty, Max } from 'class-validator';

export class CreateCompanyDto {}

export class CreateDepartmentDto {
    @IsString()
    @IsNotEmpty()
    @Max(100)
    name: string;
}

export class CreatePositionDto {
    @IsString()
    @IsNotEmpty()
    @Max(100)
    name: string;

    @IsNotEmpty()
    departmentId: number;
}
