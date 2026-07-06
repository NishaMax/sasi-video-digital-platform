"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(prevState: any, formData: FormData) {
  const password = formData.get("password") as string;

  if (!password) {
    return { error: "Password is required." };
  }

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("ADMIN_PASSWORD environment variable is not set.");
    return { error: "Server configuration error. Contact the developer." };
  }

  if (password !== adminPassword) {
    return { error: "Incorrect password. Please try again." };
  }

  // Set a secure HttpOnly cookie valid for 7 days
  const cookieStore = await cookies();
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
  });

  redirect("/admin");
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}
