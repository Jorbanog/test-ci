import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRep: Repository<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAll() {
    return this.userRep.find();
  }

  public async create() {
    const user = this.userRep.create({
      firstName: 'dada',
      lastName: 'kek',
      isActive: true,
    });
    return this.userRep.save(user);
  }
}
