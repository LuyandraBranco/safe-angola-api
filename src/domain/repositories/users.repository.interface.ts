import { User } from '../entities/user.entity';

export interface IUsersRepository {
  findByUsername(username: string): Promise<any>;
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  update(id: string, data: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
  deactivate(id: string): Promise<User>;
}
