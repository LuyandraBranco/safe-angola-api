import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { User } from 'src/domain/entities/user.entity';
import { IUsersService } from '../interfaces/users.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(
    username: string,
    email: string,
    password: string,
    telephone: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(
      crypto.randomUUID(),
      username,
      email,
      hashedPassword,
      telephone,
      role,
      true,
      new Date(),
    );

    return this.usersRepository.create(user);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.usersRepository.findById(id);
  }

  async getAllUsers(): Promise<User[] | null> {
    return this.usersRepository.findAll();
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.usersRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async deactivateUser(id: string): Promise<User> {
    return this.usersRepository.deactivate(id);
  }
}
