import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerUserDto } from './dto/registerUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: registerUserDto) {
    const result = this.authService.register(registerUserDto);
    return result;
  }
}
