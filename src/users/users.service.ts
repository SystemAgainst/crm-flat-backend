import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '../roles/roles.entity';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user: User = this.userRepository.create(dto);
    const role: Role = await this.roleService.getRoleByValue("USER");

    if (role) {
      user.roles = [role];
    }

    await this.userRepository.save(user);

    return user;
  }

  async getAllUsers(): Promise<User[] | undefined> {
    return await this.userRepository.find({ relations: {roles: true }});
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
      relations: { roles: true },
    });
  }

  // TODO: Создать метод для удаления Роли (User)
}
