"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAdminCategories() {
  return prisma.category.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { products: true } } },
  });
}

export async function createCategory(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const icon = formData.get("icon") as string;
    const order = formData.get("order") as string;

    if (!name || !icon) {
      return { error: "Name and icon are required." };
    }

    await prisma.category.create({
      data: {
        name,
        icon,
        order: order ? parseInt(order) : 0,
      },
    });

    revalidatePath("/admin/categories");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    if (e.code === "P2002") return { error: "A category with this name already exists." };
    return { error: e.message || "Failed to create category." };
  }
}

export async function updateCategory(id: string, prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const icon = formData.get("icon") as string;
    const order = formData.get("order") as string;

    if (!name || !icon) {
      return { error: "Name and icon are required." };
    }

    await prisma.category.update({
      where: { id },
      data: {
        name,
        icon,
        order: order ? parseInt(order) : 0,
      },
    });

    revalidatePath("/admin/categories");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    if (e.code === "P2002") return { error: "A category with this name already exists." };
    return { error: e.message || "Failed to update category." };
  }
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
  revalidatePath("/");
}
