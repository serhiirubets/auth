import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getUsers(): any[] {
    return this.userService.getUsers();
  }
}
