import {
    IsNotEmpty, 
    IsEmail, 
    IsAlphanumeric,
    IsDateString,
    IsOptional,
    Min,
    Max
} from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
      })
    @Max(150)
    @IsNotEmpty()
    fullName: string

    @ApiProperty({
        description: 'The username of the user',
        example: 'username1234',
      })
    @Min(6)
    @Max(80)
    @IsNotEmpty()
    username: string
    
    @ApiProperty({
        description: 'The email of user',
        example: 'wichai@gmail.com',
      })
    @IsEmail()
    email: string
    
    @ApiProperty({
        description: 'The mobile of user',
        example: '0987654321',
      })
    @Max(12)
    @IsOptional()
    mobile: string | null
    
    @ApiProperty({
        description: 'password',
        example: 'abcd12345',
      })
    @Min(8)
    @IsAlphanumeric()
    password: string
    
    @ApiProperty({
        description: 'date of birth',
        example: '2002-11-11',
      })
    @IsDateString({ strict: true }, { message: 'birthDate must be a valid date (YYYY-MM-DD)' })
    birthDate: string

    @ApiProperty({
        description: 'image path',
        example: 'www.image.com',
      })
    @IsOptional()
    image: string | null
    
    @ApiProperty({
        description: 'is staff or not',
        example: false,
      })
    @IsOptional()
    isStaff: boolean

    @ApiProperty({
        description: 'if you are staff enter staff code',
        example: "AX-09213",
      })
    @IsOptional()
    @Max(20)
    staffCode: string | null

    @ApiProperty({
        description: 'position ID',
        example: 1,
      })
    @IsOptional()
    positionID: number | null
}
