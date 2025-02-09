import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { User } from 'src/domain/entities/user.entity';
import { IUsersService } from '../interfaces/users.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(
    username: string,
    password: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
  ): Promise<User> {
    const user = new User(
      crypto.randomUUID(),
      username,
      password,
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
