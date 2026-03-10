import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers(): Promise<any[]> {
    return await this.prismaService.user.findMany();
  }
}
