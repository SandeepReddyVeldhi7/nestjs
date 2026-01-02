import { UserService } from 'src/user/user.service';
import { registerUserDto } from './dto/registerUserDto';
import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(registerUserDto: registerUserDto) {
    console.log(registerUserDto);
    const hash = await bcrypt.hash(registerUserDto.password, 10);

    return this.userService.creatUser({ ...registerUserDto, password: hash });
  }
}
