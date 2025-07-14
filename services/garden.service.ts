import { Vegetable } from '@/models/models';
import { QuickHttp, ResAction } from '@jaslay/http';

export type AddVegetableToGardenPayload = {
  vegetableId: string;
};

//Here we use http service and we interact with APIs
export class GardenService {
  constructor(private quickHttp: QuickHttp) {}

  async getGardenVegetables(): Promise<ResAction> {
    const response = await this.quickHttp.get('/api/user/vegetables');
    return response;
  }

  async addVegetableToGarden(
    payload: AddVegetableToGardenPayload
  ): Promise<ResAction> {
    const response = await this.quickHttp.post('/api/user/vegetable', payload);
    return response;
  }
}
