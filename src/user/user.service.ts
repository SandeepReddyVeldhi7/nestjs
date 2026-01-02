import { registerUserDto } from './../auth/dto/registerUserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  creatUser(registerUserDto: registerUserDto) {
    console.log(registerUserDto);
    return 'This action adds a new user';
  }
}
