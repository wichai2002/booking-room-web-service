/*
  Warnings:

  - You are about to drop the column `typeId` on the `Table` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Table" DROP CONSTRAINT "Table_typeId_fkey";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Table" DROP COLUMN "typeId";

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "RoomType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
