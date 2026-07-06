import { Smartphone, Speaker, Monitor, Shield, Phone, MessageCircle, Wrench } from "lucide-react";

export function MobileServices() {
  const services = [
    { 
      name: "Mobile Phone Repair", 
      badge: "Fast Service",
      badgeColor: "bg-[#2563EB]",
      desc: "Screen replacement, battery swap, charging port repair, software issues — all models.",
      turnaround: "Same day - Both branches",
      icon: Smartphone
    },
    { 
      name: "Speaker & Audio Repair", 
      badge: "Trusted Service",
      badgeColor: "bg-[#F59E0B]",
      desc: "Woofer refoaming, amplifier board repair, bluetooth module replacement, cabinet refurbishment.",
      turnaround: "1-3 days - Kalawana only",
      icon: Speaker
    },
    { 
      name: "TV Display Replacement", 
      badge: "Trusted Service",
      badgeColor: "bg-[#F59E0B]",
      desc: "LED backlight repair, panel replacement, power board fixing.",
      turnaround: "2-5 days - Both branches",
      icon: Monitor
    },
    { 
      name: "CCTV Installation", 
      badge: "Fast Service",
      badgeColor: "bg-[#2563EB]",
      desc: "Professional installation of security cameras, DVR setup, remote viewing configuration.",
      turnaround: "Same day - Both branches",
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-24 animate-in fade-in duration-500 font-sans w-full">
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">Our Services</h1>
        
        {/* Hero Image / Banner */}
        <div className="relative w-full h-[140px] rounded-[24px] overflow-hidden mb-8 border border-gray-800">
          <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
            {/* Image Placeholder */}
            <Wrench className="w-16 h-16 text-gray-800 stroke-[1]" /> 
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent p-5 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-sasi-red uppercase tracking-widest mb-1">Professional Repair</span>
            <h2 className="text-[22px] font-extrabold text-white leading-tight">TRUSTED LOCAL<br/>SERVICE</h2>
            <p className="text-[10px] text-gray-400 mt-1">With 10+ years of experience.</p>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <div key={i} className="bg-[#121212] border border-gray-800/60 rounded-[24px] p-5 cursor-pointer hover:border-gray-700 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-sasi-red stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-sm font-bold text-white leading-tight">{service.name}</h3>
                    <span className={`${service.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pr-2">{service.desc}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-800/60">
                <span className="text-[10px] text-gray-500"><span className="text-gray-400">Turnaround:</span> {service.turnaround}</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-gray-300" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center hover:bg-[#22C55E]/20 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-[#22C55E] fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
