import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  //delete all products
  await prisma.product.deleteMany();

  //create products

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully");
}

main();

// run this with npx tsx ./db/seed
