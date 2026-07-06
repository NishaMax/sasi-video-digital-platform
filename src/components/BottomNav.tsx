import { Home, Grid, Wrench, MapPin, User } from "lucide-react";

export type Tab = "home" | "products" | "services" | "branches" | "contact";

export function BottomNav({ activeTab, onChange, branch }: { activeTab: Tab, onChange: (tab: Tab) => void, branch?: string }) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "products", label: "Products", icon: Grid },
    // Only show services if it's NOT kalawana
    ...(branch !== "kalawana" ? [{ id: "services", label: "Services", icon: Wrench }] : []),
    { id: "branches", label: "Branches", icon: MapPin },
    { id: "contact", label: "Contact", icon: User }
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
            <span className="text-[9px] font-semibold tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
