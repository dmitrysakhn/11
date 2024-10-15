import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  assignedAgent?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
