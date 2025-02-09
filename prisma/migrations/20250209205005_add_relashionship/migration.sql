/*
  Warnings:

  - You are about to drop the column `nameUser` on the `AccidentReport` table. All the data in the column will be lost.
  - You are about to drop the column `telephoneUser` on the `AccidentReport` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AccidentReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "AccidentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AccidentReport" ("createdAt", "id", "status") SELECT "createdAt", "id", "status" FROM "AccidentReport";
DROP TABLE "AccidentReport";
ALTER TABLE "new_AccidentReport" RENAME TO "AccidentReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
