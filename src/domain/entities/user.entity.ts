export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  telephone: string;
  isActive: boolean;
  role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE';
  createdAt: Date;

  constructor(
    id: string,
    username: string,
    email: string,
    password: string,
    telephone: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
    isActive = true,
    createdAt = new Date(),
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.telephone = telephone;
    this.role = role;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}
