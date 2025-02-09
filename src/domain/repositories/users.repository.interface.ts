import { User } from '../entities/user.entity';

export interface IUsersRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[] | null>;
  update(id: string, data: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
  deactivate(id: string): Promise<User>;
}
