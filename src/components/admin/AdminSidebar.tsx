import { adminLogout } from "@/app/admin/login/actions";
import Link from "next/link";
import { 
  LayoutDashboard, Package, FolderOpen, 
  Wrench, Globe, LogOut
} from "lucide-react";

const navLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/categories", label: "Categories", icon: FolderOpen },
  { href: "/admin/services", label: "Services", icon: Wrench },
];

export function AdminSidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-56 bg-[#0D0D0D] border-r border-gray-800/60 z-40 flex flex-col">
      
      {/* Logo */}
      <div className="px-5 py-6 border-b border-gray-800/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-xs">SV</span>
          </div>
          <div>
            <p className="text-white font-extrabold text-sm leading-none">SASI VIDEO</p>
            <p className="text-gray-600 text-[9px] font-medium mt-0.5">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 flex-1 px-3 py-4">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = activePath === href || 
            (href !== "/admin" && activePath.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "bg-red-600/10 text-red-500 border border-red-600/20"
                  : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 pb-5 flex flex-col gap-2 border-t border-gray-800/60 pt-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-all"
        >
          <Globe className="w-4 h-4 flex-shrink-0" />
          View Website
        </Link>

        <form action={adminLogout}>
          <button
            type="submit"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500/70 hover:text-red-400 hover:bg-red-950/30 transition-all w-full text-left"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
