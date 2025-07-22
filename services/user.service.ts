import { QuickHttp, ResAction } from '@jaslay/http';

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserPayload = {
  email: string;
  password: string;
};

//Here we use http service and we interact with APIs
export class UserService {
  constructor(private quickHttp: QuickHttp) {}

  async createUser(payload: CreateUserPayload): Promise<ResAction> {
    const response = await this.quickHttp.post('/api/signup', payload);
    return response;
  }

  async login(payload: LoginUserPayload): Promise<ResAction> {
    const response = await this.quickHttp.post('/api/login', payload);
    return response;
  }
}
