// models/models.ts

export type User = {
  name: string;
  email: string;
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

export type LoginInfos = {
  token: string;
  userName: string;
  email: string;
};
