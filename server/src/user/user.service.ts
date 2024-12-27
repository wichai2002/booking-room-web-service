import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from '../utils/password'
import {UserEntity} from './entities/user.entity'

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

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
    })
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity(user));
  }

  findOne(id: number) {
    return this.prisma.user.findUnique(
      {
        where: {
          id: id
        }
      }
    )
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
