"use server";

import prisma from "@/lib/prisma";

/**
 * Fetch all categories ordered by their predefined order.
 */
export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        order: "asc",
      },
    });
    return { success: true, data: categories };
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return { success: false, error: "Failed to fetch categories" };
  }
}

/**
 * Fetch all products, optionally filtered by branch availability.
 * @param branch 'kalawana' | 'ratnapura'
 */
export async function getProducts(branch?: string) {
  try {
    const whereClause: any = {};
    if (branch === "kalawana") {
      whereClause.availableKalawana = true;
    } else if (branch === "ratnapura") {
      whereClause.availableRatnapura = true;
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: products };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { success: false, error: "Failed to fetch products" };
  }
}

/**
 * Fetch all services (since services are Ratnapura only usually, 
 * we just fetch all of them and filter in UI if needed)
 */
export async function getServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return { success: true, data: services };
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return { success: false, error: "Failed to fetch services" };
  }
}
