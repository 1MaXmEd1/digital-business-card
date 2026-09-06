import { Module } from '@nestjs/common';
import { DatabaseInitializerService } from './database-initializer.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [DatabaseInitializerService],
})
export class DatabaseInitializerModule {}
