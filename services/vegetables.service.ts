import { QuickHttp, ResAction } from '@jaslay/http';

//Here we use http service and we interact with APIs
export class VegetablesService {
  constructor(private quickHttp: QuickHttp) {}

  async getAllVegetables(): Promise<ResAction> {
    const response = await this.quickHttp.get('/api/vegetables');
    return response;
  }
}
