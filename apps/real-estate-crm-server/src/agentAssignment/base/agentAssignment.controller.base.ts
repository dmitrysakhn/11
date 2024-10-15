/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AgentAssignmentService } from "../agentAssignment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AgentAssignmentCreateInput } from "./AgentAssignmentCreateInput";
import { AgentAssignment } from "./AgentAssignment";
import { AgentAssignmentFindManyArgs } from "./AgentAssignmentFindManyArgs";
import { AgentAssignmentWhereUniqueInput } from "./AgentAssignmentWhereUniqueInput";
import { AgentAssignmentUpdateInput } from "./AgentAssignmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AgentAssignmentControllerBase {
  constructor(
    protected readonly service: AgentAssignmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AgentAssignment })
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AgentAssignmentCreateInput,
  })
  async createAgentAssignment(
    @common.Body() data: AgentAssignmentCreateInput
  ): Promise<AgentAssignment> {
    return await this.service.createAgentAssignment({
      data: {
        ...data,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,
      },
      select: {
        agent: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        role: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AgentAssignment] })
  @ApiNestedQuery(AgentAssignmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agentAssignments(
    @common.Req() request: Request
  ): Promise<AgentAssignment[]> {
    const args = plainToClass(AgentAssignmentFindManyArgs, request.query);
    return this.service.agentAssignments({
      ...args,
      select: {
        agent: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        role: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput
  ): Promise<AgentAssignment | null> {
    const result = await this.service.agentAssignment({
      where: params,
      select: {
        agent: true,
        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        role: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AgentAssignmentUpdateInput,
  })
  async updateAgentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput,
    @common.Body() data: AgentAssignmentUpdateInput
  ): Promise<AgentAssignment | null> {
    try {
      return await this.service.updateAgentAssignment({
        where: params,
        data: {
          ...data,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,
        },
        select: {
          agent: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AgentAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AgentAssignment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAgentAssignment(
    @common.Param() params: AgentAssignmentWhereUniqueInput
  ): Promise<AgentAssignment | null> {
    try {
      return await this.service.deleteAgentAssignment({
        where: params,
        select: {
          agent: true,
          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          role: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
