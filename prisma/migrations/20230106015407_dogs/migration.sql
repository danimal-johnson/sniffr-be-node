-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_name" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" TEXT,
    "user_pic" TEXT,
    "user_bio" TEXT,
    "role" TEXT,
    "max_dist" INTEGER,
    "zip_code" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dog_name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "breed_id" INTEGER,
    "size_id" INTEGER,
    "temperament_id" INTEGER,
    "activity1_id" INTEGER,
    "activity2_id" INTEGER,
    "activity3_id" INTEGER,
    "is_vaccinated" BOOLEAN,
    "is_fixed" BOOLEAN,
    "dog_pic" TEXT,
    "dog_bio" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
