import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.entity';


@Entity()
export class Role {
  @ApiProperty({example: 'cc212e16-0001-0000-a90c-287688817b98', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @ApiProperty({example: 'ADMIN', description: 'Уникальноые значение роли'})
  @Column({ unique: true })
  value: string;

  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  @Column()
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];

  @ApiProperty({example: '2024-02-25 13:42:59.746314', description: 'Пользователь создан'})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({example: '2024-02-25 13:42:59.746314', description: 'Пользователь обновлен'})
  @UpdateDateColumn()
  updatedAt: Date;
}