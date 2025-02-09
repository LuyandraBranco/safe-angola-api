import { Injectable } from '@nestjs/common';
import { IAuthService } from '../interfaces/auth.interface';
import { User } from 'src/domain/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from 'src/infra/repositories/auth.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  generateJwtToken(user: User): string {
    const payload = { id: user.id, email: user.email, role: user.role };
    return this.jwtService.sign(payload);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.authRepository.findByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...userWithoutPassword } = user;
      const accessToken = this.generateJwtToken(userWithoutPassword);

      const userData = { ...userWithoutPassword, accessToken };
      return userData;
    }
    return null;
  }
}
