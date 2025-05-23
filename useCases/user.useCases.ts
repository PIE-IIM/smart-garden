import { UserServices } from "@/services/user.services";
import { Actions } from "@/store/actions/actions";

//Here we call the services and the actions from the store
export class UserUseCases {
    constructor(
        private actions: Actions,
        private userServices: UserServices
    ) {}

    createUser(){
        this.userServices.createUserExemple("toto")
    }

    increment(){
        this.actions.incrementAction()
    }

    getNumber() {
        this.actions.getNumber();
    }
}