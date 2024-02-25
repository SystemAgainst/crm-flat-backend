import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const user: Role = this.roleRepository.create(dto);

    await this.roleRepository.save(user);

    return user;
  }

  async getRoleByValue(value: string): Promise<Role | undefined> {
    // TODO: realized getRoleByValue(value);
    return undefined
    // return await this.roleRepository.findOne({ where: { value } });
  }
}
