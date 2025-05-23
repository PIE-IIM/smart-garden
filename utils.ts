export type Success = "Success";

export type Failure = "Failure";

export type ResAction = {
  payload: unknown;
  status: Success | Failure;
};

export class Http {
  constructor(private baseUrl: string = "http://localhost:3000") {}

  async post(path: string, payload?: object | null): Promise<ResAction> {
    try {
      const response = await fetch(`${this.baseUrl + path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload ?? {}),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        return {
          payload: errorData || "Une erreur est survenue",
          status: "Failure",
        };
      }
      const data = await response.json();
      return {
        payload: data,
        status: "Success",
      };
    } catch (error) {
      console.error('Erreur HTTP:', error);
      return {
        payload: "Erreur de connexion au serveur",
        status: "Failure",
      };
    }
  }

  async get(path: string): Promise<ResAction> {
    try {
      const response = await fetch(`${this.baseUrl + path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        return {
          payload: errorData || "Une erreur est survenue",
          status: "Failure",
        };
      }
      const data = await response.json();
      return {
        payload: data,
        status: "Success",
      };
    } catch (error) {
      console.error('Erreur HTTP:', error);
      return {
        payload: "Erreur de connexion au serveur",
        status: "Failure",
      };
    }
  }

  async patch(path: string, payload: object | null): Promise<ResAction> {
    try {
      const response = await fetch(`${this.baseUrl + path}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload ?? {}),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        return {
          payload: errorData || "Une erreur est survenue",
          status: "Failure",
        };
      }
      const data = await response.json();
      return {
        payload: data,
        status: "Success",
      };
    } catch (error) {
      console.error('Erreur HTTP:', error);
      return {
        payload: "Erreur de connexion au serveur",
        status: "Failure",
      };
    }
  }
}