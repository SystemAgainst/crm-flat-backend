import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user: User = this.userRepository.create(dto);

    await this.userRepository.save(user);

    return user;
  }

  async getAllUsers(): Promise<User[] | undefined> {
    return await this.userRepository.find();
  }
}
