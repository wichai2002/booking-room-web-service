import {
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  NotFoundException,
  Req
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticationDto } from './dto/authen-user.dto'
import { UserEntity } from './entities/user.entity';
import { ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @ApiResponse({ status: 200, description: 'Get all user', type: UserEntity, isArray: true })
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get user by id', type: UserEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('/authen')
  authentication(@Body() authenticationDto: AuthenticationDto) {
    return this.userService.authen(authenticationDto);
  }

  @Get('/token/me')
  getMe(@Req() req: Request) {
    return req['userPlayload']
  };

}
