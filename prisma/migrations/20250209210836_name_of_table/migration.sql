/*
  Warnings:

  - You are about to drop the `AccidentReport` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AccidentReport";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "accidentReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "accidentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
