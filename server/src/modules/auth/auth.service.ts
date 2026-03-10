import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async registration(email: string, password: string, login: string) {
    const condidate = await this.prismaService.user.findUnique({
      where: { email: email },
    });
    if (condidate) {
      throw new HttpException(
        'пользователь с таким email уже зарегистрирован',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 6);
    const user = await this.prismaService.user.create({
      data: {
        login: login,
        email: email,
        password: hashedPassword,
      },
    });

    return user;
  }
}
