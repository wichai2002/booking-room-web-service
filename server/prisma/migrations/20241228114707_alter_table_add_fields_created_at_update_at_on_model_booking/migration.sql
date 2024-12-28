/*
  Warnings:

  - Added the required column `updateAt` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "bookingStatus" AS ENUM ('PENDING', 'BOOKED', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "remark" TEXT,
ADD COLUMN     "status" "bookingStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
