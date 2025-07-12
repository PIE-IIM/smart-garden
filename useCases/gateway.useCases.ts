import { VegetablesUseCases } from './vegetables.useCases';
import { UserUseCases } from './user.useCases';

export class GatewayUseCases {
  constructor(
    public userUseCases: UserUseCases,
    public vegetablesUseCases: VegetablesUseCases
  ) {}
}
