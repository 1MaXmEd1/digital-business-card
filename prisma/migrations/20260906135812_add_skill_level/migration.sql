CREATE TYPE "SkillLevel" AS ENUM ('BASIC', 'INTERMEDIATE');

ALTER TABLE "Skill"
ADD COLUMN "level" "SkillLevel";

UPDATE "Skill"
SET "level" = CASE
  WHEN "name" IN (
    'MS SQL',
    'SQL',
    'MySQL',
    'Обучение и развитие',
    'Docker Compose'
  )
  THEN 'BASIC'::"SkillLevel"
  ELSE 'INTERMEDIATE'::"SkillLevel"
END;

ALTER TABLE "Skill"
ALTER COLUMN "level" SET NOT NULL;