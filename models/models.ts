// models/models.ts

export type User = {
  id: string;
  name: string;
  email: string;
  password?: string; // optionnel selon les usages
};

export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  id: string;
  name: string;
  email: string;
};

export type Vegetable = {
  name: string;
  description: string;
  caracteristiques: string[];
  semis: string[];
  plantation: string[];
  recolte: string[];
  affinites: string[];
  mauvais_voisins: string[];
};
