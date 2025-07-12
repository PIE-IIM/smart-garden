import { Http, ResAction } from '@/utils';

//Here we use http service and we interact with APIs
export class GardenService {
  constructor(private http: Http) {}

  async getAllVegetables(): Promise<ResAction> {
    const response = await this.http.get('/api/vegetables');
    return response;
  }
}
