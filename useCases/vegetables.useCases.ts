import { Vegetable } from '@/models/models';
import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { Actions } from '@/store/actions/actions';
import { Failure, Success } from '@/utils';

//Here we call the services and the actions from the store
export class VegetablesUseCases {
  constructor(
    private actions: Actions,
    private gardenService: GardenService
  ) {}

  async loadAllVegetables(): Promise<Success | Failure> {
    const response = await this.gardenService.getAllVegetables();
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as Vegetable[];
    this.actions.vegetablesActions.putVegetables(payload);
    return response.status;
  }

  async getAllVegetables(): Promise<Vegetable[]> {
    return this.actions.vegetablesActions.getAllVegetables();
  }
}
