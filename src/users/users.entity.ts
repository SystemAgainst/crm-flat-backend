import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class User {
  @ApiProperty({example: 'cc212e16-0000-0000-a90c-287688817b98', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @ApiProperty({example: 'test@mail.ru', description: 'Почтовый адрес'})
  @Column({ unique: true })
  email: string;

  @ApiProperty({example: 'test', description: 'Пароль'})
  @Column()
  password: string;

  @ApiProperty({example: '2024-02-25 13:42:59.746314', description: 'Пользователь создан'})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({example: '2024-02-25 13:42:59.746314', description: 'Пользователь обновлен'})
  @UpdateDateColumn()
  updatedAt: Date;
}