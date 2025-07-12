import { GardenUseCases } from './garden.useCases';
import { UserUseCases } from './user.useCases';

export class GatewayUseCases {
  constructor(
    public userUseCases: UserUseCases,
    public gardenUseCases: GardenUseCases
  ) {}
}
