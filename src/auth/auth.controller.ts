import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
  ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    LoginDto: LoginDto
  ) {
    return this.authService.login(LoginDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  profile() {
    return 'profile';
  }
}
