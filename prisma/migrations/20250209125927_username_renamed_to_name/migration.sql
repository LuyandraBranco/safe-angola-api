/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "email", "id", "isActive", "password", "role", "telephone") SELECT "createdAt", "email", "id", "isActive", "password", "role", "telephone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
