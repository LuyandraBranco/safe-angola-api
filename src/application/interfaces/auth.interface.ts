import { User } from 'src/domain/entities/user.entity';

export interface IAuthService {
  validateUser(username: string, password: string): Promise<any>;
  generateJwtToken(user: User): string;
}
