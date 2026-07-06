import { MapPin, Phone, MessageCircle, Navigation, Store } from "lucide-react";

export function MobileBranches() {
  const branches = [
    {
      name: "Kalawana Branch",
      isMain: true,
      address: "Main Street, Kalawana, Ratnapura District, Sri Lanka",
      phones: ["+94 45 123 4567", "+94 77 123 4567"],
      services: ["Mobile Repair", "TV Repair", "CCTV Installation", "Speaker Repair", "Sales"]
    },
    {
      name: "Ratnapura Branch",
      isMain: false,
      address: "Outer Circular Road, Ratnapura, Sabaragamuwa Province, Sri Lanka",
      phones: ["+94 45 234 5678", "+94 77 234 5678"],
      services: ["Mobile Repair", "TV Repair", "CCTV Installation", "Sales"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-28 md:pb-12 animate-in fade-in duration-500 font-sans w-full">
      <div className="px-5 md:px-10 lg:px-20 pt-8 pb-4 max-w-7xl mx-auto w-full">
        <h1 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6">Our Branches</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, i) => (
            <div key={i} className="bg-[#121212] border border-gray-800/60 rounded-[24px] overflow-hidden group hover:border-gray-700 transition-colors">
              {/* Branch Image Placeholder */}
              <div className="w-full h-[160px] md:h-[200px] bg-[#1A1A1A] relative flex items-center justify-center border-b border-gray-800/60">
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
                <Store className="w-14 h-14 text-gray-800 stroke-[1]" />
                <div className="absolute top-4 right-4">
                  <span className={`text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md ${branch.isMain ? "bg-sasi-red" : "bg-green-700"}`}>
                    {branch.isMain ? "Main Branch" : "Services Available"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-extrabold text-white mb-3">{branch.name}</h2>
                
                <div className="flex items-start gap-2.5 mb-4">
                  <MapPin className="w-4 h-4 text-sasi-red flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-400 leading-relaxed">{branch.address}</p>
                </div>
                
                <div className="flex flex-col gap-2 mb-6">
                  {branch.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s/g, "")}`} className="text-xs text-gray-300 font-medium flex items-center gap-2 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-gray-500" /> {phone}
                    </a>
                  ))}
                </div>

                <div className="mb-7">
                  <h4 className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">Services Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, idx) => (
                      <span key={idx} className="bg-[#1A1A1A] border border-gray-800 text-gray-300 text-[10px] px-3 py-1.5 rounded-full font-medium hover:border-gray-600 transition-colors">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mb-3">
                  <a href="tel:0764177746" className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors active:scale-[0.98]">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#22C55E] hover:bg-green-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] active:scale-[0.98]">
                    <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
                  </a>
                </div>
                <a 
                  href={branch.isMain ? "https://maps.google.com/?q=Kalawana,Sri+Lanka" : "https://maps.google.com/?q=Outer+Circular+Road,Ratnapura,Sri+Lanka"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1A1A1A] border border-gray-800 hover:bg-gray-800 text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors active:scale-[0.98]"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
