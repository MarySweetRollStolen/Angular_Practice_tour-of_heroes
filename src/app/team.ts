import { Hero } from "./hero";

export interface Team {
    id: number;
    name: string;
    amount: number;
    members: Hero[];
  }