CREATE TABLE "order" (
     id VARCHAR(255) PRIMARY KEY NOT NULL,
     name VARCHAR(255) NOT NULL,
     response_midtrans TEXT NOT NULL,
     "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
     "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);