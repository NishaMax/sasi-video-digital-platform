import { Search, Phone, MessageCircle, MapPin, Wrench, Home, Grid, Map, User, ChevronRight } from "lucide-react";
import Image from "next/image";

export function MobileHome({ branch }: { branch: string }) {
  const branchName = branch === "kalawana" ? "Kalawana" : "Ratnapura";
  
  const categories = [
    { name: "Movies & Music", icon: "🎬" },
    { name: "Mobile Accessories", icon: "📱" },
    { name: "Storage & USB", icon: "💾" },
    { name: "Electronics", icon: "📺" },
    { name: "Religious Frames", icon: "🖼️" },
    { name: "Toys", icon: "🧸" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pb-24 animate-in fade-in duration-700">
      {/* Dynamic Hero Section */}
      <div className="relative pt-12 pb-12 px-6 bg-gradient-to-b from-sasi-black/5 to-background overflow-hidden rounded-b-[40px] shadow-sm">
        <div className="absolute inset-0 opacity-10 bg-sasi-silver blur-sm"></div>
        
        <div className="relative z-10 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-sasi-red" />
            <span className="text-sm font-semibold text-sasi-red uppercase tracking-wider">{branchName} Branch</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 leading-tight">Welcome to<br/>Sasi Video</h1>
          <p className="text-sm text-sasi-silver">Open Today 8:00 AM – 6:00 PM</p>
          <div className="mt-4">
            <p className="text-sm font-medium text-sasi-black bg-sasi-silver/20 inline-block px-4 py-2 rounded-full">
              We're happy to see you.
            </p>
          </div>
        </div>
      </div>

      {/* Large Search Bar */}
      <div className="px-6 -mt-7 relative z-20">
        <div className="flex items-center bg-card rounded-2xl shadow-md border border-sasi-silver/10 px-5 py-4 focus-within:ring-2 focus-within:ring-sasi-red/50 transition-all">
          <Search className="w-5 h-5 text-sasi-silver mr-3" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-sasi-silver text-base"
          />
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="px-6 mt-10 flex justify-between gap-3">
        {[
          { label: "Call", icon: Phone, color: "bg-blue-50 text-blue-600 border border-blue-100" },
          { label: "WhatsApp", icon: MessageCircle, color: "bg-green-50 text-green-600 border border-green-100" },
          { label: "Directions", icon: MapPin, color: "bg-orange-50 text-orange-600 border border-orange-100" },
          { label: "Services", icon: Wrench, color: "bg-purple-50 text-purple-600 border border-purple-100" }
        ].map((action, i) => (
          <button key={i} className="flex flex-col items-center gap-2 group flex-1">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${action.color} transition-transform group-hover:scale-105 group-hover:shadow-sm`}>
              <action.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-foreground">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="px-6 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-foreground">Categories</h2>
          <span className="text-sm text-sasi-silver font-medium cursor-pointer hover:text-sasi-red transition-colors flex items-center">
            View All <ChevronRight className="w-4 h-4" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="bg-card p-5 rounded-3xl shadow-sm border border-sasi-silver/10 flex flex-col gap-3 transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="text-3xl">{cat.icon}</div>
              <span className="font-semibold text-sm text-foreground">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Preview */}
      <div className="px-6 mt-10 mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span>✨</span> New This Week
        </h2>
        <div className="bg-card rounded-3xl p-5 shadow-sm border border-sasi-silver/10 flex items-center gap-5 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-sasi-red"></div>
          
          <div className="w-16 h-16 bg-background rounded-2xl border border-sasi-silver/20 flex-shrink-0 flex items-center justify-center">
             <span className="text-3xl text-sasi-silver">📱</span>
          </div>
          <div>
            <span className="text-xs font-bold text-sasi-red uppercase tracking-wider mb-1 block">Just Arrived</span>
            <h3 className="font-bold text-foreground leading-tight text-lg">Fast Chargers</h3>
            <button className="text-sm font-semibold text-sasi-black mt-2 underline decoration-sasi-silver underline-offset-4 flex items-center gap-1">
              Ask on WhatsApp <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-sasi-silver/20 pb-safe z-50">
        <div className="flex justify-around items-center px-2 py-3">
          {[
            { label: "Home", icon: Home, active: true },
            { label: "Products", icon: Grid, active: false },
            { label: "Branches", icon: Map, active: false },
            { label: "Contact", icon: User, active: false }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 cursor-pointer w-16 ${item.active ? "text-sasi-red" : "text-sasi-silver"}`}>
              <div className={`p-1.5 rounded-full ${item.active ? "bg-sasi-red/10" : "transparent"}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
