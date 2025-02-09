export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  isActive: boolean;
  role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE';
  createdAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    telephone: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
    isActive = true,
    createdAt = new Date(),
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.telephone = telephone;
    this.role = role;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }
}
