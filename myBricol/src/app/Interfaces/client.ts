import { Gender } from './gender';
export interface Client {
  clientId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  yearsOfBirth: Date;
  gender: Gender;
}
