/*
  Warnings:

  - Added the required column `unit` to the `LabourName` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LabourName" ADD COLUMN     "unit" VARCHAR(50) NOT NULL;
