import { Vegetable } from '@/models/models';
import { GardenService } from '@/services/garden.service';
import { UserService } from '@/services/user.service';
import { VegetablesService } from '@/services/vegetables.service';
import { Actions } from '@/store/actions/actions';
import { Failure, Success } from '@jaslay/http';

//Here we call the services and the actions from the store
export class VegetablesUseCases {
  constructor(
    private actions: Actions,
    private vegetableService: VegetablesService
  ) {}

  async loadAllVegetables(): Promise<Success | Failure> {
    const response = await this.vegetableService.getAllVegetables();
    if (response.status === 'Failure') {
      return response.status;
    }
    const payload = response.payload as Vegetable[];
    this.actions.vegetablesActions.putVegetables(payload);
    return response.status;
  }

  getAllVegetables(): Vegetable[] {
    return this.actions.vegetablesActions.getAllVegetables;
  }
}
