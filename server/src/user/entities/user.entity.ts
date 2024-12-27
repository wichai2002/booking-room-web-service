import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    fullName: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    mobile: string;

    @Exclude()
    @ApiProperty()
    password: string;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty()
    image: string | null;

    @ApiProperty()
    isStaff: boolean;

    @ApiProperty()
    isAdmin: boolean;

    @ApiProperty()
    staffCode: string | null;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updateAt: Date;

    @ApiProperty()
    positionID: number | null;
}
