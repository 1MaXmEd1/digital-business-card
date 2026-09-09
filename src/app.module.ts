import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { DatabaseInitializerModule } from './database/database-initializer.module.js';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      introspection: true,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: true,
          includeCookies: true,
          headers: {
            'apollo-require-preflight': 'true',
          },
        }),
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProfileModule,
    DatabaseInitializerModule,
  ],
})
export class AppModule {}
