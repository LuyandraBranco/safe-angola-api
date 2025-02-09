import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async createUser(@Body() body) {
    return this.authService.createUser(body.username, body.password, body.role);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.authService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() body) {
    return this.authService.updateUser(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/deactivate')
  async deactivateUser(@Param('id') id: string) {
    return this.authService.deactivateUser(id);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.authService.validateUser(body.username, body.password);
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
