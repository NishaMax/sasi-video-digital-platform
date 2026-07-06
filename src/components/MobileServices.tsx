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
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-28 md:pb-12 animate-in fade-in duration-500 font-sans w-full">
      <div className="px-5 md:px-10 lg:px-20 pt-8 pb-4 max-w-7xl mx-auto w-full">
        <h1 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">Our Services</h1>
        
        {/* Hero Banner */}
        <div className="relative w-full h-[160px] md:h-[220px] rounded-[24px] overflow-hidden mb-10 border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#111111] flex items-center justify-center">
            <Wrench className="w-20 h-20 text-gray-800/50 stroke-[1]" /> 
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent p-6 md:p-10 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-sasi-red uppercase tracking-widest mb-2">Professional Repair</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">TRUSTED LOCAL<br/>SERVICE</h2>
            <p className="text-xs md:text-sm text-gray-400 mt-2">With 10+ years of experience.</p>
          </div>
        </div>

        {/* Services — single column on mobile, 2-column on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div key={i} className="bg-[#121212] border border-gray-800/60 rounded-[24px] p-6 cursor-pointer hover:border-gray-600 hover:-translate-y-0.5 transition-all group">
              <div className="flex gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-sasi-red/10 border border-sasi-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sasi-red/20 transition-colors">
                  <service.icon className="w-6 h-6 text-sasi-red stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-sm font-bold text-white leading-tight">{service.name}</h3>
                    <span className={`${service.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-800/60">
                <span className="text-[10px] text-gray-500"><span className="text-gray-400 font-medium">Turnaround:</span> {service.turnaround}</span>
                <div className="flex gap-2">
                  <a href="tel:0764177746" className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Phone className="w-4 h-4 text-gray-300" />
                  </a>
                  <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center hover:bg-[#22C55E]/25 transition-colors">
                    <MessageCircle className="w-4 h-4 text-[#22C55E] fill-current" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
