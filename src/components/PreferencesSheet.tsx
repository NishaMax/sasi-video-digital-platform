import { X, Check } from "lucide-react";

interface PreferencesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  setLanguage: (lang: string) => void;
  branch: string;
  setBranch: (branch: string) => void;
}

export function PreferencesSheet({ isOpen, onClose, language, setLanguage, branch, setBranch }: PreferencesSheetProps) {
  if (!isOpen) return null;

  const languages = [
    { id: "english", label: "English", code: "GB" },
    { id: "sinhala", label: "Sinhala", code: "LK" },
    { id: "tamil", label: "Tamil", code: "IN" },
  ];

  const branches = [
    { 
      id: "kalawana", 
      name: "Kalawana Branch", 
      desc: "Main Branch - Ratnapura District" 
    },
    { 
      id: "ratnapura", 
      name: "Ratnapura Branch", 
      desc: "Outer Circular Road, Ratnapura" 
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] flex flex-col justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="relative w-full bg-[#111111] border-t border-gray-800 rounded-t-3xl pt-2 pb-8 px-5 animate-in slide-in-from-bottom duration-300">
        
        {/* Drag handle placeholder */}
        <div className="w-10 h-1 bg-gray-700 rounded-full mx-auto mb-6" />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">Preferences</h2>
          <button onClick={onClose} className="p-1.5 bg-[#1A1A1A] rounded-full text-gray-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Language Section */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
            <span className="w-3 h-3 border border-gray-500 rounded-full flex items-center justify-center text-[6px]">🌐</span>
            Language
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {languages.map((lang) => {
              const isActive = language === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors ${
                    isActive 
                      ? "bg-sasi-red/10 border-sasi-red" 
                      : "bg-[#1A1A1A] border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <span className={`text-lg font-black mb-1 ${isActive ? "text-white" : "text-gray-400"}`}>{lang.code}</span>
                  <span className={`text-[10px] font-semibold mb-1 ${isActive ? "text-white" : "text-gray-400"}`}>{lang.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-sasi-red" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Branch Section */}
        <div>
          <h3 className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
            <span className="w-3 h-3 border border-gray-500 rounded-full flex items-center justify-center text-[6px]">📍</span>
            Branch
          </h3>
          <div className="flex flex-col gap-3">
            {branches.map((b) => {
              const isActive = branch === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setBranch(b.id)}
                  className={`flex justify-between items-center p-4 rounded-xl border transition-colors text-left ${
                    isActive 
                      ? "bg-sasi-red/10 border-sasi-red" 
                      : "bg-[#1A1A1A] border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <div>
                    <h4 className={`text-sm font-bold mb-1 ${isActive ? "text-white" : "text-gray-300"}`}>{b.name}</h4>
                    <p className={`text-[10px] ${isActive ? "text-gray-300" : "text-gray-500"}`}>{b.desc}</p>
                  </div>
                  {isActive && (
                    <div className="w-5 h-5 rounded-full border border-sasi-red flex items-center justify-center">
                      <Check className="w-3 h-3 text-sasi-red stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
