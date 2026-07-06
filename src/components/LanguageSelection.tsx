import { useState } from "react";
import { Globe } from "lucide-react";

export function LanguageSelection({ onSelect }: { onSelect: (lang: string) => void }) {
  const [animatingLang, setAnimatingLang] = useState<string | null>(null);

  const handleSelect = (lang: string) => {
    setAnimatingLang(lang);
    setTimeout(() => {
      onSelect(lang);
    }, 400); // 400ms animation before triggering the next step
  };

  const languages = [
    { code: "sinhala", label: "සිංහල", native: "සිංහල" },
    { code: "tamil", label: "தமிழ்", native: "தமிழ்" },
    { code: "english", label: "English", native: "English" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background w-full px-6 animate-in fade-in duration-700">
      <div className="text-center mb-10">
        <Globe className="w-12 h-12 mx-auto text-sasi-silver mb-4" />
        <h2 className="text-2xl font-semibold text-foreground">Choose Your Language</h2>
      </div>

      <div className="flex flex-col w-full max-w-sm gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`relative flex items-center justify-center p-6 bg-card rounded-2xl shadow-sm border border-sasi-silver/20 transition-all duration-300
              ${animatingLang === lang.code ? "scale-105 shadow-md border-sasi-red" : ""}
              ${animatingLang && animatingLang !== lang.code ? "opacity-30 scale-95" : "hover:shadow-md hover:-translate-y-1"}
            `}
          >
            <span className="text-xl font-medium text-foreground">{lang.native}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
