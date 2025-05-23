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

    // Méthode pour créer un utilisateur
    async createUser(userData: CreateUserRequest) {
        try {
            this.actions.userActions.setLoadingAction(true);
            this.actions.userActions.setErrorAction(null);
            
            const response = await this.userServices.createUser(userData);
            
            if (response.status === "Success" && response.payload) {
                const payload = response.payload as any;
                const newUser: User = {
                    id: payload.id,
                    name: payload.name,
                    email: payload.email
                };
                
                this.actions.userActions.setUserAction(newUser);
                return true;
            } else {
                const errorMessage = response.payload ? String(response.payload) : "Échec de la création de l'utilisateur";
                this.actions.userActions.setErrorAction(errorMessage);
                return false;
            }
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
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