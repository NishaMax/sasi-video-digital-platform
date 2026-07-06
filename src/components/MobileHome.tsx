import { Search, Phone, MessageCircle, MapPin, Grid, Home, Wrench, Map, User, ChevronRight, Tv, Speaker, Smartphone, Shield, Wifi, Headphones } from "lucide-react";
import Image from "next/image";

export function MobileHome({ branch }: { branch: string }) {
  const branchName = branch === "kalawana" ? "Kalawana" : "Ratnapura";
  
  const categories = [
    { name: "Televisions", count: "15 Items", icon: Tv },
    { name: "Audio Systems", count: "12 Items", icon: Speaker },
    { name: "Mobile Accessories", count: "25 Items", icon: Smartphone },
    { name: "CCTV & Security", count: "8 Items", icon: Shield },
    { name: "Networking", count: "10 Items", icon: Wifi },
    { name: "Headphones", count: "18 Items", icon: Headphones }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-24 animate-in fade-in duration-700 font-sans">
      
      {/* Top Header */}
      <div className="flex justify-between items-center px-5 py-4">
        <button className="text-gray-400 p-2">
          <Search className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-gray-800 px-3 py-1 rounded-full">
          <span className="text-xs text-gray-300">{branchName}</span>
        </div>
      </div>

      {/* Hero Card */}
      <div className="px-5 mb-5">
        <div className="relative bg-[#141414] rounded-[24px] p-6 border border-gray-800 overflow-hidden">
          {/* Subtle background glow/gradient placeholder */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#222222] to-transparent"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold text-sasi-red uppercase tracking-widest block mb-2">
              Entertainment • Electronics • Trust
            </span>
            <h1 className="text-2xl font-extrabold text-white mb-1 leading-tight">
              Welcome to Sasi Video
            </h1>
            <p className="text-xs text-gray-400 mb-4">{branchName} Branch</p>
            
            {/* Image Placeholder inside Hero */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-50 bg-gray-800 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Quick Actions (4 Buttons) */}
      <div className="px-5 mb-8">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button className="bg-sasi-red hover:bg-red-700 text-white flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors">
            <Grid className="w-4 h-4" />
            Browse Products
          </button>
          <button className="bg-[#22C55E] hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-transparent border border-gray-800 hover:bg-gray-900 text-gray-300 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-colors">
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button className="bg-transparent border border-gray-800 hover:bg-gray-900 text-gray-300 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-colors">
            <MapPin className="w-4 h-4" />
            Find Branch
          </button>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="px-5 mb-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide">Featured Categories</h2>
          <span className="text-xs text-sasi-red font-semibold cursor-pointer hover:text-red-400 transition-colors flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#121212] border border-gray-800 p-4 rounded-2xl flex flex-col items-center text-center justify-center gap-3 transition-colors hover:border-gray-700 cursor-pointer">
              <cat.icon className="w-7 h-7 text-sasi-red stroke-[1.5]" />
              <div>
                <h3 className="font-semibold text-xs text-white leading-tight">{cat.name}</h3>
                <span className="text-[10px] text-gray-500 mt-0.5 block">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-24 right-5 z-40">
        <button className="bg-[#22C55E] text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-gray-900 pb-safe z-50">
        <div className="flex justify-around items-center px-2 py-3">
          {[
            { label: "Home", icon: Home, active: true },
            { label: "Products", icon: Grid, active: false },
            { label: "Services", icon: Wrench, active: false },
            { label: "Branches", icon: Map, active: false },
            { label: "Contact", icon: User, active: false }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 cursor-pointer w-16 ${item.active ? "text-sasi-red" : "text-gray-500"}`}>
              <item.icon className="w-5 h-5 stroke-[2]" />
              <span className="text-[9px] font-semibold tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
