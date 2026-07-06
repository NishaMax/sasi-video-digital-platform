import { Search, Tv, Speaker, Smartphone, Shield, Wifi, Headphones } from "lucide-react";

export function MobileProducts({ onProductClick }: { onProductClick: (product: any) => void }) {
  const categories = ["All", "Televisions", "Audio Systems", "Mobile Accessories", "CCTV", "Networking"];
  
  const products = [
    { 
      name: 'Samsung 43" 4K Smart TV', 
      desc: "Crystal clear 4K UHD display with Smart Hub.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Tv
    },
    { 
      name: "Sony HT-S40R Soundbar", 
      desc: "5.1ch real surround sound system with wireless rear.",
      badge: "Fast Service", 
      badgeColor: "bg-[#2563EB]", // Blue for Fast Service
      icon: Speaker
    },
    { 
      name: "JBL Flip 6 Bluetooth Speaker", 
      desc: "Portable waterproof speaker with punchy bass.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Speaker
    },
    { 
      name: "Hikvision 4-Camera CCTV Kit", 
      desc: "Full HD outdoor surveillance system.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Shield
    },
    { 
      name: "TP-Link AC1200 WiFi Router", 
      desc: "Dual-band gigabit router for fast, reliable home internet.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Wifi
    },
    { 
      name: "Sony WH-1000XM5 Headphones", 
      desc: "Industry-leading noise cancellation with 30-hour battery.",
      badge: "Trusted Service", 
      badgeColor: "bg-[#F59E0B]", // Yellow for Trusted Service
      icon: Headphones
    },
    { 
      name: 'LG 55" OLED Smart TV', 
      desc: "Perfect blacks and vivid colors with self-lit OLED.",
      badge: "Available at Kalawana", 
      badgeColor: "bg-purple-600",
      icon: Tv
    },
    { 
      name: "Samsung Galaxy Buds2 Pro", 
      desc: "True wireless earbuds with ANC and Hi-Fi sound.",
      badge: "In Stock", 
      badgeColor: "bg-sasi-red",
      icon: Smartphone
    }
  ];

  return (
    <div className="flex flex-col bg-[#0A0A0A] text-white animate-in fade-in duration-500 font-sans w-full min-h-screen">
      {/* Top Search Bar */}
      <div className="px-5 pt-6 pb-4 sticky top-0 bg-[#0A0A0A] z-30">
        <div className="flex items-center bg-[#1A1A1A] rounded-2xl border border-gray-800 px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500 text-sm"
          />
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="mb-6">
        <div className="flex gap-2 px-5 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                i === 0 
                  ? "bg-sasi-red text-white border border-sasi-red" 
                  : "bg-[#1A1A1A] border border-gray-800 text-gray-300 hover:border-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-5 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, i) => (
            <div 
              key={i} 
              onClick={() => onProductClick(product)}
              className="bg-[#121212] border border-gray-800/60 rounded-[20px] overflow-hidden flex flex-col cursor-pointer group hover:border-gray-700 transition-colors"
            >
              <div className="w-full h-[120px] bg-[#1A1A1A] relative flex items-center justify-center p-4">
                 <product.icon className="w-12 h-12 text-gray-700 stroke-[1]" />
                 <span className={`absolute bottom-3 left-3 ${product.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide z-10`}>
                  {product.badge}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-gray-100 leading-tight mb-1">{product.name}</h3>
                <p className="text-[10px] text-gray-500 leading-snug line-clamp-2">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
