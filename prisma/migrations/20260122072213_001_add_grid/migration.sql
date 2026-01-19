-- CreateTable
CREATE TABLE "Grid" (
    "id" SERIAL NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "rows" INTEGER NOT NULL,
    "columns" INTEGER NOT NULL,
    "clues" JSONB NOT NULL,

    CONSTRAINT "Grid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grid_releaseDate_key" ON "Grid"("releaseDate");
