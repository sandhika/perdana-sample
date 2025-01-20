-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "role_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Customers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cif" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_place" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "customer_id" INTEGER NOT NULL,
    CONSTRAINT "Accounts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transaction_type" INTEGER NOT NULL,
    "balance" REAL NOT NULL,
    "transaction_date" DATETIME,
    "notes" TEXT NOT NULL,
    "fraccount_id" INTEGER NOT NULL,
    "toaccount_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "event_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "log_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_transaccounts_fr" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_transaccounts_fr_A_fkey" FOREIGN KEY ("A") REFERENCES "Accounts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_transaccounts_fr_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_transaccounts_to" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_transaccounts_to_A_fkey" FOREIGN KEY ("A") REFERENCES "Accounts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_transaccounts_to_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_cif_key" ON "Customers"("cif");

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_name_key" ON "Accounts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_transaccounts_fr_AB_unique" ON "_transaccounts_fr"("A", "B");

-- CreateIndex
CREATE INDEX "_transaccounts_fr_B_index" ON "_transaccounts_fr"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_transaccounts_to_AB_unique" ON "_transaccounts_to"("A", "B");

-- CreateIndex
CREATE INDEX "_transaccounts_to_B_index" ON "_transaccounts_to"("B");
