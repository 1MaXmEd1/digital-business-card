-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "github" TEXT,
    "linkedin" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
