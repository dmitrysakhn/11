import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  assignedAgent?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
