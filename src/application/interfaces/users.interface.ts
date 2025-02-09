import { User } from 'src/domain/entities/user.entity';

export interface IUsersService {
  createUser(username: string, password: string, role: string): Promise<User>;
  getAllUsers(): Promise<User[] | null>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, data: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
  deactivateUser(id: string): Promise<User>;
}
