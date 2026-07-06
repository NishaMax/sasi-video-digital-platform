"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LanguageSelection } from "@/components/LanguageSelection";
import { BranchSelection } from "@/components/BranchSelection";
import { MobileHome } from "@/components/MobileHome";

export default function Home() {
  const [doorState, setDoorState] = useState<"closed" | "opening" | "open">("closed");
  const [logoState, setLogoState] = useState<"hidden" | "revealing" | "revealed">("hidden");
  
  // "splash" -> "language" -> "branch" -> "home"
  const [currentView, setCurrentView] = useState<"splash" | "language" | "branch" | "home">("splash");
  
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  useEffect(() => {
    if (currentView !== "splash") return;

    // Sequence:
    // 0ms: Closed
    // 500ms: Start opening doors
    // 1300ms: Doors fully open, start revealing logo
    // 2500ms: Logo fully revealed
    // 3500ms: Logo moves to normal state/fade out to show content
    
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

      {/* Stage 4: Homepage */}
      {currentView === "home" && selectedBranch && (
        <MobileHome branch={selectedBranch} />
      )}
    </main>
  );
}
