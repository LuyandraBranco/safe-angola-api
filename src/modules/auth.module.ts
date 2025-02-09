import { Module } from '@nestjs/common';
import { AuthService } from '../application/auth/auth.service';
import { AuthController } from '../interface/auth/auth.controller';
import { UsersModule } from './users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../application/auth/jwt.strategy';
import { AuthRepository } from 'src/infra/repositories/auth.repository';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, PrismaService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
