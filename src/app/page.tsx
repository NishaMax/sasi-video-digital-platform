"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LanguageSelection } from "@/components/LanguageSelection";
import { BranchSelection } from "@/components/BranchSelection";
import { MobileHome } from "@/components/MobileHome";
import { MobileProducts } from "@/components/MobileProducts";
import { MobileServices } from "@/components/MobileServices";
import { MobileBranches } from "@/components/MobileBranches";
import { MobileContact } from "@/components/MobileContact";
import { BottomNav, Tab } from "@/components/BottomNav";
import { ProductDetail } from "@/components/ProductDetail";
import { PreferencesSheet } from "@/components/PreferencesSheet";
import { LanguageProvider, Language } from "@/lib/i18n";

export default function Home() {
  const [doorState, setDoorState] = useState<"closed" | "opening" | "open">("closed");
  const [logoState, setLogoState] = useState<"hidden" | "revealing" | "revealed">("hidden");
  
  // "splash" -> "language" -> "branch" -> "home"
  const [currentView, setCurrentView] = useState<"splash" | "language" | "branch" | "home">("splash");
  
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const [selectedBranch, setSelectedBranch] = useState<string>("kalawana");
  const [activeTab, setActiveTab] = useState<Tab>("home");
  
  // Modals / Overlays
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    if (currentView !== "splash") return;

    const t1 = setTimeout(() => {
      setDoorState("opening");
    }, 500);

    const t2 = setTimeout(() => {
      setDoorState("open");
      setLogoState("revealing");
    }, 1300);

    const t3 = setTimeout(() => {
      setLogoState("revealed");
    }, 2500);

    const t4 = setTimeout(() => {
      setCurrentView("language");
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [currentView]);

  return (
    <LanguageProvider language={selectedLanguage}>
      <main className="relative w-full min-h-screen overflow-x-hidden bg-background flex flex-col">
      
      {/* 
        Stage 1: Splash Screen Logo Reveal 
      */}
      {currentView === "splash" && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${doorState === "open" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className={`transform transition-all duration-1000 flex flex-col items-center ${logoState === "revealing" || logoState === "revealed" ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
            <div className="relative w-64 h-32 md:w-96 md:h-48 mb-4">
               <Image 
                 src="/Logo.png" 
                 alt="SASI VIDEO" 
                 fill 
                 className="object-contain drop-shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                 priority
               />
            </div>
            <div className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-center text-sasi-silver uppercase">
              Entertainment • Electronics • Trust
            </div>
          </div>
        </div>
      )}

      {/* The Doors (Overlay) */}
      {currentView === "splash" && doorState !== "open" && (
        <div className="absolute inset-0 flex pointer-events-none z-50">
          <div className={`w-1/2 h-full bg-sasi-black flex items-center justify-end overflow-hidden transition-transform duration-[1200ms] ease-in-out border-r-[1px] border-sasi-red/20 shadow-[5px_0_15px_rgba(229,9,20,0.1)] ${doorState === "opening" ? "-translate-x-full" : "translate-x-0"}`}>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-sasi-red/10 to-transparent"></div>
          </div>
          <div className={`w-1/2 h-full bg-sasi-black flex items-center justify-start overflow-hidden transition-transform duration-[1200ms] ease-in-out border-l-[1px] border-sasi-red/20 shadow-[-5px_0_15px_rgba(229,9,20,0.1)] ${doorState === "opening" ? "translate-x-full" : "translate-x-0"}`}>
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-sasi-red/10 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Stage 2: Language Selection */}
      {currentView === "language" && (
        <LanguageSelection 
          onSelect={(lang) => {
            setSelectedLanguage(lang);
            setCurrentView("branch");
          }} 
        />
      )}

      {/* Stage 3: Branch Selection */}
      {currentView === "branch" && (
        <BranchSelection 
          onSelect={(branch) => {
            setSelectedBranch(branch);
            setCurrentView("home");
          }} 
        />
      )}

      {/* Stage 4: Main Application Wrapper */}
      {currentView === "home" && selectedBranch && (
        <div className="w-full relative min-h-screen flex">

          {/* ── DESKTOP SIDEBAR (hidden on mobile) ── */}
          <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-56 lg:w-64 bg-[#0A0A0A] border-r border-gray-800/60 z-40 px-4 py-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-2 mb-10">
              <div className="w-8 h-8 bg-sasi-red rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">SV</span>
              </div>
              <div>
                <p className="text-white font-extrabold text-sm leading-none">SASI VIDEO</p>
                <p className="text-gray-500 text-[9px] font-medium mt-0.5">{selectedBranch === "kalawana" ? "Kalawana Branch" : "Ratnapura Branch"}</p>
              </div>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-1 flex-1">
              {[
                { id: "home", label: "Home", icon: "🏠" },
                { id: "products", label: "Products", icon: "📦" },
                ...(selectedBranch !== "kalawana" ? [{ id: "services", label: "Services", icon: "🔧" }] : []),
                { id: "branches", label: "Branches", icon: "📍" },
                { id: "contact", label: "Contact", icon: "✉️" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-left w-full ${
                    activeTab === item.id
                      ? "bg-sasi-red/10 text-sasi-red border border-sasi-red/20"
                      : "text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Bottom: Preferences + WhatsApp */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => setIsPreferencesOpen(true)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-all w-full"
              >
                <span>⚙️</span> Preferences
              </button>
              <a
                href="https://wa.me/94764177746"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-[#22C55E] hover:bg-green-600 transition-colors shadow-lg"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </aside>

          {/* ── MAIN CONTENT (offset by sidebar on md+) ── */}
          <div className="w-full md:ml-56 lg:ml-64">
            {activeTab === "home" && (
              <MobileHome 
                branch={selectedBranch} 
                language={selectedLanguage}
                onProductClick={setSelectedProduct} 
                onOpenPreferences={() => setIsPreferencesOpen(true)}
                onNavigate={setActiveTab}
              />
            )}
            {activeTab === "products" && <MobileProducts onProductClick={setSelectedProduct} />}
            {activeTab === "services" && <MobileServices />}
            {activeTab === "branches" && <MobileBranches />}
            {activeTab === "contact" && <MobileContact />}
          </div>

          {/* ── MOBILE BOTTOM NAV (hidden on md+) ── */}
          {!selectedProduct && (
            <div className="md:hidden">
              <BottomNav activeTab={activeTab} onChange={setActiveTab} branch={selectedBranch} />
            </div>
          )}

          {/* Product Detail Overlay */}
          {selectedProduct && (
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)} 
            />
          )}
          
          {/* Preferences Bottom Sheet */}
          <PreferencesSheet 
            isOpen={isPreferencesOpen}
            onClose={() => setIsPreferencesOpen(false)}
            language={selectedLanguage}
            setLanguage={setSelectedLanguage}
            branch={selectedBranch}
            setBranch={(newBranch) => {
              setSelectedBranch(newBranch);
              if (activeTab === "services" && newBranch === "kalawana") {
                setActiveTab("home");
              }
            }}
          />
        </div>
      )}
    </main>
    </LanguageProvider>
  );
}
