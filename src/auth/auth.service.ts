import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(userDto: CreateUserDto) {
    // TODO
    return undefined;
  }

  async registration(userDto: CreateUserDto) {
    // TODO
    return undefined
  }
}
