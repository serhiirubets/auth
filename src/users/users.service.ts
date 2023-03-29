import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any[] {
    return [{ id: 1, name: 'test 4' }]
  }
}
