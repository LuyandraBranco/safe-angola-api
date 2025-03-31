export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE';
  twoFactor: boolean
  isActive: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    role: 'USER' | 'ADMIN' | 'AMBULANCE' | 'POLICE',
    twoFactor: false,
    isActive = true,
    createdAt = new Date(),
    updateAt = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;
    this.twoFactor = twoFactor;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updateAt;
  }
}
