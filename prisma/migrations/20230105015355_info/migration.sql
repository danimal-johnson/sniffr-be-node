-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "activity" TEXT NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temperaments" (
    "id" SERIAL NOT NULL,
    "temperament" TEXT NOT NULL,

    CONSTRAINT "temperaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sizes" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breeds" (
    "id" SERIAL NOT NULL,
    "breed" TEXT NOT NULL,

    CONSTRAINT "breeds_pkey" PRIMARY KEY ("id")
);
