export class User {
  id: string;
  username: string;
  password: string;
  isActive: boolean;
  role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE';
  createdAt: Date;

  constructor(
    id: string,
    username: string,
    password: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
    isActive = true,
    createdAt = new Date(),
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}
