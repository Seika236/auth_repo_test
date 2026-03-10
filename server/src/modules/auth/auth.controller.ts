import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../DTO/user/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async registration(@Body() createUserDTO: CreateUserDto) {
    const { email, password, login } = createUserDTO;
    return await this.authService.registration(email, password, login);
  }
}
