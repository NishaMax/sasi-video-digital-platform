"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAdminServices() {
  return prisma.service.findMany({ orderBy: { createdAt: "asc" } });
}

export async function getAdminServiceById(id: string) {
  return prisma.service.findUnique({ where: { id } });
}

export async function createService(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const badge = formData.get("badge") as string;
    const badgeColor = formData.get("badgeColor") as string;
    const icon = formData.get("icon") as string;
    const turnaround = formData.get("turnaround") as string;

    if (!name || !description || !icon) {
      return { error: "Name, description, and icon are required." };
    }

    await prisma.service.create({
      data: {
        name,
        description,
        badge: badge || null,
        badgeColor: badgeColor || null,
        icon,
        turnaround: turnaround || null,
      },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return { error: e.message || "Failed to create service." };
  }
}

export async function updateService(id: string, prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const badge = formData.get("badge") as string;
    const badgeColor = formData.get("badgeColor") as string;
    const icon = formData.get("icon") as string;
    const turnaround = formData.get("turnaround") as string;

    if (!name || !description || !icon) {
      return { error: "Name, description, and icon are required." };
    }

    await prisma.service.update({
      where: { id },
      data: {
        name,
        description,
        badge: badge || null,
        badgeColor: badgeColor || null,
        icon,
        turnaround: turnaround || null,
      },
    });

    revalidatePath("/admin/services");
    revalidatePath("/");
    return { success: true };
  } catch (e: any) {
    return { error: e.message || "Failed to update service." };
  }
}

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } });
  revalidatePath("/admin/services");
  revalidatePath("/");
}
