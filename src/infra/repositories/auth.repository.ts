import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IAuthRepository } from 'src/domain/repositories/auth.repository.interface';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUsername(username: string): Promise<any> {
    return await this.prisma.user.findUnique({ where: { username } });
  }
}
