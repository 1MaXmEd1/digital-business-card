import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { DatabaseInitializerModule } from './database/database-initializer.module.js';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { AppResolver } from './app.resolver.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // ProfileModule,
    // AppResolver,
    DatabaseInitializerModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
