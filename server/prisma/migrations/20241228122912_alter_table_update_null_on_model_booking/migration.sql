-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_cancelledBy_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "cancelledBy" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_cancelledBy_fkey" FOREIGN KEY ("cancelledBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
