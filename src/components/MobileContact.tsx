import { Phone, MessageCircle } from "lucide-react";

export function MobileContact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-24 animate-in fade-in duration-500 font-sans w-full">
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-sm font-extrabold text-white uppercase tracking-wider mb-6">Contact Us</h1>
        
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="bg-[#121212] border border-gray-800/60 rounded-[20px] p-5">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-sm font-bold text-white">Kalawana Branch</h2>
              <span className="bg-sasi-red/20 text-sasi-red text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Main Branch</span>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              <p className="text-[11px] text-gray-300 font-medium flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-sasi-red" /> +94 45 123 4567
              </p>
              <p className="text-[11px] text-gray-300 font-medium flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-sasi-red" /> +94 77 123 4567
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-semibold transition-colors">
                <Phone className="w-3.5 h-3.5" /> Call
              </button>
              <button className="flex-1 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-semibold transition-colors hover:bg-[#22C55E]/20">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-[#121212] border border-gray-800/60 rounded-[20px] p-5">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-sm font-bold text-white">Ratnapura Branch</h2>
              <span className="bg-[#22C55E]/20 text-[#22C55E] text-[8px] font-bold px-2 py-0.5 rounded-md uppercase">Services Available</span>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              <p className="text-[11px] text-gray-300 font-medium flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-sasi-red" /> +94 45 234 5678
              </p>
              <p className="text-[11px] text-gray-300 font-medium flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-sasi-red" /> +94 77 234 5678
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-200 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-semibold transition-colors">
                <Phone className="w-3.5 h-3.5" /> Call
              </button>
              <button className="flex-1 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-semibold transition-colors hover:bg-[#22C55E]/20">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mb-10 bg-[#121212] border border-gray-800/60 p-5 rounded-[20px]">
          <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">Working Hours</h2>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] text-gray-300">Monday - Friday</span>
            <span className="text-[11px] font-bold text-white">8:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] text-gray-300">Saturday</span>
            <span className="text-[11px] font-bold text-white">8:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-300">Sunday</span>
            <span className="text-[11px] font-bold text-white">9:00 AM - 5:00 PM</span>
          </div>
        </div>

        {/* Send A Message Form */}
        <div>
          <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">Send A Message</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block pl-1">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-gray-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2 block pl-1">Your Message</label>
              <textarea 
                placeholder="Type your inquiry here..." 
                rows={4}
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-gray-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#22C55E] hover:bg-green-600 active:scale-[0.98] text-white flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)] mt-3">
              <MessageCircle className="w-4 h-4 fill-current" /> Send Message via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
