import { Http, ResAction } from "@/utils";
import { CreateUserRequest } from "@/models/models";

//Here we use http service and we interact with APIs
export class UserServices {
  constructor(private http: Http) {}

  async createUser(userData: CreateUserRequest): Promise<ResAction> {
    // Envoi des données
    const response = await this.http.post("/createUser", userData);
    return response;
  }

  async createUserExemple(name: string): Promise<ResAction> {
    const response = await this.http.post("path", {name: name});
    return response;
  }
}
