import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SkillLevel } from './skill-level.model.js';

@ObjectType()
export class Skill {
  @Field()
  name: string;

  @Field(() => SkillLevel)
  level: SkillLevel;
}
