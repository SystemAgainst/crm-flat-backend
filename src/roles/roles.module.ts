import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.entity';
import { User } from '../users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, User])
  ],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [
    RolesService,
  ]
})
export class RolesModule {}
