ALTER TABLE "Experience"
ADD COLUMN "achievements" TEXT[],
ADD COLUMN "endDate" TIMESTAMP(3),
ADD COLUMN "startDate" TIMESTAMP(3);

UPDATE "Experience"
SET
  "startDate" = '2024-07-01T00:00:00.000Z',
  "endDate" = '2025-07-31T00:00:00.000Z',
  "achievements" = ARRAY[]::TEXT[];

ALTER TABLE "Experience"
ALTER COLUMN "startDate" SET NOT NULL,
ALTER COLUMN "achievements" SET NOT NULL;
