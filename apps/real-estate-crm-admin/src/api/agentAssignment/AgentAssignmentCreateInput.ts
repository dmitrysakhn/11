import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agent?: string | null;
  property?: PropertyWhereUniqueInput | null;
  role?: "Option1" | null;
};
