import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agent?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
