import { Vegetable } from '@/models/models';
import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { Failure, Success } from '@/utils';

//Here we call the services and the actions from the store
export class GardenUseCases {
  constructor(
    private actions: Actions,
    private gardenService: GardenService
  ) {}

  async getAllVegetables(): Promise<Failure | Vegetable[]> {
    const response = await this.gardenService.getAllVegetables();
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as Vegetable[];
    return payload;
  }
}
