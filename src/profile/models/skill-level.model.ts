import { registerEnumType } from "@nestjs/graphql";
import { SkillLevel } from '../../generated/prisma/enums.js';

registerEnumType(SkillLevel, {
  name: 'SkillLevel',
});

export { SkillLevel };