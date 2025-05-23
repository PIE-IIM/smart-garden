import { UserUseCases } from "./user.useCases";

export class GatewayUseCases {
    constructor(
        public userUseCases: UserUseCases
    ) {}
}