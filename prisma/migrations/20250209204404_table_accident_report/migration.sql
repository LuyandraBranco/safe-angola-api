-- CreateTable
CREATE TABLE "AccidentReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameUser" TEXT NOT NULL,
    "telephoneUser" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "AccidentReport_nameUser_key" ON "AccidentReport"("nameUser");

-- CreateIndex
CREATE UNIQUE INDEX "AccidentReport_telephoneUser_key" ON "AccidentReport"("telephoneUser");
