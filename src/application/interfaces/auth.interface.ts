import { User } from 'src/domain/entities/user.entity';

export interface IAuthService {
  validateUser(email: string, password: string): Promise<any>;
  generateJwtToken(user: User): string;
}
