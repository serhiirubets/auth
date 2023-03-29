import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  
  async createUser(dto: CreateUserDto): Promise<User>  {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getUsers(): Promise<User[]> {
    const user = await this.userRepository.findAll();
    return user;
  }
}
