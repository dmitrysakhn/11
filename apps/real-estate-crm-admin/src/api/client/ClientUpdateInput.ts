import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  assignedAgent?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
