import { Http, ResAction } from "@/utils";
import { CreateUserRequest, CreateUserResponse } from "@/models/models";
import bcrypt from 'bcryptjs';

//Here we use http service and we interact with APIs
export class UserServices {
  constructor(private http: Http) {}

  async createUser(userData: CreateUserRequest): Promise<ResAction> {
    // Hash du mot de passe avant l'envoi
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Création d'un nouvel objet avec le mot de passe hashé
    const userDataWithHashedPassword = {
      ...userData,
      password: hashedPassword
    };

    // Envoi des données avec le mot de passe hashé
    const response = await this.http.post("/createUser", userDataWithHashedPassword);
    return response;
  }

  async createUserExemple(name: string): Promise<ResAction> {
    const response = await this.http.post("path", {name: name});
    response.payload
    return response
  }
}
