import { Hero } from "./hero";
import { Observable } from "rxjs";

export interface Team {
    id: number;
    name: string;
    amount: number;
    members: Hero[];
  }