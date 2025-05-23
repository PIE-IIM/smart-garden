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
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload ?? {}),
      });
  
      if (!response.ok) {
        return {
          payload: await response.json(),
          status: "Failure",
        };
      }
      return {
        payload: await response.json(),
        status: "Success",
      };
    } catch {
      return {
        payload: null,
        status: "Failure",
      };
    }
  }

  async get(path: string): Promise<ResAction> {
    const response = await fetch(`${this.baseUrl + path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return {
        payload: await response.json(),
        status: "Failure",
      };
    }
    return {
      payload: await response.json(),
      status: "Success",
    };
  }

  async patch(path: string, payload: object | null): Promise<ResAction> {
    const response = await fetch(`${this.baseUrl + path}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload ?? {}),
      });
  
      if (!response.ok) {
        return {
          payload: await response.json(),
          status: "Failure",
        };
      }
      return {
        payload: await response.json(),
        status: "Success",
      };
  }
}