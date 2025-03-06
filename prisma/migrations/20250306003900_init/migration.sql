-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Interviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project_name" TEXT NOT NULL,
    "tech_stack" TEXT NOT NULL,
    "rounds" INTEGER NOT NULL,
    "employee_id" TEXT NOT NULL,
    "helper_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tech_stack" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Candidates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tech_stack" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "feedback" TEXT NOT NULL
);
