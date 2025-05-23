import { UserServices } from "@/services/user.services";
import { Actions } from "@/store/actions/actions";
import { CreateUserRequest, User } from "@/models/models";

//Here we call the services and the actions from the store
export class UserUseCases {
    constructor(
        private actions: Actions,
        private userServices: UserServices
    ) {}

    createUserExemple(){
        this.userServices.createUserExemple("toto")
    }

    // Nouvelle méthode pour créer un utilisateur
    async createUser(userData: CreateUserRequest) {
        try {
            this.actions.userActions.setLoadingAction(true);
            this.actions.userActions.setErrorAction(null);
            
            const response = await this.userServices.createUser(userData);
            
            if (response.status == "Success" && response.payload) {
                const newUser: User = {
                    id: response.payload.id,
                    name: response.payload.name,
                    email: response.payload.email
                };
                
                this.actions.userActions.addUserAction(newUser);
                this.actions.userActions.setCurrentUserAction(newUser);
                return true;
            } else {
                this.actions.userActions.setErrorAction(response.message || "Échec de la création de l'utilisateur");
                return false;
            }
        } catch (error) {
            this.actions.userActions.setErrorAction("Une erreur est survenue");
            return false;
        } finally {
            this.actions.userActions.setLoadingAction(false);
        }
    }

    increment(){
        this.actions.incrementAction()
    }

    getNumber() {
        this.actions.getNumber();
    }
}