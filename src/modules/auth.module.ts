import { Module } from '@nestjs/common';
import { PrismaService } from '../infra/database/prisma.service';
import { AuthService } from '../application/auth/auth.service';
import { AuthController } from '../interface/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../application/auth/jwt.strategy';
import { UsersRepository } from '../infra/repositories/users.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService, UsersRepository],
})
export class AuthModule {}
