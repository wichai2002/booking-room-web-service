-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_positionID_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "positionID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionID_fkey" FOREIGN KEY ("positionID") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;
