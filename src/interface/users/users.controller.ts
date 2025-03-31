import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UsersService } from 'src/application/users/users.service';
import { CreateUserDto } from 'src/application/users/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post('create')
  async createUser(@Body() body: CreateUserDto) {
    if (!body.name || !body.password || !body.role) {
      throw new BadRequestException('Name, password, and role are required.');
    }
    return this.userService.createUser(body.name, body.email, body.password, body.phone, body.role);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('user/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() body) {
    return this.userService.updateUser(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/deactivate')
  async deactivateUser(@Param('id') id: string) {
    return this.userService.deactivateUser(id);
  }
}
