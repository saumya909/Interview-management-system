/*
  Warnings:

  - You are about to drop the column `employee_id` on the `Interviews` table. All the data in the column will be lost.
  - You are about to drop the column `helper_id` on the `Interviews` table. All the data in the column will be lost.
  - Added the required column `candidate_name` to the `Interviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_name` to the `Interviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `helper_name` to the `Interviews` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project_name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "candidate_name" TEXT NOT NULL,
    "helper_name" TEXT NOT NULL,
    "tech_stack" TEXT NOT NULL,
    "rounds" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL
);
INSERT INTO "new_Interviews" ("date", "id", "project_name", "rounds", "status", "tech_stack", "time") SELECT "date", "id", "project_name", "rounds", "status", "tech_stack", "time" FROM "Interviews";
DROP TABLE "Interviews";
ALTER TABLE "new_Interviews" RENAME TO "Interviews";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
