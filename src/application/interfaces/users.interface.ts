import { User } from 'src/domain/entities/user.entity';

export interface IUsersService {
  createUser(
    name: string,
    email: string,
    password: string,
    phone: string,
    role: string,
  ): Promise<User>;
  getAllUsers(): Promise<User[] | null>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, data: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<void>;
  deactivateUser(id: string): Promise<User>;
}
