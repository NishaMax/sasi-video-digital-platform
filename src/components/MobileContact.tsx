import { Phone, MessageCircle } from "lucide-react";

export function MobileContact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-28 md:pb-12 animate-in fade-in duration-500 font-sans w-full">
      <div className="px-5 md:px-10 lg:px-20 pt-8 pb-4 max-w-7xl mx-auto w-full">
        <h1 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6">Contact Us</h1>
        
        {/* On desktop: side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* LEFT COLUMN — Branch Cards + Hours */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            {/* Kalawana Branch Card */}
            <div className="bg-[#121212] border border-gray-800/60 rounded-[20px] p-5 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-sm font-bold text-white">Kalawana Branch</h2>
                <span className="bg-sasi-red/20 text-sasi-red text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Main Branch</span>
              </div>
              <div className="flex flex-col gap-2.5 mb-5">
                <a href="tel:0764177746" className="text-xs text-gray-300 font-medium flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sasi-red" /> 0764 177 746
                </a>
                <a href="tel:0764177746" className="text-xs text-gray-300 font-medium flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sasi-red" /> 0764 177 746
                </a>
              </div>
              <div className="flex gap-3">
                <a href="tel:0764177746" className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors">
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
                <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors hover:bg-[#22C55E]/20">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Ratnapura Branch Card */}
            <div className="bg-[#121212] border border-gray-800/60 rounded-[20px] p-5 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-sm font-bold text-white">Ratnapura Branch</h2>
                <span className="bg-[#22C55E]/20 text-[#22C55E] text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Services Available</span>
              </div>
              <div className="flex flex-col gap-2.5 mb-5">
                <a href="tel:0764177746" className="text-xs text-gray-300 font-medium flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sasi-red" /> 0764 177 746
                </a>
                <a href="tel:0764177746" className="text-xs text-gray-300 font-medium flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sasi-red" /> 0764 177 746
                </a>
              </div>
              <div className="flex gap-3">
                <a href="tel:0764177746" className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors">
                  <Phone className="w-3.5 h-3.5" /> Call
                </a>
                <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-colors hover:bg-[#22C55E]/20">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#121212] border border-gray-800/60 p-5 rounded-[20px]">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">Working Hours</h2>
              {[
                { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
                { day: "Saturday", hours: "8:00 AM - 7:00 PM" },
                { day: "Sunday", hours: "9:00 AM - 5:00 PM" }
              ].map((row, i) => (
                <div key={i} className={`flex justify-between items-center ${i < 2 ? "mb-3" : ""}`}>
                  <span className="text-xs text-gray-300">{row.day}</span>
                  <span className="text-xs font-bold text-white">{row.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#121212] border border-gray-800/60 rounded-[20px] p-5 h-full">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">Send A Message</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block pl-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-gray-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block pl-1">Your Message</label>
                  <textarea 
                    placeholder="Type your inquiry here..." 
                    rows={5}
                    className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-gray-600 transition-colors resize-none"
                  ></textarea>
                </div>
                <a 
                  href="https://wa.me/94764177746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-green-600 active:scale-[0.98] text-white flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)] mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Send Message via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
