import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IUsersRepository } from '../../domain/repositories/users.repository.interface';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    this.prisma.user.delete({ where: { id } });
  }

  async deactivate(id: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
