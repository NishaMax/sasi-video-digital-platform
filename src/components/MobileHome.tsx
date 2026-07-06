"use client";

import { 
  Search, Phone, MessageCircle, MapPin, Grid, Home, Wrench, Map, User, 
  ChevronRight, Tv, Speaker, Smartphone, Shield, Wifi, Headphones, 
  Monitor, Clock, ExternalLink
} from "lucide-react";

export function MobileHome({ branch, onProductClick }: { branch: string, onProductClick: (product: any) => void }) {
  const branchName = branch === "kalawana" ? "Kalawana" : "Ratnapura";
  const branchPhone = branch === "kalawana" ? "070 480 1560" : "076 417 7746";
  
  const categories = [
    { name: "Televisions", count: "15 Items", icon: Tv },
    { name: "Audio Systems", count: "12 Items", icon: Speaker },
    { name: "Mobile Accessories", count: "25 Items", icon: Smartphone },
    { name: "CCTV & Security", count: "8 Items", icon: Shield },
    { name: "Networking", count: "10 Items", icon: Wifi },
    { name: "Headphones", count: "18 Items", icon: Headphones }
  ];

  const featuredProducts = [
    { 
      name: 'Samsung 42" 4K Smart TV', 
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Tv
    },
    { 
      name: "Sony HT-S40R Soundbar", 
      badge: "Fast Service", 
      badgeColor: "bg-green-600",
      icon: Speaker
    },
    { 
      name: "JBL Flip 6 Bluetooth Speaker", 
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Speaker
    },
    { 
      name: "Hikvision 4-Camera CCTV Kit", 
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Shield
    }
  ];

  const services = [
    { 
      name: "Mobile Phone Repair", 
      desc: "Battery swap, charging port repair, software issues.",
      icon: Smartphone
    },
    { 
      name: "Speaker & Audio Repair", 
      desc: "Woofer refoaming, amplifier board repair, bluetooth module replacement.",
      icon: Speaker
    },
    { 
      name: "TV Display Replacement", 
      desc: "LED backlight repair, panel replacement.",
      icon: Monitor
    },
    { 
      name: "CCTV Installation", 
      desc: "Professional installation of security cameras, DVR setup, remote viewing.",
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-24 font-sans">
      
      {/* ═══════════════════════════════════════════ */}
      {/* TOP HEADER */}
      {/* ═══════════════════════════════════════════ */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <button className="text-gray-400 p-2 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-gray-800 px-3 py-1.5 rounded-full">
          <MapPin className="w-3 h-3 text-sasi-red" />
          <span className="text-xs text-gray-300 font-medium">{branchName}</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* HERO CARD */}
      {/* ═══════════════════════════════════════════ */}
      <div className="px-5 mb-5">
        <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#141414] to-[#111111] rounded-[20px] p-6 border border-gray-800/60 overflow-hidden min-h-[160px]">
          {/* Background glow effect — image placeholder */}
          <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-[#1F1F1F] to-transparent opacity-60"></div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-sasi-red/5 blur-2xl"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold text-sasi-red uppercase tracking-[0.15em] block mb-2">
              Entertainment • Electronics • Trust
            </span>
            <h1 className="text-[22px] font-extrabold text-white mb-1 leading-tight">
              Welcome to Sasi Video
            </h1>
            <p className="text-xs text-gray-500 mb-0">{branchName} Branch</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* QUICK ACTION BUTTONS (2x2 Grid) */}
      {/* ═══════════════════════════════════════════ */}
      <div className="px-5 mb-7">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button className="bg-sasi-red hover:bg-red-700 active:scale-[0.97] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all">
            <Grid className="w-4 h-4" />
            Browse Products
          </button>
          <button className="bg-[#22C55E] hover:bg-green-600 active:scale-[0.97] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)]">
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-transparent border border-gray-800 hover:border-gray-600 active:scale-[0.97] text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all">
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button className="bg-transparent border border-gray-800 hover:border-gray-600 active:scale-[0.97] text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all">
            <MapPin className="w-4 h-4" />
            Find Branch
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* FEATURED CATEGORIES (Horizontal Scrollable) */}
      {/* ═══════════════════════════════════════════ */}
      <div className="mb-7">
        <div className="flex justify-between items-center px-5 mb-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">Featured Categories</h2>
          <span className="text-xs text-sasi-red font-semibold cursor-pointer hover:text-red-400 transition-colors flex items-center gap-0.5">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="flex gap-3 px-5 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group">
              <div className="w-[56px] h-[56px] rounded-full bg-[#161616] border border-gray-800 flex items-center justify-center group-hover:border-sasi-red/50 transition-colors">
                <cat.icon className="w-5 h-5 text-sasi-red stroke-[1.5]" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-[10px] text-gray-300 leading-tight">{cat.name}</h3>
                <span className="text-[9px] text-gray-600 block">{cat.count}</span>
              </div>
            </div>
          ))}
          {/* WhatsApp quick action at end of scroll */}
          <div className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group">
            <div className="w-[56px] h-[56px] rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center group-hover:bg-[#22C55E]/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#22C55E] fill-[#22C55E] stroke-[#22C55E]" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[10px] text-[#22C55E] leading-tight">WhatsApp</h3>
            </div>
          </div>
        </div>
      </div>



      {/* ═══════════════════════════════════════════ */}
      {/* FEATURED PRODUCTS (Horizontal Scroll Cards) */}
      {/* ═══════════════════════════════════════════ */}
      <div className="mb-8">
        <div className="flex overflow-x-auto gap-3 px-5 pb-2 scrollbar-hide">
          {featuredProducts.map((product, i) => (
            <div 
              key={i} 
              onClick={() => onProductClick({ ...product, desc: "Premium product available at Sasi Video. Ask us for more details." })}
              className="min-w-[150px] max-w-[150px] bg-[#121212] border border-gray-800/60 rounded-2xl overflow-hidden cursor-pointer group hover:border-gray-700 transition-colors flex-shrink-0"
            >
              {/* Image placeholder */}
              <div className="w-full h-[100px] bg-[#1A1A1A] flex items-center justify-center relative">
                <product.icon className="w-10 h-10 text-gray-700 stroke-[1]" />
                {/* Badge */}
                <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>
                  {product.badge}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-gray-200 leading-tight line-clamp-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* OUR SERVICES */}
      {/* ═══════════════════════════════════════════ */}
      <div className="px-5 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">Our Services</h2>
          <span className="text-xs text-sasi-red font-semibold cursor-pointer hover:text-red-400 transition-colors flex items-center gap-0.5">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, i) => (
            <div key={i} className="bg-[#121212] border border-gray-800/60 rounded-2xl p-4 cursor-pointer hover:border-gray-700 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-sasi-red/10 flex items-center justify-center mb-3">
                <service.icon className="w-4 h-4 text-sasi-red stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-semibold text-white leading-tight mb-1">{service.name}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* OUR BRANCHES */}
      {/* ═══════════════════════════════════════════ */}
      <div className="px-5 mb-8">
        <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Our Branches</h2>
        
        {/* Kalawana Branch */}
        <div className="bg-[#121212] border border-gray-800/60 rounded-2xl p-4 mb-3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-white">Kalawana Branch</h3>
            <span className="bg-sasi-red text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Main Branch</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-3 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gray-600 flex-shrink-0" />
            Main Street, Kalawana
          </p>
          <div className="flex gap-2">
            <button className="flex-1 bg-transparent border border-gray-800 text-gray-300 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-medium hover:border-gray-600 transition-colors">
              <Phone className="w-3 h-3" />
              Call Now
            </button>
            <button className="flex-1 bg-[#22C55E] text-white flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-semibold hover:bg-green-600 transition-colors">
              <MessageCircle className="w-3 h-3 fill-current" />
              WhatsApp
            </button>
          </div>
        </div>

        {/* Ratnapura Branch */}
        <div className="bg-[#121212] border border-gray-800/60 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-white">Ratnapura Branch</h3>
            <span className="bg-green-700 text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Services Available</span>
          </div>
          <p className="text-[10px] text-gray-500 mb-3 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gray-600 flex-shrink-0" />
            Outer Circular Road, Ratnapura
          </p>
          <div className="flex gap-2">
            <button className="flex-1 bg-transparent border border-gray-800 text-gray-300 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-medium hover:border-gray-600 transition-colors">
              <Phone className="w-3 h-3" />
              Call Now
            </button>
            <button className="flex-1 bg-[#22C55E] text-white flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-semibold hover:bg-green-600 transition-colors">
              <MessageCircle className="w-3 h-3 fill-current" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 right-5 z-40">
        <button className="bg-[#22C55E] text-white p-3 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-current" />
        </button>
      </div>
      
    </div>
  );
}
