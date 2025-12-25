import { registerUserDto } from './dto/registerUserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(registerUserDto: registerUserDto) {
    console.log(registerUserDto);
    return { message: 'register' };
  }
}
