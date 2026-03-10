import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Некорректный формат почты' })
  readonly email: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
  @MaxLength(32, { message: 'Пароль слишком длинный' })
  readonly password: string;

  @IsString({ message: 'Login должен быть строкой' })
  readonly login: string;
}
