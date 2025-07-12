// models/models.ts

export type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
};

export type Vegetable = {
  id?: string;
  name: string;
  description: string;
  specifications: string[];
  sowing: string[];
  plantation: string[];
  harvest: string[];
  affinity: string[];
  bad_neighbors: string[];
  images: string[];
};

export type Token = {
  token: string;
};
