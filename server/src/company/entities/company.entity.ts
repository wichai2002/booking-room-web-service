import { ApiProperty } from "@nestjs/swagger";

export class Company { }

export class DepartmentEntity {
    constructor(partial: Partial<DepartmentEntity>) { Object.assign(this, partial); }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}

export class PositionEntity {
    constructor(partial: Partial<PositionEntity>) { Object.assign(this, partial); }
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    departmentId: number;
}