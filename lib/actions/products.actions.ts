"use server";

// this file contains all the actions that are related to products like fetching, creating, updating, and deleting products

import { prisma } from "../../db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT, //Limit the number of products to be fetched
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data); //Convert prisma object into a regular JS object
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug: slug } });
}
