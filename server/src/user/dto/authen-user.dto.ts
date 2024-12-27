import { IsNotEmpty, Min } from 'class-validator';

export class AuthenticationDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Min(8)
    password: string;
}
