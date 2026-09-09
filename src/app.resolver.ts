import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  appHello(): string {
    console.log('hello');

    return 'hello';
  }
}
