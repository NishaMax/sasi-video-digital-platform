"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAdminProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });
}

export async function getAdminProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

export async function createProduct(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const categoryId = formData.get("categoryId") as string;
    const badge = formData.get("badge") as string;
    const badgeColor = formData.get("badgeColor") as string;
    const icon = formData.get("icon") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const availableKalawana = formData.get("availableKalawana") === "on";
    const availableRatnapura = formData.get("availableRatnapura") === "on";

    if (!name || !categoryId || !icon) {
      return { error: "Name, category, and icon are required." };
    }

    await prisma.product.create({
      data: {
        name,
        description: description || null,
        price: price ? parseFloat(price) : null,
        categoryId,
        badge: badge || null,
        badgeColor: badgeColor || null,
        icon,
        imageUrl: imageUrl || null,
        availableKalawana,
        availableRatnapura,
      },
    });

    revalidatePath("/admin/products");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return { error: e.message || "Failed to create product." };
  }
}

export async function updateProduct(id: string, prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const categoryId = formData.get("categoryId") as string;
    const badge = formData.get("badge") as string;
    const badgeColor = formData.get("badgeColor") as string;
    const icon = formData.get("icon") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const availableKalawana = formData.get("availableKalawana") === "on";
    const availableRatnapura = formData.get("availableRatnapura") === "on";

    if (!name || !categoryId || !icon) {
      return { error: "Name, category, and icon are required." };
    }

    await prisma.product.update({
      where: { id },
      data: {
        name,
        description: description || null,
        price: price ? parseFloat(price) : null,
        categoryId,
        badge: badge || null,
        badgeColor: badgeColor || null,
        icon,
        imageUrl: imageUrl || null,
        availableKalawana,
        availableRatnapura,
      },
    });

    revalidatePath("/admin/products");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return { error: e.message || "Failed to update product." };
  }
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/admin/products");
  revalidatePath("/");
}
