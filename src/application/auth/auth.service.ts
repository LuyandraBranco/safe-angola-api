import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { IAuthService } from '../interfaces/auth.interface';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

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
