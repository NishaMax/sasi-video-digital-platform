import { ArrowLeft, Share2, MessageCircle, Shield, Truck, Settings } from "lucide-react";
import { getIcon } from "@/lib/icons";

export function ProductDetail({ product, onBack }: { product: any, onBack: () => void }) {
  const whatsappMessage = `Hi Sasi Video, I am interested in the ${product.name}. Could you give me more details about price and availability?`;
  const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Dynamic icon component
  const IconComponent = getIcon(product.icon);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0A0A0A] text-white flex flex-col animate-in slide-in-from-right duration-300 font-sans overflow-y-auto pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 flex justify-between items-center px-5 py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gray-800/80">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-800 text-gray-300 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Product Details</span>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-800 text-gray-300 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Image / Icon */}
      <div className="w-full h-[300px] bg-[#121212] flex items-center justify-center relative border-b border-gray-800/60 overflow-hidden">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover relative z-0 opacity-90" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
            {IconComponent && <IconComponent className="w-24 h-24 text-gray-700 stroke-[1] relative z-10" />}
          </>
        )}
        
        {product.badge && (
          <span className={`absolute top-4 left-5 ${product.badgeColor || "bg-red-600"} text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider z-10 shadow-lg`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Details Section */}
      <div className="px-5 py-6">
        <h1 className="text-2xl font-extrabold text-white mb-2 leading-tight">{product.name}</h1>
        {product.price && (
          <p className="text-xl font-bold text-sasi-red mb-3">Rs. {product.price.toLocaleString()}</p>
        )}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">{product.description}</p>
        
        {/* Value Props */}
        <div className="grid grid-cols-3 gap-3 mb-8 border-y border-gray-800/60 py-5">
          <div className="flex flex-col items-center text-center gap-2">
            <Shield className="w-5 h-5 text-sasi-red" />
            <span className="text-[10px] text-gray-400 font-medium">Genuine<br/>Warranty</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2 border-x border-gray-800/60 px-2">
            <Settings className="w-5 h-5 text-sasi-red" />
            <span className="text-[10px] text-gray-400 font-medium">Expert<br/>Setup</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Truck className="w-5 h-5 text-sasi-red" />
            <span className="text-[10px] text-gray-400 font-medium">Store<br/>Pickup</span>
          </div>
        </div>

        {/* Specs placeholder */}
        <div className="mb-8">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Key Features</h3>
          <ul className="space-y-3">
            {[
              "High-quality build and materials",
              "Trusted brand with local warranty",
              "Compatible with modern setups",
              "Available for immediate pickup"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sasi-red mt-1.5 flex-shrink-0"></div>
                <span className="text-[13px] text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gray-800 z-50 pb-safe">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#22C55E] hover:bg-green-600 text-white flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)] active:scale-[0.98]"
        >
          <MessageCircle className="w-5 h-5 fill-current" /> Ask Before You Visit
        </a>
      </div>
    </div>
  );
}
