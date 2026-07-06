import { Search, Tv, Speaker, Smartphone, Shield, Wifi, Headphones } from "lucide-react";
import { useState } from "react";

export function MobileProducts({ onProductClick }: { onProductClick: (product: any) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Televisions", "Audio Systems", "Mobile Accessories", "CCTV", "Networking", "Headphones"];
  
  const products = [
    { 
      name: 'Samsung 43" 4K Smart TV', 
      desc: "Crystal clear 4K UHD display with Smart Hub.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Tv,
      category: "Televisions"
    },
    { 
      name: "Sony HT-S40R Soundbar", 
      desc: "5.1ch real surround sound system with wireless rear.",
      badge: "Fast Service", 
      badgeColor: "bg-[#2563EB]", 
      icon: Speaker,
      category: "Audio Systems"
    },
    { 
      name: "JBL Flip 6 Bluetooth Speaker", 
      desc: "Portable waterproof speaker with punchy bass.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Speaker,
      category: "Audio Systems"
    },
    { 
      name: "Hikvision 4-Camera CCTV Kit", 
      desc: "Full HD outdoor surveillance system.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Shield,
      category: "CCTV"
    },
    { 
      name: "TP-Link AC1200 WiFi Router", 
      desc: "Dual-band gigabit router for fast, reliable home internet.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Wifi,
      category: "Networking"
    },
    { 
      name: "Sony WH-1000XM5 Headphones", 
      desc: "Industry-leading noise cancellation with 30-hour battery.",
      badge: "Trusted Service", 
      badgeColor: "bg-[#F59E0B]", 
      icon: Headphones,
      category: "Headphones"
    },
    { 
      name: 'LG 55" OLED Smart TV', 
      desc: "Perfect blacks and vivid colors with self-lit OLED.",
      badge: "Available at Kalawana", 
      badgeColor: "bg-purple-600",
      icon: Tv,
      category: "Televisions"
    },
    { 
      name: "Samsung Galaxy Buds2 Pro", 
      desc: "True wireless earbuds with ANC and Hi-Fi sound.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Smartphone,
      category: "Mobile Accessories"
    }
  ];

  const filteredProducts = products.filter(p => selectedCategory === "All" || p.category === selectedCategory);

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-white animate-in fade-in duration-500 font-sans w-full min-h-screen">
      {/* Top Search Bar */}
      <div className="px-5 md:px-10 lg:px-20 pt-6 pb-4 sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-30 max-w-7xl mx-auto w-full">
        <div className="flex items-center bg-[#1A1A1A] rounded-2xl border border-gray-800 px-4 py-3 hover:border-gray-700 transition-colors">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500 text-sm"
          />
        </div>
      </div>

      {/* Categories — scrollable on mobile, wrapped on desktop */}
      <div className="mb-6 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 px-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-hide pb-2 md:flex-wrap md:overflow-visible">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat 
                  ? "bg-sasi-red text-white border border-sasi-red shadow-[0_0_15px_rgba(229,9,20,0.3)]" 
                  : "bg-[#1A1A1A] border border-gray-800 text-gray-300 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid — 2 cols mobile → 3 cols tablet → 4 cols desktop */}
      <div className="px-5 md:px-10 lg:px-20 pb-28 md:pb-12 max-w-7xl mx-auto w-full">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-3">
            <Search className="w-10 h-10 text-gray-700" />
            <p className="text-sm">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, i) => (
              <div 
                key={i} 
                onClick={() => onProductClick(product)}
                className="bg-[#121212] border border-gray-800/60 rounded-[20px] overflow-hidden flex flex-col cursor-pointer group hover:border-gray-600 hover:-translate-y-1 transition-all shadow-md"
              >
                <div className="w-full h-[130px] md:h-[180px] bg-[#1A1A1A] relative flex items-center justify-center p-4 overflow-hidden">
                  <product.icon className="w-12 h-12 md:w-16 md:h-16 text-gray-700 stroke-[1] group-hover:scale-110 transition-transform duration-500" />
                  <span className={`absolute bottom-3 left-3 ${product.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide z-10`}>
                    {product.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-gray-100 leading-tight mb-1.5 group-hover:text-white transition-colors">{product.name}</h3>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-snug line-clamp-2">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
