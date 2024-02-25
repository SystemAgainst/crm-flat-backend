import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto);
  }

  @Get('/:value')
  getUserByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({summary: 'Получить все роли'})
  @ApiResponse({status: 200, type: [Role]})
  @Get()
  getAllRoles() {
    return this.rolesService.getAllRoles();
  }
}
