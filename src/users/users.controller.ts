import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UserService } from './users.service';

@ApiTags('Users')
@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users '})
  @ApiResponse({ status: 200, type: [User] })
  @Get('/users')
  getAll(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Create user '})
  @ApiResponse({ status: 200, type: User })
  @Post('/users')
  create (@Body() userDto: CreateUserDto): Promise<User> {
    console.log('CTRL', userDto);
    return this.userService.createUser(userDto);
  }
}
