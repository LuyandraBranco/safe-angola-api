import { Module } from '@nestjs/common';
import { UsersService } from '../application/users/users.service';
import { UsersController } from 'src/interface/users/users.controller';
import { UsersRepository } from 'src/infra/repositories/users.repository';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
