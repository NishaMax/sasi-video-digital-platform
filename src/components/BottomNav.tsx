import { Home, Grid, Wrench, MapPin, User } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export type Tab = "home" | "products" | "services" | "branches" | "contact";

export function BottomNav({ activeTab, onChange, branch }: { activeTab: Tab, onChange: (tab: Tab) => void, branch?: string }) {
  const { t } = useLanguage();

  const tabs = [
    { id: "home", label: t("nav.home"), icon: Home },
    { id: "products", label: t("nav.products"), icon: Grid },
    // Only show services if it's NOT kalawana
    ...(branch !== "kalawana" ? [{ id: "services", label: t("nav.services"), icon: Wrench }] : []),
    { id: "branches", label: t("nav.branches"), icon: MapPin },
    { id: "contact", label: t("nav.contact"), icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gray-800/60 pb-safe z-50">
      <div className="flex justify-around items-center px-2 py-2.5">
        {tabs.map((item, i) => (
          <button 
            key={i} 
            onClick={() => onChange(item.id as Tab)}
            className={`flex flex-col items-center gap-0.5 w-14 transition-colors ${
              activeTab === item.id ? "text-sasi-red" : "text-gray-600 hover:text-gray-400"
            }`}
          >
            <item.icon className="w-[18px] h-[18px] stroke-[2]" />
            <span className="text-[9px] font-semibold tracking-wide truncate w-full text-center">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
