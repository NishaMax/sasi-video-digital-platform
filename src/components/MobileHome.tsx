"use client";

import { 
  Search, Phone, MessageCircle, MapPin, Grid, 
  ChevronRight, Tv, Speaker, Smartphone, Shield, Wifi, Headphones, 
  Monitor, ChevronDown
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function MobileHome({ 
  branch, 
  language,
  onProductClick,
  onOpenPreferences,
  onNavigate
}: { 
  branch: string, 
  language: string,
  onProductClick: (product: any) => void,
  onOpenPreferences: () => void,
  onNavigate: (tab: any) => void
}) {
  const { t } = useLanguage();
  
  const branchName = branch === "kalawana" ? "Kalawana" : "Ratnapura";
  const langCode = language === "english" ? "GB" : language === "sinhala" ? "LK" : "IN";

  const categories = [
    { name: "Televisions", count: "15 Items", icon: Tv },
    { name: "Audio Systems", count: "12 Items", icon: Speaker },
    { name: "Mobile Accessories", count: "25 Items", icon: Smartphone },
    { name: "CCTV & Security", count: "8 Items", icon: Shield },
    { name: "Networking", count: "10 Items", icon: Wifi },
    { name: "Headphones", count: "18 Items", icon: Headphones }
  ];

  const featuredProducts = [
    { name: 'Samsung 42" 4K Smart TV', badge: "In Stock", badgeColor: "bg-sasi-red", icon: Tv },
    { name: "Sony HT-S40R Soundbar", badge: "Fast Service", badgeColor: "bg-green-600", icon: Speaker },
    { name: "JBL Flip 6 Bluetooth Speaker", badge: "In Stock", badgeColor: "bg-sasi-red", icon: Speaker },
    { name: "Hikvision 4-Camera CCTV Kit", badge: "In Stock", badgeColor: "bg-sasi-red", icon: Shield }
  ];

  const services = [
    { name: "Mobile Phone Repair", desc: "Battery swap, charging port repair, software issues.", icon: Smartphone },
    { name: "Speaker & Audio Repair", desc: "Woofer refoaming, amplifier board repair, bluetooth module replacement.", icon: Speaker },
    { name: "TV Display Replacement", desc: "LED backlight repair, panel replacement.", icon: Monitor },
    { name: "CCTV Installation", desc: "Professional installation of security cameras, DVR setup, remote viewing.", icon: Shield }
  ];

  const mapsUrl = branch === "kalawana"
    ? "https://maps.google.com/?q=Kalawana,Sri+Lanka"
    : "https://maps.google.com/?q=Outer+Circular+Road,Ratnapura,Sri+Lanka";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white pb-24 md:pb-10 font-sans">

      {/* ── TOP HEADER ── */}
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 pt-4 pb-2 max-w-7xl mx-auto w-full">
        <button className="text-gray-400 p-2 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <div
          onClick={onOpenPreferences}
          className="flex items-center gap-1.5 bg-[#1A1A1A] border border-gray-800 px-3 py-1.5 rounded-full cursor-pointer hover:border-gray-700 transition-colors"
        >
          <span className="font-extrabold text-[11px] text-white tracking-wider">{langCode}</span>
          <span className="text-[11px] text-gray-300 font-semibold">
            {t("nav.home") === "Home" ? branchName : (branch === "kalawana" ? "කලවාන" : "රත්නපුර")}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-500 ml-0.5" />
        </div>
      </div>

      {/* ── HERO CARD ── */}
      <div className="px-5 md:px-10 lg:px-20 mb-6 max-w-7xl mx-auto w-full">
        <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#141414] to-[#111111] rounded-[20px] p-8 md:p-12 border border-gray-800/60 overflow-hidden min-h-[160px] md:min-h-[240px] flex flex-col justify-center">
          <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-[#1F1F1F] to-transparent opacity-60"></div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-sasi-red/5 blur-2xl"></div>
          <div className="relative z-10">
            <span className="text-[10px] font-bold text-sasi-red uppercase tracking-[0.15em] block mb-2">
              {t("home.slogan")}
            </span>
            <h1 className="text-[22px] md:text-4xl font-extrabold text-white mb-2 leading-tight">
              {t("home.welcome")}
            </h1>
            <p className="text-xs md:text-sm text-gray-500">{branchName} Branch</p>
          </div>
        </div>
      </div>

      {/* ── QUICK ACTIONS (2-col mobile → 4-col desktop) ── */}
      <div className="px-5 md:px-10 lg:px-20 mb-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => onNavigate("products")}
            className="bg-sasi-red hover:bg-red-700 active:scale-[0.97] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            <Grid className="w-4 h-4" />
            {t("home.browseProducts")}
          </button>
          <a
            href="https://wa.me/94764177746"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-green-600 active:scale-[0.97] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            {t("home.whatsapp")}
          </a>
          <a
            href="tel:0764177746"
            className="bg-transparent border border-gray-800 hover:border-gray-600 active:scale-[0.97] text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            {t("home.callNow")}
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-gray-800 hover:border-gray-600 active:scale-[0.97] text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all"
          >
            <MapPin className="w-4 h-4" />
            {t("home.findBranch")}
          </a>
        </div>
      </div>

      {/* ── FEATURED CATEGORIES ── */}
      <div className="mb-10 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 mb-6">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">{t("home.featuredCategories")}</h2>
          <span
            onClick={() => onNavigate("products")}
            className="text-xs text-sasi-red font-semibold cursor-pointer hover:text-red-400 transition-colors flex items-center gap-0.5"
          >
            {t("home.viewAll")} <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="flex gap-4 md:gap-8 px-5 md:px-10 lg:px-20 overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:justify-start">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 min-w-[72px] md:min-w-[90px] cursor-pointer group">
              <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-[#161616] border border-gray-800 flex items-center justify-center group-hover:border-sasi-red/50 group-hover:scale-105 transition-all shadow-lg">
                <cat.icon className="w-6 h-6 text-sasi-red stroke-[1.5] group-hover:text-white transition-colors" />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-[10px] md:text-xs text-gray-300 leading-tight">{cat.name}</h3>
                <span className="text-[9px] md:text-[10px] text-gray-600 block mt-1">{cat.count}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3 min-w-[72px] md:min-w-[90px] cursor-pointer group">
            <a
              href="https://wa.me/94764177746"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center group-hover:bg-[#22C55E]/20 group-hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-6 h-6 text-[#22C55E] fill-[#22C55E]" />
            </a>
            <div className="text-center">
              <h3 className="font-semibold text-[10px] md:text-xs text-[#22C55E] leading-tight">WhatsApp</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURED PRODUCTS ── */}
      <div className="mb-12 max-w-7xl mx-auto w-full">
        <div className="flex overflow-x-auto gap-4 px-5 md:px-10 lg:px-20 pb-4 scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
          {featuredProducts.map((product, i) => (
            <div
              key={i}
              onClick={() => onProductClick({ ...product, desc: "Premium product available at Sasi Video. Ask us for more details." })}
              className="min-w-[160px] max-w-[160px] md:min-w-full md:max-w-full bg-[#121212] border border-gray-800/60 rounded-2xl overflow-hidden cursor-pointer group hover:border-gray-600 hover:-translate-y-1 transition-all flex-shrink-0 shadow-lg"
            >
              <div className="w-full h-[120px] md:h-[180px] bg-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
                <product.icon className="w-12 h-12 md:w-16 md:h-16 text-gray-700 stroke-[1] group-hover:scale-110 transition-transform duration-500" />
                <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>
                  {product.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-200 leading-tight line-clamp-2 group-hover:text-white transition-colors">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR SERVICES (Ratnapura only) ── */}
      {branch === "ratnapura" && (
        <div className="px-5 md:px-10 lg:px-20 mb-12 max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">{t("home.ourServices")}</h2>
            <span
              onClick={() => onNavigate("services")}
              className="text-xs text-sasi-red font-semibold cursor-pointer hover:text-red-400 transition-colors flex items-center gap-0.5"
            >
              {t("home.viewAll")} <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="bg-[#121212] border border-gray-800/60 rounded-2xl p-5 cursor-pointer hover:border-gray-600 hover:-translate-y-1 transition-all shadow-lg group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sasi-red/10 flex items-center justify-center mb-4 group-hover:bg-sasi-red/20 transition-colors">
                  <service.icon className="w-5 h-5 text-sasi-red stroke-[1.5]" />
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight mb-2">{service.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── OUR BRANCHES ── */}
      <div className="px-5 md:px-10 lg:px-20 mb-12 max-w-7xl mx-auto w-full">
        <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-6">{t("home.ourBranches")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* Kalawana Branch */}
          <div className="bg-[#121212] border border-gray-800/60 rounded-2xl p-6 shadow-lg hover:border-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-base font-bold text-white">Kalawana Branch</h3>
              <span className="bg-sasi-red text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase">{t("home.mainBranch")}</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600 flex-shrink-0" />
              Main Street, Kalawana
            </p>
            <div className="flex gap-3">
              <a href="tel:0764177746" className="flex-1 bg-transparent border border-gray-800 text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium hover:border-gray-600 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#22C55E] text-white flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold hover:bg-green-600 transition-colors shadow-lg">
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Ratnapura Branch */}
          <div className="bg-[#121212] border border-gray-800/60 rounded-2xl p-6 shadow-lg hover:border-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-base font-bold text-white">Ratnapura Branch</h3>
              <span className="bg-green-700 text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase">{t("home.servicesAvailable")}</span>
            </div>
            <p className="text-[10px] md:text-xs text-gray-500 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600 flex-shrink-0" />
              Outer Circular Road, Ratnapura
            </p>
            <div className="flex gap-3">
              <a href="tel:0764177746" className="flex-1 bg-transparent border border-gray-800 text-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium hover:border-gray-600 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="https://wa.me/94764177746" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#22C55E] text-white flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold hover:bg-green-600 transition-colors shadow-lg">
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── FLOATING WHATSAPP (mobile only) ── */}
      <div className="fixed bottom-20 right-5 z-40 md:hidden">
        <a
          href="https://wa.me/94764177746"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#22C55E] text-white p-3 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>

    </div>
  );
}
