/*
  Warnings:

  - Added the required column `name` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "name" VARCHAR(150) NOT NULL;
