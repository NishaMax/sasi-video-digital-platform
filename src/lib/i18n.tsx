"use client";

import React, { createContext, useContext, ReactNode } from "react";

export type Language = "english" | "sinhala" | "tamil";

const translations = {
  english: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.branches": "Branches",
    "nav.contact": "Contact",

    // Home Page
    "home.welcome": "Welcome to Sasi Video",
    "home.slogan": "Entertainment • Electronics • Trust",
    "home.browseProducts": "Browse Products",
    "home.whatsapp": "WhatsApp",
    "home.callNow": "Call Now",
    "home.findBranch": "Find Branch",
    "home.featuredCategories": "Featured Categories",
    "home.viewAll": "View All",
    "home.ourServices": "Our Services",
    "home.ourBranches": "Our Branches",
    "home.mainBranch": "Main Branch",
    "home.servicesAvailable": "Services Available",
  },
  sinhala: {
    "nav.home": "මුල් පිටුව",
    "nav.products": "නිෂ්පාදන",
    "nav.services": "සේවාවන්",
    "nav.branches": "ශාඛා",
    "nav.contact": "විමසීම්",

    "home.welcome": "සසි වීඩියෝ වෙත සාදරයෙන් පිළිගනිමු",
    "home.slogan": "විනෝදාස්වාදය • ඉලෙක්ට්‍රොනික • විශ්වාසය",
    "home.browseProducts": "නිෂ්පාදන බලන්න",
    "home.whatsapp": "වට්ස්ඇප්",
    "home.callNow": "දැන් අමතන්න",
    "home.findBranch": "ශාඛාව සොයන්න",
    "home.featuredCategories": "විශේෂිත කාණ්ඩ",
    "home.viewAll": "සියල්ල බලන්න",
    "home.ourServices": "අපගේ සේවාවන්",
    "home.ourBranches": "අපගේ ශාඛා",
    "home.mainBranch": "ප්‍රධාන ශාඛාව",
    "home.servicesAvailable": "සේවාවන් ඇත",
  },
  tamil: {
    "nav.home": "முகப்பு",
    "nav.products": "தயாரிப்புகள்",
    "nav.services": "சேவைகள்",
    "nav.branches": "கிளைகள்",
    "nav.contact": "தொடர்பு",

    "home.welcome": "சசி வீடியோவுக்கு வரவேற்கிறோம்",
    "home.slogan": "பொழுதுபோக்கு • மின்னணுவியல் • நம்பிக்கை",
    "home.browseProducts": "தயாரிப்புகளைக் காண்க",
    "home.whatsapp": "வாட்ஸ்அப்",
    "home.callNow": "அழைக்க",
    "home.findBranch": "கிளையை தேடுங்கள்",
    "home.featuredCategories": "சிறப்பு வகையினங்கள்",
    "home.viewAll": "அனைத்தையும் காண்க",
    "home.ourServices": "எங்கள் சேவைகள்",
    "home.ourBranches": "எங்கள் கிளைகள்",
    "home.mainBranch": "முக்கிய கிளை",
    "home.servicesAvailable": "சேவைகள் உள்ளன",
  }
};

type Translations = typeof translations.english;
export type TranslationKeys = keyof Translations;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  language, 
  children 
}: { 
  language: Language, 
  children: ReactNode 
}) {
  const t = (key: TranslationKeys): string => {
    // Fallback to English if translation is missing
    return translations[language][key] || translations.english[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
