/*
  Warnings:

  - Made the column `userId` on table `accidentReport` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_accidentReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "accidentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_accidentReport" ("createdAt", "id", "latitude", "longitude", "status", "userId") SELECT "createdAt", "id", "latitude", "longitude", "status", "userId" FROM "accidentReport";
DROP TABLE "accidentReport";
ALTER TABLE "new_accidentReport" RENAME TO "accidentReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
