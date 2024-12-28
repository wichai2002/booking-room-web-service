import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticationDto } from './dto/authen-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleNotFoundError } from './../prisma/prisma.utills'

// Utils
import { hashPassword, comparePassword } from '../utils/password';
import { generateJwtToken } from './../utils/jwt';


// Entity
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    // hash passwod before save into database
    const hashedPassword = await hashPassword(createUserDto.password);
    console.log(`Hashed Passowd ${createUserDto.password} to ${hashedPassword}`);

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        birthDate: new Date(createUserDto.birthDate)
      }
    });
    
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user));
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({ where: { id: id } })
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return new UserEntity(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.prisma.user.update({
        where: { id: id },
        data: updateUserDto
      })

      return new UserEntity(updatedUser);
    }catch (error) {
      handleNotFoundError(error, 'User', id);
    }
  }

  // soft delete user by set isActive to false
  async remove(id: number): Promise<UserEntity> {
    const updateUserDto = new UpdateUserDto({ isActive: false });

    try {
      const unActiveUser = await this.prisma.user.update(
        {
          where: { id: id },
          data: updateUserDto
        }
      );
      return new UserEntity(unActiveUser);
    } catch (error) {
      handleNotFoundError(error, 'User', id);
    }
  }

  // hard delete user from database
  destroy(id: number) {
    try {
      return this.prisma.user.delete({
        where: { id: id }
      });
    }catch (error) {
      handleNotFoundError(error, 'User', id);
    }
  }

  async authen(authenUserDto: AuthenticationDto): Promise<string> {
    // find user by username
    const user = await this.prisma.user.findUnique({
      where: {
        username: authenUserDto.username,
        isActive: true
      }
    });

    // if user not found throw status code 404 with message
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // compare password from request with hashed password in database
    const isPasswordMatch = await comparePassword(authenUserDto.password, user.password);

    // if password not match throw status code 401 with message
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Username or Password is not correct');
    }

    const token = await generateJwtToken(user);

    return token;
  }
}
