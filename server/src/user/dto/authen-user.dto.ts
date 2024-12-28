import { IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class AuthenticationDto {
    @ApiProperty({
        description: 'The username of the user',
        example: 'username1234',
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'password',
        example: 'abcd12345',
    })
    @IsNotEmpty()
    @Min(8)
    password: string;
}
