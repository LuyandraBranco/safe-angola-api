import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../application/auth/auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.validateUser(body.email, body.password);
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
