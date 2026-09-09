import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  initialExperience,
  initialProjects,
  initialSkills,
} from './initial-data.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DatabaseInitializerService implements OnModuleInit {
  constructor(private readonly prismaService: PrismaService) {}

  async onModuleInit() {
    const profile = await this.prismaService.profile.findFirst();

    if (!profile) {
      await this.prismaService.profile.create({
        data: {
          name: 'Daniil',
          description: 'Full-Stack',
          github: 'https://github.com/1MaXmEd1',
          experience: {
            create: initialExperience,
          },
          projects: {
            create: initialProjects,
          },
          skills: {
            create: initialSkills,
          },
        },
      });
    }
  }
}
