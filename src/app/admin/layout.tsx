import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/admin";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans flex">
      <AdminSidebar activePath={pathname} />
      {/* Main content offset by sidebar width */}
      <main className="ml-56 flex-1 min-h-screen">
        {children}
      </main>
    </div>
  );
}
