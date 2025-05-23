import { Http, ResAction } from "@/utils";

//Here we use http service and we interact with APIs
export class UserServices {
  constructor(private http: Http) {}

  async createUserExemple(name: string): Promise<ResAction> {
    const response = await this.http.post("path", {name: name});
    response.payload
    return response
  }
}
