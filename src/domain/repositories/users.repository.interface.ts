export interface IUsersRepository {
  findByUsername(username: string): Promise<any>;
}
