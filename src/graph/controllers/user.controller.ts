import { Controller, Get, Post, Param, Body, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('v1/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post('create')
  async create(@Body() body: User) {
    return await this.service.create(body);
  }

  @Post('authenticate')
  async authenticate(@Body() body: CreateUserDto) {
    return await this.service.authenticate(body);
  }
}
