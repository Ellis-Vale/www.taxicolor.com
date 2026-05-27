'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  FileText,
  LayoutDashboard,
  Compass,
  ArrowRight,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  DollarSign,
  Layers,
  Globe,
  Building2,
  Sparkles,
  Award,
  ChevronRight,
  Database,
  RefreshCw,
  Scale,
  Anchor,
  AlertCircle
} from 'lucide-react';

export default function GlobalSourcingHome() {
  const [mounted, setMounted] = useState(false);
  const [activeEngineTab, setActiveEngineTab] = useState(0);
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [skuCount, setSkuCount] = useState(1500);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FFC700] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Sourcing cost comparison parameters
  const traditionalAgencyFee = Math.round(skuCount * 45); // Traditional agencies charge ~5% total purchase value
  const taxicolorFlatFee = billingCycle === 'monthly' 
    ? 299 * 12 + Math.round(skuCount * 5)
    : Math.round((249 * 12 + skuCount * 4.5));
  const moneySaved = traditionalAgencyFee - taxicolorFlatFee;

  const heroShowcaseSlides = [
    {
      img: '/img/oem_catalog_app_mockup.png',
      title: 'Digital Catalog & OEM Cross-Reference',
      badge: 'B2B SHOWROOM',
      desc: 'Blazing-fast automotive parts database with multi-field cross-referencing, deployed globally at Edge CDN.'
    },
    {
      img: '/img/consumerlens_market_radar.png',
      title: 'ConsumerLens Demand Analytics',
      badge: 'TRADE RADAR',
      desc: 'Real-time global customs flow heatmaps and buyer sentiment intelligence to capture emergent product demands.'
    },
    {
      img: '/img/director_client_workshop.png',
      title: 'Ground Workshop Tolerances',
      badge: 'FACTORY INSPECTION',
      desc: 'On-site technical auditing, blue-print calibration, and robotic PLC testing at localized automotive clusters.'
    }
  ];

  const tradeEngines = [
    {
      id: 'discovery',
      name: 'Direct-to-Source (D2S) Factory Engine',
      badge: 'DISCOVERY INGEST',
      desc: 'Bypasses markup-heavy trading agencies by scanning regional corporate databases and ex-factory registrations using semantic trade algorithms to isolate verified tier-1 manufacturers.',
      cost: '$99 - $249 / Mo',
      appUi: '/img/tunan_app_foreign_wechat_ui.png',
      buyerScene: '/img/director_app_foreign_wechat_scene.png',
      buyerName: 'Sophia Lin',
      buyerTitle: 'E-commerce Seller, New York',
      features: ['Tier-1 Manufacturer Verification rating', 'Real-time ex-works price baseline', 'Bilingual instant-translate dialogs']
    },
    {
      id: 'quality',
      name: 'QA & Tolerance Prediction Engine',
      badge: 'RISK CALIBRATION',
      desc: 'Cross-checks manufacturing quality by analyzing high-resolution parts photos, pleat structures, and factory certificates against official laboratory standards and historic component failure datasets.',
      cost: '$149 / Report',
      appUi: '/img/tunan_app_video_factory_ui.png',
      buyerScene: '/img/director_app_video_factory_scene.png',
      buyerName: 'Aarav Patel',
      buyerTitle: 'Procurement Director, London',
      features: ['Certificate authenticity verification', 'Materials & pleat tolerance heatmap analysis', 'Suggested on-site technical QA guidelines']
    },
    {
      id: 'document',
      name: 'Autonomous TradeDoc & Auditing Engine',
      badge: 'CUSTOMS AUTOMATION',
      desc: 'Generates export-ready, fully compliant shipping documentation (PI, PL, CO drafts) while auditing HS Codes and customs value statements to eliminate transit delays.',
      cost: '$49 - $199 / Mo',
      appUi: '/img/tunan_app_trade_manager_ui.png',
      buyerScene: '/img/director_app_trade_manager_scene.png',
      buyerName: 'Mateo Silva',
      buyerTitle: 'Logistics Lead, Miami Port',
      features: ['Dynamic PI-PL-Customs valuation reconciliation', 'Automated EU/US custom template rendering', 'Direct integration with freight carrier APIs']
    },
    {
      id: 'supply-chain',
      name: 'Consolidated Supply Chain Control Center',
      badge: 'LOGISTICS CONTROL',
      desc: 'Consolidates 5-15 separate component factories into a single real-time dashboard. Uses predictive logistics models to forecast shipping bottlenecks and tracking delays.',
      cost: '$199 - $499 / Mo',
      appUi: '/img/tunan_app_director_assistant_ui.png',
      buyerScene: '/img/director_app_assistant_scene.png',
      buyerName: 'Lars Lindqvist',
      buyerTitle: 'VP Supply Chain, Stockholm',
      features: ['Multi-supplier assembly line pacing', 'Port-bottleneck & weather risk calculation', 'Autonomous local safety-stock alerts']
    },
    {
      id: 'compliance',
      name: 'Global Regulatory & Compliance Watchdog',
      badge: 'COMPLIANCE PATHWAYS',
      desc: 'Maps custom regulatory pathways based on destination market standards, sending automatic notifications on changes (REACH directives, EU Battery Passports, etc.).',
      cost: 'Free Basic Tier',
      appUi: '/img/tunan_app_compliance_assistant_ui.png',
      buyerScene: '/img/director_app_operation_scene.png',
      buyerName: 'Amara Diop',
      buyerTitle: 'Compliance Counsel, Paris',
      features: ['Mandatory certificate compliance pathways', 'ECHA REACH / RoHS dynamic monitoring', 'Encrypted global compliance repository']
    },
    {
      id: 'negotiation',
      name: 'Technical Cost-Modeling Copilot',
      badge: 'PROCUREMENT INTELLIGENCE',
      desc: 'Applies deep indexing of raw material index charts and localized manufacturing margins to establish target ex-works prices for high-precision business negotiations.',
      cost: '$99 / Mo',
      appUi: '/img/tunan_app_market_insight_ui.png',
      buyerScene: '/img/director_app_market_insight_scene.png',
      buyerName: 'Zayd Al-Mansoori',
      buyerTitle: 'Managing Partner, Dubai',
      features: ['Ex-factory raw material price baseline tracking', 'Contract payment structure risk scoring', 'Technical blueprint cost estimation models']
    }
  ];

  return (
    <div className="bg-[#080C14] text-[#F8FAFC] font-sans min-h-screen antialiased flex flex-col selection:bg-[#FFC700] selection:text-[#080C14]">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0B0F17] text-slate-400 text-center text-xs py-3 px-6 border-b border-white/5 tracking-wider font-medium flex items-center justify-center gap-2">
        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#FFC700] text-[#080C14] uppercase tracking-widest animate-pulse">Enterprise Live</span>
        <span>Verified 6,000+ Auto Filter OEM Catalog deployed at <a href="https://filtration.taxicolor.com" target="_blank" rel="noopener noreferrer" className="text-[#FFC700] underline font-bold hover:text-[#FFE37F] transition-colors">filtration.taxicolor.com</a> for direct RFQ routing.</span>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 bg-[#080C14]/85 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Minimalist SVG Emblem */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg shadow-black/40">
              <svg viewBox="0 0 100 100" className="w-6.5 h-6.5">
                <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                <polygon points="50,42 50,75 35,53" fill="#FFC700" />
                <polygon points="50,42 50,75 65,53" fill="#D99B00" />
                <polygon points="35,53 50,75 38,78 24,58" fill="#F5B041" />
                <polygon points="65,53 50,75 62,78 76,58" fill="#B77900" />
                <polygon points="50,75 38,78 50,88" fill="#FFC700" />
                <polygon points="50,75 62,78 50,88" fill="#B77900" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                <span className="font-heading text-base font-black text-white tracking-tight">taxi</span>
                <span className="font-heading text-base font-black text-[#FFC700] tracking-tight">color</span>
              </div>
              <span className="text-[8.5px] text-[#FFC700]/70 font-black tracking-widest uppercase block -mt-1 font-mono">BUDORCAS B2B</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
            <a href="#solutions" className="hover:text-white hover:underline decoration-[#FFC700] decoration-2 underline-offset-4 transition-colors">Trade Engines</a>
            <a href="#totem" className="hover:text-white hover:underline decoration-[#FFC700] decoration-2 underline-offset-4 transition-colors">The Totem</a>
            <a href="#transparency" className="hover:text-white hover:underline decoration-[#FFC700] decoration-2 underline-offset-4 transition-colors">Flat-Fee Sourcing</a>
            <a href="#ops" className="hover:text-white hover:underline decoration-[#FFC700] decoration-2 underline-offset-4 transition-colors">Ground Operations</a>
            <a href="#calculator" className="hover:text-white hover:underline decoration-[#FFC700] decoration-2 underline-offset-4 transition-colors">Cost Calculator</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://filtration.taxicolor.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2.5 rounded-lg border border-white/10 hover:border-[#FFC700]/40 font-heading text-[10px] font-bold uppercase tracking-wider transition-all text-white bg-white/5 hover:bg-[#FFC700]/5 flex items-center gap-1.5 shadow-sm"
            >
              <Database className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Browse Catalog</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. PREMIUM MINIMAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden cyber-grid">
        {/* Soft atmospheric amber ambient glows */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-slate-900/50 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC700] animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFC700]">Budorcas taxicolor • Direct-to-Source</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
              High-Altitude Precision.<br />
              <span className="bg-gradient-to-r from-[#FFC700] via-[#FFE57F] to-white bg-clip-text text-transparent">
                Direct Sourcing Saffron.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-body max-w-xl font-medium">
              We automate supplier discovery, run laboratory tolerance prediction models, audit industrial specifications, and orchestrate customs logistics directly from Waigaoqiao FTZ — all for a flat, transparent subscription. Zero middleman markup.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#solutions" 
                className="px-6 py-4 rounded-xl bg-[#FFC700] hover:bg-[#FFE37F] font-heading text-xs font-bold uppercase tracking-wider transition-all text-[#080C14] flex items-center gap-2 shadow-lg shadow-[#FFC700]/15 hover:shadow-[#FFC700]/25 transform hover:-translate-y-0.5"
              >
                <span>Explore Sourcing Engines</span>
                <ArrowRight className="w-4 h-4 text-[#080C14]" />
              </a>
              <a 
                href="https://filtration.taxicolor.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 font-heading text-xs font-bold uppercase tracking-wider transition-all text-white flex items-center gap-1.5 shadow-sm hover:bg-white/[0.08]"
              >
                <span>Automotive OEM Catalog</span>
              </a>
            </div>

            {/* Credibility Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg">
              <div>
                <span className="text-2xl font-black text-white block">6,000+</span>
                <span className="text-[9px] text-[#FFC700] font-extrabold uppercase tracking-wider block mt-0.5 font-mono">Auto SKU Mapped</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">0%</span>
                <span className="text-[9px] text-[#FFC700] font-extrabold uppercase tracking-wider block mt-0.5 font-mono">Billing Markup</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">&lt;18ms</span>
                <span className="text-[9px] text-[#FFC700] font-extrabold uppercase tracking-wider block mt-0.5 font-mono">Edge CDN Sync</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Mockup Slider */}
          <div className="lg:col-span-5 relative group flex justify-center w-full">
            <div className="relative w-full max-w-[430px]">
              {/* Gold backing glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FFC700]/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-45 transition duration-300" />
              
              <div className="relative bg-[#0F131C] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4">
                
                {/* Simulated Web Address Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">www.taxicolor.com/showroom</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFC700]/80 shadow-[0_0_8px_rgba(255,199,0,0.5)]" />
                </div>

                {/* Slideshow Display Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHeroTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={heroShowcaseSlides[activeHeroTab].img} 
                        alt={heroShowcaseSlides[activeHeroTab].title}
                        fill
                        className="object-cover opacity-75 transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/20 to-transparent" />
                      
                      {/* Floating Indicator */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[8px] font-extrabold bg-[#FFC700] text-[#080C14] uppercase tracking-wider shadow font-mono">
                        {heroShowcaseSlides[activeHeroTab].badge}
                      </span>

                      {/* Title & Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                        <h4 className="font-heading text-xs font-black text-white tracking-wide uppercase">
                          {heroShowcaseSlides[activeHeroTab].title}
                        </h4>
                        <p className="text-[9.5px] text-slate-400 leading-relaxed font-body">
                          {heroShowcaseSlides[activeHeroTab].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slideshow Tabs */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {heroShowcaseSlides.map((slide, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHeroTab(idx)}
                      className={`px-2.5 py-2 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                        activeHeroTab === idx 
                          ? 'border-[#FFC700]/40 bg-[#FFC700]/10 text-white shadow-md' 
                          : 'border-white/5 bg-white/[0.02] text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-[8px] block font-mono uppercase font-bold tracking-widest text-[#FFC700]/70">Step {idx + 1}</span>
                      <span className="text-[9.5px] font-extrabold truncate block font-heading">{slide.badge}</span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE BRAND STORY: THE TOTEM OF BUDORCAS */}
      <section id="totem" className="py-28 bg-[#0B0F17] border-y border-white/5 relative overflow-hidden">
        {/* Abstract lines or decorations for premium layout */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFC700]/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-80 h-80 bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#FFC700]/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#FFC700]/20 rounded-bl-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Brand Story Copy */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-8 bg-[#FFC700]" />
                  <span className="font-heading text-[10px] font-bold text-[#FFC700] tracking-widest uppercase font-mono">OUR BRAND ORIGIN</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
                  Taxicolor is not the color of a taxi.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed font-body">
                  It is the scientific classification of the Takin (*Budorcas taxicolor*)—a legendary, robust beast that carves its path along the unforgiving, vertical cliffs of the Himalayas at altitudes of 3,000 meters. 
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-body">
                  Strong, rare, and completely off-the-beaten-path, the *Budorcas taxicolor* is our spiritual totem. Standard trading corporations rely on simple email markups and crowded wholesale markets. We operate like the Takin: resiliently scaling high-altitude manufacturing barriers, auditing engineering specifications on the factory floor, and securing robust supply lines directly to you.
                </p>
                
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-slate-300">
                    <span className="text-[#FFC700]">✓</span> 3,000m Alpine Totem
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-slate-300">
                    <span className="text-[#FFC700]">✓</span> Absolute Resilience
                  </div>
                </div>
              </div>

              {/* Brand Story Emblem/Visual presentation */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-72 h-72 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center group shadow-inner">
                  {/* Outer spinning hexagon */}
                  <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite]" />
                  
                  {/* Large Premium Golden SVG Emblem */}
                  <svg viewBox="0 0 100 100" className="w-44 h-44 drop-shadow-[0_0_20px_rgba(255,199,0,0.15)] group-hover:scale-105 transition-transform duration-500">
                    <polygon points="50,3 90,26 90,74 50,97 10,74 10,26" fill="none" stroke="#FFC700" stroke-width="1.5" stroke-opacity="0.3" />
                    
                    <g id="big-emblem">
                      {/* Left Horn */}
                      <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                      <polygon points="30,22 12,28 32,32" fill="#E65100" opacity="0.4" />

                      {/* Right Horn */}
                      <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                      <polygon points="70,22 88,28 68,32" fill="#E65100" opacity="0.6" />

                      {/* Forehead */}
                      <polygon points="50,42 50,75 35,53" fill="#FFC700" />
                      <polygon points="50,42 50,75 65,53" fill="#D99B00" />

                      {/* Cheeks */}
                      <polygon points="35,53 50,75 38,78 24,58" fill="#F5B041" />
                      <polygon points="65,53 50,75 62,78 76,58" fill="#B77900" />

                      <polygon points="50,42 35,53 24,58 30,22" fill="#FFE082" />
                      <polygon points="50,42 65,53 76,58 70,22" fill="#F5B041" opacity="0.85" />
                      
                      <polygon points="50,75 38,78 50,88" fill="#FFC700" />
                      <polygon points="50,75 62,78 50,88" fill="#B77900" />
                    </g>
                  </svg>
                  
                  <span className="absolute bottom-6 font-mono text-[9px] tracking-widest text-[#FFC700] uppercase font-bold">BUDORCAS TAXICOLOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CAPABILITIES COMPARISON SECTION */}
      <section id="transparency" className="py-24 bg-gradient-to-b from-[#080C14] to-[#0B0F17] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <span className="font-heading text-[10px] font-bold text-[#FFC700] tracking-widest uppercase font-mono bg-[#FFC700]/10 px-3.5 py-1.5 rounded-full border border-[#FFC700]/20">
              DEEP TRANSPARENCY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
              100% Price Penetration. Pure Sourcing.
            </h2>
            <p className="text-sm text-slate-400 font-body">
              Traditional trade agents claim "0% commission" yet collect opaque factory kickbacks, inflating direct unit costs by 5% to 15%. Taxicolor aligns strictly with your profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* The Traditional Agent Model */}
            <div className="bg-white/[0.01] rounded-3xl p-8 sm:p-10 border border-white/5 text-left space-y-6">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-red-400 bg-red-950/20 border border-red-900/30 rounded uppercase font-mono">
                  Traditional Import Agent
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">OPAQUE COMMISSION</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Hidden Invoice Inflation & Conflicted Interests</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-body">
                Traditional agents restrict ex-works invoice visibility. They control supplier contacts, manipulate batch prices, and secure hidden manufacturer rebates while claiming simple flat fees. You ultimately bear the inflated cost margins.
              </p>
              <ul className="space-y-3 pt-4 border-t border-white/5 font-body text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>Opaque Unit Pricing:</strong> Direct factory raw invoices are strictly withheld.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>Opaque Quality Auditing:</strong> Standard sourcing sales agents lack engineering assets to audit physical tolerances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>Supplier Lock-in:</strong> They hide factory identities, denying you real-time supply chain sovereignty.</span>
                </li>
              </ul>
            </div>

            {/* The Taxicolor Flat-Fee Tech Sourcing Model */}
            <div className="bg-[#0F131C] text-white rounded-3xl p-8 sm:p-10 border border-white/10 text-left space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC700]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex justify-between items-center relative z-10">
                <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-[#080C14] bg-[#FFC700] rounded uppercase font-mono">
                  Taxicolor Flat-Fee Engine
                </span>
                <span className="text-xs font-bold text-[#FFC700] font-mono">100% TRANSPARENT</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white relative z-10">Direct Factory Billing & Complete Tech Sovereignty</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-body relative z-10">
                We act as your local engineering arm and software interface in China. Factory billings go directly to you with 0% markup. You pay a transparent, highly predictable monthly subscription or project fee.
              </p>
              <ul className="space-y-3 pt-4 border-t border-white/5 font-body text-xs text-slate-350 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>100% Price Penetration:</strong> Original ex-works invoices. You pay precisely what the manufacturer charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Hands-On Workshop QA:</strong> Run by former big-tech software and process architects, auditing assembly line PLC controls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong>Self-Custodial Databases:</strong> Direct ownership of all supplier coordinates, technical specifications, and shipping documentation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SHOWCASE OF THE 6 AUTONOMOUS ENGINES */}
      <section id="solutions" className="py-24 bg-[#080C14] cyber-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <span className="font-heading text-[10px] font-bold text-[#FFC700] tracking-widest uppercase bg-[#FFC700]/10 px-3 py-1 rounded-full border border-[#FFC700]/25 font-mono">
              TAXICOLOR TRADE ENGINES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
              Real-World Operations. Encapsulated in Software.
            </h2>
            <p className="text-sm text-slate-400 font-body">
              Click through our custom digital trade modules. Observe how each software interface is backed by rigorous, physical operations on the manufacturing workshop floors.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {tradeEngines.map((engine, idx) => (
              <button
                key={engine.id}
                onClick={() => setActiveEngineTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading border transition-all duration-300 cursor-pointer ${
                  activeEngineTab === idx
                    ? 'bg-[#FFC700] border-[#FFC700] text-[#080C14] shadow-md shadow-[#FFC700]/10'
                    : 'bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {engine.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Product Info Description */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-[#FFC700] bg-[#FFC700]/10 border border-[#FFC700]/25 rounded uppercase font-mono">
                  {tradeEngines[activeEngineTab].badge}
                </span>
                <h3 className="font-heading text-2xl font-black text-white leading-snug">
                  {tradeEngines[activeEngineTab].name}
                </h3>
                <p className="text-xs text-slate-450 leading-relaxed font-body">
                  {tradeEngines[activeEngineTab].desc}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="text-[9px] font-extrabold text-[#FFC700]/80 uppercase tracking-widest block font-heading font-mono">Engine Specifications</span>
                  <div className="space-y-2">
                    {tradeEngines[activeEngineTab].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC700] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between bg-white/[0.02] rounded-2xl p-4 border border-white/5">
                  <div>
                    <span className="text-[8px] font-extrabold uppercase text-slate-400 font-heading block font-mono">Transparent Billing</span>
                    <span className="text-sm font-black text-white font-heading">{tradeEngines[activeEngineTab].cost}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">Self-Service Module</span>
                </div>
              </div>

              {/* Graphic Display Side: App UI + Buyer Scene Side-by-Side Carousel */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. App UI Mockup Display */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase font-heading block text-center font-mono">📱 ENGINE CONTROLS INTERFACE</span>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#080C14] shadow-lg relative group">
                    <Image 
                      src={tradeEngines[activeEngineTab].appUi} 
                      alt="App UI Screenshot" 
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#080C14]/10 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Buyer Scene Photograph Display */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase font-heading block text-center font-mono">🌍 LOCALIZED LOGISTICS AUDIT</span>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#0F131C] shadow-lg relative group">
                    <Image 
                      src={tradeEngines[activeEngineTab].buyerScene} 
                      alt="Buyer Scene Photo" 
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#080C14]/10 pointer-events-none" />
                    
                    {/* Buyer Label */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#0F131C]/90 backdrop-blur-md rounded-xl p-2.5 text-left border border-white/5 shadow">
                      <span className="text-[9px] font-bold text-white block font-heading">{tradeEngines[activeEngineTab].buyerName}</span>
                      <span className="text-[8px] font-medium text-slate-450 block font-body">{tradeEngines[activeEngineTab].buyerTitle}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. GROUND OPERATIONS SECTION */}
      <section id="ops" className="py-24 bg-[#0B0F17] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Grid */}
          <div className="lg:col-span-5 relative group flex justify-center w-full">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FFC700]/30 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
              
              <div className="relative bg-[#0F131C] border border-white/5 rounded-3xl overflow-hidden shadow-2xl p-4 text-center space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
                  <Image 
                    src="/img/tunan_portrait.png" 
                    alt="Tunan Portrait" 
                    fill
                    className="object-cover opacity-85"
                    onError={(e) => {
                      e.currentTarget.src = "/img/logo_dark_mode.png";
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-sm font-black text-white font-heading">TUNAN (DALONG)</span>
                    <span className="text-[8px] font-extrabold tracking-widest text-[#080C14] bg-[#FFC700] px-1 py-0.5 rounded uppercase font-mono">
                      ON-SITE PARTNER
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-450 font-bold block mt-0.5">Former Big-Tech Full-Stack Architect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-[#FFC700] bg-[#FFC700]/10 rounded-full uppercase border border-[#FFC700]/20 inline-block font-heading font-mono">
              YOUR ON-SITE AUDIT LEADER
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
              An Elite Software Mind in the Molding Workshops.
            </h2>
            <p className="text-sm text-slate-450 leading-relaxed font-body">
              Standard import intermediaries act purely as brokers, focused entirely on markup percentages while remaining blind to technical specifications. We approach global sourcing differently.
            </p>
            <p className="text-sm text-slate-450 leading-relaxed font-body">
              Tunan (Dalong), a veteran big-tech system architect, personally audits parts manufacturers. We analyze mold structures, inspect raw steel grades, and calibrate robotic assembly lines to guarantee every component batch adheres rigorously to digital blueprint standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-2.5 text-left">
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl shrink-0">
                  <Globe className="w-5 h-5 text-[#FFC700]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block font-heading">Bilingual Engineering Dialogs</span>
                  <span className="text-[10px] text-slate-400 leading-relaxed font-body block mt-0.5">Seamless, fluent technical negotiation directly with foreign managers. Zero translations friction.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-left">
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl shrink-0">
                  <Anchor className="w-5 h-5 text-[#FFC700]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block font-heading">Waigaoqiao FTZ Consolidation</span>
                  <span className="text-[10px] text-slate-400 leading-relaxed font-body block mt-0.5">Consolidate multiple component batches at Waigaoqiao Free Trade Zone to optimize shipping density and duties.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. DYNAMIC SKU ELASTIC COST CALCULATOR */}
      <section id="calculator" className="py-24 bg-[#080C14] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-3">
            <span className="font-heading text-[10px] font-bold text-[#FFC700] tracking-widest uppercase bg-[#FFC700]/10 px-3 py-1 rounded-full border border-[#FFC700]/25 inline-block font-mono">
              COST COMPARISON CALCULATOR
            </span>
            <h2 className="font-heading text-3xl font-black text-white leading-tight">
              Compare Sourcing Structures Instantly.
            </h2>
            <p className="text-xs text-slate-450 font-body max-w-lg mx-auto">
              Use the slider to set your catalog SKU volume. Estimate your total annual savings under Taxicolor's transparent subscription model against standard commission agents.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/5 shadow-xl space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="sku-slider" className="text-xs font-bold text-white uppercase tracking-wide font-heading font-mono">Catalog SKU Count</label>
                <span className="text-lg font-black text-[#FFC700] font-heading">{skuCount.toLocaleString()} SKUs</span>
              </div>
              <input
                id="sku-slider"
                type="range"
                min="100"
                max="5000"
                step="50"
                value={skuCount}
                onChange={(e) => setSkuCount(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>100 SKUs</span>
                <span>2,500 SKUs</span>
                <span>5,000 SKUs</span>
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center">
              <div className="bg-white/[0.02] p-1 rounded-xl flex gap-1 border border-white/5">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider font-heading cursor-pointer transition-all ${
                    billingCycle === 'monthly' ? 'bg-[#FFC700] text-[#080C14] shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly Subscription
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider font-heading cursor-pointer transition-all ${
                    billingCycle === 'annual' ? 'bg-[#FFC700] text-[#080C14] shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Annual Billing (-20% Off)
                </button>
              </div>
            </div>

            {/* Calculations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-heading font-mono">Traditional Sourcing Agent</span>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white font-heading">
                    ${traditionalAgencyFee.toLocaleString()} <span className="text-xs text-slate-500 font-bold font-body">/ Year Est.</span>
                  </div>
                  <span className="text-[10px] leading-relaxed font-body text-slate-450 block">Based on standard 5% commission markup calculated against average shipment volume values.</span>
                </div>
              </div>

              <div className="space-y-2 bg-white/[0.02] p-6 rounded-2xl border border-white/5 shadow-md">
                <span className="text-[10px] font-bold text-[#FFC700] uppercase tracking-widest block font-heading font-mono">Taxicolor Flat-Fee Tech Model</span>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white font-heading">
                    ${taxicolorFlatFee.toLocaleString()} <span className="text-xs text-slate-500 font-bold font-body">/ Year Est.</span>
                  </div>
                  <span className="text-[10px] leading-relaxed font-body text-slate-400 block">Calculated via flat-rate dashboard subscription + direct ex-works factory data loading.</span>
                </div>
              </div>

            </div>

            {/* Savings Callout */}
            <div className="bg-emerald-950/20 border border-emerald-800/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-emerald-500 rounded-xl text-[#080C14] font-black">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block font-heading">Budget Safely Retained</span>
                  <span className="text-[10px] text-slate-400 font-body">Bypassing trading markups directly strengthens your pricing competitiveness in foreign markets.</span>
                </div>
              </div>
              <span className="text-xl font-black text-emerald-400 font-heading shrink-0">Save ${moneySaved.toLocaleString()} / Year</span>
            </div>

          </div>

        </div>
      </section>

      {/* 8. B2B CTA VALUE CALLOUT */}
      <section className="py-24 bg-[#0B0F17] text-white relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[#FFC700]/[0.01] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-[#FFC700] bg-[#FFC700]/10 rounded-full border border-[#FFC700]/20 uppercase font-mono">
            Direct-to-Source Supply Chains
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
            Stop Overpaying Intermediaries.<br />
            Secure Your Direct Industrial Supply Line.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body max-w-xl mx-auto">
            Acquire a dynamic digital catalog for your SKUs. Monitor manufacturing tolerances, verify international certifications, and trace shipments on-site for a single predictable subscription.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:driver@taxicolor.com" 
              className="px-6 py-3.5 rounded-xl bg-[#FFC700] hover:bg-[#FFE37F] text-[#080C14] font-heading text-xs font-black uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(255,199,0,0.25)] block"
            >
              driver@taxicolor.com
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#080C14] text-slate-500 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 100 100" className="w-5 h-5">
                <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                <polygon points="50,42 50,75 35,53" fill="#FFC700" />
                <polygon points="50,42 50,75 65,53" fill="#D99B00" />
                <polygon points="35,53 50,75 38,78 24,58" fill="#F5B041" />
                <polygon points="65,53 50,75 62,78 76,58" fill="#B77900" />
                <polygon points="50,75 38,78 50,88" fill="#FFC700" />
                <polygon points="50,75 62,78 50,88" fill="#B77900" />
              </svg>
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-white tracking-widest block uppercase font-heading">Taxicolor</span>
              <span className="text-[8px] font-bold text-[#FFC700] block uppercase tracking-wider font-mono">Global Sourcing Partner</span>
            </div>
          </div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-slate-600">
            © 2026 TAXICOLOR. ALL RIGHTS RESERVED. PUDONG WAIGAOQIAO FREE TRADE ZONE, SHANGHAI.
          </p>
        </div>
      </footer>

    </div>
  );
}
