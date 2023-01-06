/*
  Warnings:

  - You are about to drop the column `user_id` on the `dogs` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `dogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dogs" DROP CONSTRAINT "dogs_user_id_fkey";

-- AlterTable
ALTER TABLE "dogs" DROP COLUMN "user_id",
ADD COLUMN     "owner_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
