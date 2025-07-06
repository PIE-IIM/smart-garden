import { Http, ResAction } from '@/utils';
import { CreateUserRequest, CreateUserResponse } from '@/models/models';
import bcrypt from 'bcryptjs';

//Here we use http service and we interact with APIs
export class UserServices {
  constructor(private http: Http) {}

  async createUser(userData: CreateUserRequest): Promise<ResAction> {
    const response = await this.http.post('/api/signup', userData);
    console.log(response);
    return response;
  }
}
