import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { IAuthService } from '../interfaces/auth.interface';

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
}
