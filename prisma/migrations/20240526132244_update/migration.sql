/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskName` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `labourNameId` to the `Labour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Labour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskNameId_fkey";

-- DropForeignKey
ALTER TABLE "TaskComponent" DROP CONSTRAINT "TaskComponent_labourId_fkey";

-- DropForeignKey
ALTER TABLE "TaskComponent" DROP CONSTRAINT "TaskComponent_materialId_fkey";

-- DropForeignKey
ALTER TABLE "TaskComponent" DROP CONSTRAINT "TaskComponent_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TaskName" DROP CONSTRAINT "TaskName_taskCategoryId_fkey";

-- AlterTable
ALTER TABLE "Labour" ADD COLUMN     "labourNameId" TEXT NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Material" ADD COLUMN     "quantity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "TaskCategory";

-- DropTable
DROP TABLE "TaskComponent";

-- DropTable
DROP TABLE "TaskName";

-- CreateTable
CREATE TABLE "LabourCategory" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabourCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabourName" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "labourCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabourName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabourMaterialRelation" (
    "id" TEXT NOT NULL,
    "labourId" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabourMaterialRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LabourName" ADD CONSTRAINT "LabourName_labourCategoryId_fkey" FOREIGN KEY ("labourCategoryId") REFERENCES "LabourCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Labour" ADD CONSTRAINT "Labour_labourNameId_fkey" FOREIGN KEY ("labourNameId") REFERENCES "LabourName"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabourMaterialRelation" ADD CONSTRAINT "LabourMaterialRelation_labourId_fkey" FOREIGN KEY ("labourId") REFERENCES "Labour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabourMaterialRelation" ADD CONSTRAINT "LabourMaterialRelation_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
