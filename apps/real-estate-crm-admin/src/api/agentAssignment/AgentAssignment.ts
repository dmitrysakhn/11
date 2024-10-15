import { Property } from "../property/Property";

export type AgentAssignment = {
  agent: string | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
