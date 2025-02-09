import { User } from './user.entity';

export class AccidentReport {
  id: string;
  latitude: string;
  longitude: string;
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';
  createdAt: Date;
  userId?: string;
  user?: User;

  constructor(
    id: string,
    latitude: string,
    longitude: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
    userId?: string,
    user?: User,
    createdAt = new Date(),
  ) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.status = status;
    this.userId = userId;
    this.user = user;
    this.createdAt = createdAt;
  }
}
