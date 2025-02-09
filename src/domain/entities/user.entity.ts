export class User {
  id: string;
  username: string;
  password: string;
  role: 'user' | 'admin' | 'ambulance' | 'police';

  constructor(id: string, username: string, password: string, role: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role as 'user' | 'admin' | 'ambulance' | 'police';
  }
}
