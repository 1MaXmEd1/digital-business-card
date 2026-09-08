import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  // constructor(private readonly prismaService: PrismaService) {}
  // async getProfile() {
  //   const profile = await this.prismaService.profile.findFirst({
  //     select: {
  //       name: true,
  //       description: true,
  //       github: true,
  //       skills: {
  //         select: {
  //           name: true,
  //           level: true,
  //         },
  //       },
  //       experience: {
  //         select: {
  //           company: true,
  //           position: true,
  //           startDate: true,
  //           endDate: true,
  //           achievements: true,
  //         },
  //       },
  //       projects: {
  //         select: {
  //           name: true,
  //           url: true,
  //         },
  //       },
  //     },
  //   });

  //   if (!profile) {
  //     throw new NotFoundException();
  //   }

  //   return profile;
  // }

  async getProfile() {
  return {
    name: 'Test',
    description: 'Test',
    github: 'https://github.com/test',
    skills: [],
    experience: [],
    projects: [],
  };
}
}
