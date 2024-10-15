import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  agent?: StringNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
  role?: "Option1";
};
