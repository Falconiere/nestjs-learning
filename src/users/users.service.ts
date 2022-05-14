import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async removeById(id: User['id']): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(id: User['id'], user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOne(id);
  }
}
