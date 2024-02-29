import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    // TODO
    return undefined;
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new BadRequestException('email already exists');
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.usersService.createUser({...userDto, password: hashedPassword});

    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, roles: user.roles };

    return {
      token: this.jwtService.sign(payload)
    }
  }
}
