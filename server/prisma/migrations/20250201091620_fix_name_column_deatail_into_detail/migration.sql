/*
  Warnings:

  - You are about to drop the column `deatail` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "deatail",
ADD COLUMN     "detail" TEXT;
