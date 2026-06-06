'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Compass,
  ArrowRight,
  CheckCircle2,
  Anchor,
  Send,
  Database,
  Cpu,
  Eye,
  Globe2,
  Leaf,
  FileCheck2
} from 'lucide-react';

const TRANSLATIONS = {
  en: {
    announcement: "Explore our dedicated Automotive Filtration division at filtration.taxicolor.com",
    enterpriseBadge: "Brand Hub",
    monogramTag: "TAXICOLOR GROUP",
    navPartner: "Trusted Partner",
    navCerts: "Global Certs",
    navWorkflow: "How We Work",
    navContact: "Contact",
    navStory: "Our Origin",
    btnCatalog: "Filtration Catalog",

    // Hero
    heroBadge: "Budorcas taxicolor • Shanghai, China",
    heroSlogan: "Your Trusted Partner on China's Factory Floor!",
    heroHighlight: "",
    heroDesc: "Taxicolor is deeply rooted in China's top industrial belts, integrating premium contract manufacturers to curate high-quality products and provide a true one-stop global supply chain solution. Committed to professionalism and integrity, we honor the entrepreneurial spirit and engineering craftsmanship to be your most trusted manufacturing partner.",
    btnExplore: "Discover Taxicolor",
    statEngineering: "100% Batch Inspected",
    statEngineeringDesc: "Dimensional & Seal QA",
    statCerts: "8 Global Certs",
    statCertsDesc: "ISO 9001 · 13485 · BSCI · CE · GS · UL · SAA · PSE",
    statPort: "Shanghai Waigaoqiao",
    statPortDesc: "FTZ Direct Consolidation",
    statSync: "12H Response",
    statSyncDesc: "Direct Factory Engineer",
    heroImageTag: "TECH-NATIVE SOURCING",
    heroImageCaption: "Engineering precision meets manufacturing scale.",
    
    // How We Work
    transBadge: "HOW WE WORK",
    transTitle: "An Engineering Partner Embedded on the Factory Floor.",
    transDesc: "We integrate deeply with manufacturers—testing materials, monitoring production, and enforcing strict quality discipline to deliver flawless products.",
    howStep1Title: "Sample & Material Benchmarking",
    howStep1Desc: "We don't just select high-quality factories. We purchase and rigorously test their off-the-shelf products, tearing down physical samples to compare raw material grades and build quality. This ensures we lock in the exact facility that matches your technical specs.",
    howStep2Title: "In-Process Production QA",
    howStep2Desc: "Once production starts, we work alongside the factory on the floor. We ensure the assembly line maintains rigorous quality standards, continuously monitoring manufacturing disciplines and tolerances to guarantee the final batch matches your expectations flawlessly.",
    howStep3Title: "One-Stop Consolidated Delivery",
    howStep3Desc: "From final batch inspection to customs documentation and FTZ container consolidation at Shanghai Waigaoqiao — we handle the entire logistics pipeline so you can focus on scaling your market.",
    
    // Address bar simulation
    addressBar: "www.taxicolor.com",
    
    // Brand Story
    storyBadge: "OUR ORIGIN",
    storyTitle: "Taxicolor is not the color of a taxi.",
    storyPara1: "It is the scientific classification of the Takin (Budorcas taxicolor)—a legendary, robust beast that carves its path along the unforgiving, vertical cliffs of the Himalayas at altitudes of 3,000 meters.",
    storyPara2: "Strong, rare, and completely off-the-beaten-path, the Budorcas taxicolor is our spiritual totem. We approach global sourcing the same way the Takin navigates the Himalayas: resiliently scaling manufacturing barriers, auditing engineering specifications on the factory floor, and building robust supply lines directly from workshop to warehouse.",
    storyBullet1: "3,000m Alpine Totem",
    storyBullet2: "Absolute Resilience",
    storyFooterText: "BUDORCAS TAXICOLOR",
    
    // Our Divisions
    divBadge: "OUR SPECIALIZED DIVISIONS",
    divTitle: "Focused Engineering. Categorized Excellence.",
    divDesc: "Instead of being a jack-of-all-trades, we build highly specialized vertical divisions. Each division acts as an independent engineering hub connected to top-tier factories.",
    divActiveTitle: "Taxicolor Filtration",
    divActiveDesc: "Automotive & Industrial Air Purification. Managing 70+ OE cross-references, 100% batch QC, and robotic pleating tolerances.",
    divActiveBtn: "Visit Filtration Division",
    divFutureTitle: "R&D Pipeline",
    divFutureDesc: "Exploring precision auto-parts and energy storage systems.",
    
    // The Taxicolor Advantage
    advBadge: "THE TAXICOLOR ADVANTAGE",
    advTitle: "Beyond Traditional Sourcing.",
    advDesc: "We bring seasoned expertise, deep factory resources, and technical rigor to your supply chain.",
    adv1Title: "Veteran Factory Networks",
    adv1Desc: "We leverage years of deep, trusted relationships with top-tier Chinese factory owners to secure priority production and unbeatable direct pricing.",
    adv2Title: "Absolute Transparency",
    adv2Desc: "Real-time workshop visibility. Bilingual trade dialogs. Experience direct collaboration and frictionless communication with your seasoned on-ground team.",
    adv3Title: "Global Compliance",
    adv3Desc: "Integrated pathways for CE, UL, REACH, and more. We navigate complex export logistics and customs regulations flawlessly based on years of cross-border experience.",

    // Ground Operations
    opsBadge: "YOUR ON-SITE AUDIT LEADER",
    opsTitle: "Seasoned Trade Experts on the Factory Floor.",
    opsPara1: "When your orders are on the line, you need a partner who is honest, reliable, and physically on the ground. We enforce strict quality standards on the factory floor, inspecting every batch to earn your trust.",
    opsPara2: "We leverage deep factory partnerships and years of industry experience to secure fair pricing and consistent quality. Every batch is personally inspected before it leaves the factory floor — if it doesn't match the sample, it doesn't ship.",
    opsPortraitName: "Tunan",
    opsPortraitTag: "China Partner",
    opsPortraitDesc: "Senior Supply Chain Expert & China Operations Lead",
    opsFlipHint: "Click to flip",
    opsWhatsApp: "WhatsApp Direct",
    
    // Inquiry Form
    formBadge: "START A CONVERSATION",
    formTitle: "Speak directly with our business representatives.",
    formSubtitle: "Let us build an exclusive Silk Road straight to China for you.",
    formName: "Your Name",
    formEmail: "Work Email",
    formCompany: "Company",
    formCountry: "Target Market",
    formMessage: "What are your manufacturing needs?",
    formPlaceholder: "e.g. Seeking an OEM partner for cabin air filters...",
    formSubmit: "Send Inquiry",
    formSubmitting: "Sending...",
    formSuccessTitle: "Message Received",
    formSuccessDesc: "I'll review your inquiry and respond within 24 hours. Talk soon — Tunan",
    
    // Footer
    footerSlogan: "Tech-Driven Supply Chain Brand",
    footerCopy: "© 2026 TAXICOLOR. ALL RIGHTS RESERVED.",
    footerDesc: "Taxicolor is your dedicated China manufacturing partner, providing rigorous B2B end-to-end supply chain integration.",
    footerCol1: "Our Hubs",
    footerCol2: "Capabilities",
    footerCol3: "Direct Connect",
    footerAddress: "Pudong Waigaoqiao FTZ, Shanghai",
    footerRole: "China Partner",
  },
  zh: {
    announcement: "请访问我们的专属汽车滤清器事业部：filtration.taxicolor.com",
    enterpriseBadge: "集团母站",
    monogramTag: "TAXICOLOR 集团",
    navPartner: "制造合伙人",
    navCerts: "国际资质",
    navWorkflow: "工作方式",
    navContact: "联系我们",
    navStory: "品牌起源",
    btnCatalog: "滤清器产品线",
    
    // Hero
    heroBadge: "Budorcas taxicolor • 中国 上海",
    heroSlogan: "您值得托付的中国制造合伙人！",
    heroHighlight: "",
    heroDesc: "Taxicolor 深耕中国顶级产业带，整合最优质代工厂，甄选高质量产品，为您提供中国的一站式出海供应链解决方案。Taxicolor 恪守专业与诚信，尊崇企业家精神和工程师工匠态度，是您值得托付的中国制造合伙人。",
    btnExplore: "了解 Taxicolor",
    statEngineering: "100% 批次全检",
    statEngineeringDesc: "每单尺寸与密封抽检",
    statCerts: "8 项全球认证",
    statCertsDesc: "ISO 9001 · 13485 · BSCI · CE · GS · UL · SAA · PSE",
    statPort: "上海外高桥",
    statPortDesc: "外高桥拼箱直装",
    statSync: "12H 响应",
    statSyncDesc: "直连工厂工程师",
    heroImageTag: "科技驱动供应链",
    heroImageCaption: "工程级的严谨，与中国制造的规模在此交汇。",
    
    // How We Work
    transBadge: "工作方式",
    transTitle: "与工厂一线深度协同",
    transDesc: "我们与工厂深度绑定——从比对原材料到死盯生产公差，用最严苛的工程纪律确保最终产品的完美交付。",
    howStep1Title: "基于试用体验的产品甄选",
    howStep1Desc: "我们不仅挑选高质量工厂，更亲自购买和试用各个工厂的在售产品，横向对比不同工厂的产品实物与原材料。通过极其严苛的产品拆解与测试，为您锁定最符合质量与规格要求的顶尖代工线。",
    howStep2Title: "全程持续品质监控",
    howStep2Desc: "工厂开工后，我们即刻与工厂一起介入生产环节。保证生产流水线持续保持高质量标准，全程紧盯工艺纪律与生产公差，确保最终交付的大货与您的预期分毫不差。",
    howStep3Title: "一站式交付发运",
    howStep3Desc: "从出厂前批次全检，到经由上海外高桥自贸区的无缝清关集散，我们全权管理底层供应链物流，让您毫无后顾之忧地专注于本土市场的扩张。",
    
    // Address bar simulation
    addressBar: "www.taxicolor.com",
    
    // Brand Story
    storyBadge: "我们的品牌起源",
    storyTitle: "Taxicolor 不是出租车的颜色。",
    storyPara1: "它是羚牛的拉丁学名（*Budorcas taxicolor*）——一种生活在喜马拉雅山脉 3,000 米海拔悬崖峭壁上的珍稀野兽。",
    storyPara2: "强壮、罕见、不走寻常路，这正是我们的精神图腾。我们像 Taxicolor 一样行动：坚韧地跨越制造壁垒，深入车间审计每道工序，为你搭建直连源头的供应链。",
    storyBullet1: "3000米雪线精神图腾",
    storyBullet2: "极限坚韧与开路精神",
    storyFooterText: "BUDORCAS TAXICOLOR",
    
    // Our Divisions
    divBadge: "专业事业群",
    divTitle: "专注工程，垂直深耕。",
    divDesc: "我们不追求“什么都做”，而是建立高度专业的垂直事业部。每个事业部都是一个独立的工程枢纽，直连顶级代工厂。",
    divActiveTitle: "Taxicolor 滤清器事业部",
    divActiveDesc: "汽车与工业空气净化方案。管理 70+ OE 交叉参考库，100% 批次质检，严格把控机械折褶公差。",
    divActiveBtn: "访问滤清器主页",
    divFutureTitle: "研发管道",
    divFutureDesc: "探索精密汽车零配件与高附加值储能产品线。",
    
    // The Taxicolor Advantage
    advBadge: "核心竞争力",
    advTitle: "超越传统的采购体验。",
    advDesc: "我们将资深的贸易经验、深厚的工厂资源与硬核的工程把控力完美结合。",
    adv1Title: "资深贸易与深厚工厂网络 (Veteran Networks)",
    adv1Desc: "依托多年深耕，我们与中国多条产业带的顶尖工厂老板建立了极度深厚且互信的私人合作网络，为您锁定最优底价与最高优先级的排产。",
    adv2Title: "绝对透明 (Absolute Transparency)",
    adv2Desc: "车间进度实时可见。零翻译损耗的双语贸易对话。体验最高效的直接协同与无缝沟通，我们是您最坚实的在地团队。",
    adv3Title: "全球合规雷达 (Global Compliance)",
    adv3Desc: "多年的跨国清关与合规实战经验。提前锚定 CE, UL, REACH 等国际准入标准，为您排雷避坑，确保海关通行无阻。",

    // Ground Operations
    opsBadge: "你在中国的地面行动队长",
    opsTitle: "扎根产业带的专业与诚信卫士。",
    opsPara1: "当您的订单交付于人时，您需要的是一个真诚可靠的在地团队。我们坚守严苛的品质底线，在车间里卡死质检标准，确保每一个批次都经得起您的信任。",
    opsPara2: "我们深耕中国各大优质产业带，凭借多年的专业积累与核心工厂资源，为您争取最公道的价格与不打折扣的品质。每一批次出厂前，我们亲自在车间核验，确保货如样、样如约。",
    opsPortraitName: "图南",
    opsPortraitTag: "中国区业务合伙人",
    opsPortraitDesc: "资深供应链专家 · 中国区运营负责人",
    opsFlipHint: "点击翻转二维码",
    opsWhatsApp: "WhatsApp 即时沟通",
    
    // Inquiry Form
    formBadge: "开启对话",
    formTitle: "直接与我们的业务代表对话。",
    formSubtitle: "让我们为您建立一条直通中国的专属丝绸之路。",
    formName: "您的名字",
    formEmail: "工作邮箱",
    formCompany: "公司名称",
    formCountry: "目标市场",
    formMessage: "您有哪些制造与采购需求？",
    formPlaceholder: "例如：正在寻找高品质空调滤芯的代工伙伴...",
    formSubmit: "发送询价",
    formSubmitting: "发送中...",
    formSuccessTitle: "已收到您的消息",
    formSuccessDesc: "我会在 24 小时内查看并回复。回头聊 — 图南",
    
    // Footer
    footerSlogan: "科技型出海供应链品牌",
    footerCopy: "© 2026 TAXICOLOR. 版权所有.",
    footerDesc: "Taxicolor 是您在中国的制造合伙人，为您提供最严苛、最硬核的端到端出海供应链整合服务。",
    footerCol1: "产品矩阵",
    footerCol2: "核心能力",
    footerCol3: "高层直通",
    footerAddress: "中国上海·浦东新区外高桥自贸区",
    footerRole: "中国区业务合伙人",
  }
};

export default function V2BrandHub() {
  const [mounted, setMounted] = useState(false);
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [isQRFlipped, setIsQRFlipped] = useState(false);

  // Inquiry form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    setFormSubmitting(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName.trim(),
          email: formEmail.trim(),
          message: `Company: ${formCompany || '—'}\nCountry: ${formCountry || '—'}\n\n${formMessage.trim()}`,
          page: window.location.href,
          website: '',
        }),
      });
      if (res.ok) {
        setFormSubmitted(true);
        setFormName(''); setFormEmail(''); setFormCompany(''); setFormCountry(''); setFormMessage('');
      }
    } catch {}
    setFormSubmitting(false);
  };

  // Custom theme and language states
  const [theme, setTheme] = useState<'dark' | 'light' | 'china-direct'>('dark');
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update root element attribute for CSS theme variables
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#FFC700] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-background text-foreground font-sans min-h-screen antialiased flex flex-col selection:bg-accent selection:text-background">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0B0F17] text-slate-400 text-center text-xs py-3 px-6 border-b border-white/5 tracking-wider font-medium flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-accent text-button-text uppercase tracking-widest animate-pulse font-mono">{t.enterpriseBadge}</span>
          <span>{t.announcement.split(' filtration.taxicolor.com')[0]} <a href="https://filtration.taxicolor.com" target="_blank" rel="noopener noreferrer" className="text-accent underline font-bold hover:text-white transition-colors">filtration.taxicolor.com</a></span>
        </div>

        {/* Global Controls Panel */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
          <div className="flex items-center gap-1 text-[9.5px] border-r border-white/10 pr-2">
            <button onClick={() => setLang('en')} className={`px-1.5 py-0.5 rounded font-black transition-colors ${lang === 'en' ? 'text-accent font-extrabold' : 'text-slate-500 hover:text-slate-350'}`}>EN</button>
            <span className="text-white/10 text-[9px]">|</span>
            <button onClick={() => setLang('zh')} className={`px-1.5 py-0.5 rounded font-black transition-colors ${lang === 'zh' ? 'text-accent font-extrabold' : 'text-slate-500 hover:text-slate-350'}`}>中文</button>
          </div>
          <div className="flex items-center gap-1.5 text-[9px]">
            <button onClick={() => setTheme('dark')} className={`w-3.5 h-3.5 rounded-full bg-[#080C14] border border-white/20 transition-all ${theme === 'dark' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(255,199,0,0.6)]' : 'opacity-65 hover:opacity-100'}`} />
            <button onClick={() => setTheme('light')} className={`w-3.5 h-3.5 rounded-full bg-[#FAFAFA] border border-black/20 transition-all ${theme === 'light' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'opacity-65 hover:opacity-100'}`} />
            <button onClick={() => setTheme('china-direct')} className={`w-3.5 h-3.5 rounded-full bg-[#E60012] border border-white/20 transition-all ${theme === 'china-direct' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(222,41,16,0.7)]' : 'opacity-65 hover:opacity-100'}`} />
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 bg-nav-bg backdrop-blur-xl border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <Image src="/img/taxicolor_logo_flat.webp" alt="Taxicolor" width={36} height={36} className="w-9 h-9 drop-shadow-[0_0_8px_var(--accent-glow)] transform hover:scale-105 transition-transform duration-300 object-contain" />
            <div>
              <div className="flex items-center leading-none">
                <span className="font-heading text-base font-black tracking-tight text-accent">taxi</span>
                <span className="font-heading text-base font-black tracking-tight text-foreground">color</span>
              </div>
              <span className="text-[8.5px] text-accent/80 font-black tracking-widest uppercase block mt-0.5 font-mono">{t.monogramTag}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[10.5px] font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400">
            <a href="#hero" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navPartner}</a>
            <a href="#certifications" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navCerts}</a>
            <a href="#workflow" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navWorkflow}</a>
            <a href="#contact" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navContact}</a>
            <a href="#totem" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navStory}</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://filtration.taxicolor.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg border border-border font-heading text-[10px] font-bold uppercase tracking-wider transition-all text-foreground bg-white/5 hover:bg-accent/5 flex items-center gap-1.5 shadow-sm">
              <Database className="w-3.5 h-3.5 text-accent" />
              <span>{t.btnCatalog}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. PREMIUM MINIMAL HERO SECTION */}
      <section id="hero" className="relative lg:min-h-[85vh] flex items-center py-12 lg:py-20 overflow-hidden cyber-grid">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center lg:items-stretch relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-8 text-left py-2 lg:py-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/[0.02] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent font-mono">{t.heroBadge}</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFC700] leading-[1.08] tracking-tight">
              {t.heroSlogan}
              {t.heroHighlight && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-accent via-accent/80 to-foreground bg-clip-text text-transparent">
                    {t.heroHighlight}
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body max-w-2xl font-medium">
              {t.heroDesc}
            </p>

            <div className="pt-2 lg:pt-8 w-full">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-accent" />, title: t.statCerts, desc: t.statCertsDesc },
                  { icon: <Anchor className="w-5 h-5 text-accent" />, title: t.statPort, desc: t.statPortDesc },
                  { icon: <Cpu className="w-5 h-5 text-accent" />, title: t.statEngineering, desc: t.statEngineeringDesc },
                  { icon: <Send className="w-5 h-5 text-accent" />, title: t.statSync, desc: t.statSyncDesc },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-colors group">
                    <div className="p-2 bg-black/40 rounded-lg border border-white/5 group-hover:bg-accent/10 transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-foreground uppercase tracking-wider block font-heading mb-0.5">{item.title}</span>
                      <span className="text-[9px] text-slate-400 block font-mono leading-tight">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-5 relative group flex flex-col w-full h-full lg:min-h-[400px]">
            <div className="relative w-full h-full">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-45 transition duration-300" />
              <div className="relative bg-[#0F131C] border border-border rounded-3xl overflow-hidden shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[450px]">
                 <Image src="/img/digital_prototyping.png" alt="Digital Engineering" fill className="object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-[10px] font-mono text-accent mb-2 tracking-widest uppercase">{t.heroImageTag}</p>
                    <p className="text-sm font-bold leading-relaxed">{t.heroImageCaption}</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              {lang === 'en' ? 'Globally Certified Quality' : '完备的国际资质体系'}
            </h2>
            <p className="text-slate-400 text-sm font-body max-w-lg mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Our partner network is backed by a comprehensive array of international certifications. Featured below are 8 key global standards we maintain. No matter where your customers are, the paperwork is ready.'
                : '我们的制造网络拥有完备的国际资质体系，以下展示最核心的 8 项全球通行标准。无论您的客户身在何处，所需资质随时备查。'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { cert: 'ISO 9001', img: '/img/certs/iso-9001.png', market: 'Global', descEn: 'Quality management system — universal baseline for all export markets', descZh: '质量管理体系——所有出口市场通用基础' },
              { cert: 'ISO 13485', img: '/img/certs/iso-13485.png', market: 'Medical', descEn: 'Medical device quality — enables medical-grade filtration products', descZh: '医疗器械质量管理——可生产医用级过滤产品' },
              { cert: 'BSCI', img: '/img/certs/bsci.png', market: 'EU', descEn: 'Social responsibility audit — required by European retail chains', descZh: '社会责任验厂——欧洲零售连锁采购准入要求' },
              { cert: 'CE', img: '/img/certs/ce.png', market: 'EU / EEA', descEn: 'European conformity — mandatory for all products entering EU markets', descZh: '欧洲合规——所有进入欧盟市场的产品强制要求' },
              { cert: 'GS', img: '/img/certs/gs.png', market: 'Germany', descEn: 'German safety certification — trusted mark for DACH region buyers', descZh: '德国安全认证——德奥瑞市场买家最信任的安全标志' },
              { cert: 'UL', img: '/img/certs/ul.png', market: 'North America', descEn: 'US safety standard — recognized by American retailers and insurers', descZh: '美国安全标准——北美零售商和保险公司认可' },
              { cert: 'SAA', img: '/img/certs/saa.png', market: 'Australia / NZ', descEn: 'Australian safety approval — required for electrical appliances in ANZ', descZh: '澳洲安全认证——澳新市场电器产品准入要求' },
              { cert: 'PSE', img: '/img/certs/pse.png', market: 'Japan', descEn: 'Japanese electrical safety — mandatory for products sold in Japan', descZh: '日本电气安全——进入日本市场的强制认证' },
            ].map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-2xl p-5 text-left space-y-3 hover:border-accent/30 transition-all shadow-sm group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 ring-1 ring-border">
                    <img src={item.img} alt={item.cert} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <span className="text-[9px] font-extrabold text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded">{item.market}</span>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-foreground">{item.cert}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{lang === 'en' ? item.descEn : item.descZh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="workflow" className="py-24 bg-gradient-to-b from-background to-[#0B0F17] border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase font-mono bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              {t.transBadge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
              {t.transTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-body">
              {t.transDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Find */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">01</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep1Title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body relative z-10">{t.howStep1Desc}</p>
            </div>

            {/* Step 2: Audit */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">02</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep2Title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body relative z-10">{t.howStep2Desc}</p>
            </div>

            {/* Step 3: Ship */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">03</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep3Title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body relative z-10">{t.howStep3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT / FORM */}
      <section id="contact" className="py-24 bg-[#080C14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25 font-mono">
              {t.opsBadge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">{t.opsTitle}</h2>
            <p className="text-base text-slate-300">{t.opsPara1}</p>
            <p className="text-sm text-slate-400">{t.opsPara2}</p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 sm:p-6 rounded-3xl border border-border bg-white/[0.02] mt-8 w-fit relative group/card hover:bg-white/[0.04] transition-colors">
                <div 
                  className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 cursor-pointer"
                  onClick={() => setIsQRFlipped(!isQRFlipped)}
                  style={{ perspective: 1000 }}
                >
                  <motion.div 
                    className="w-full h-full relative"
                    initial={false}
                    animate={{ rotateY: isQRFlipped ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front: Avatar */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                      <div className="w-full h-full rounded-full border-2 border-accent/20 overflow-hidden shadow-xl hover:border-accent/40 transition-colors bg-[#080C14]">
                        <Image src="/img/tunan_2.png" alt="Tunan Profile" fill className="object-cover" />
                      </div>
                    </div>
                    {/* Back: QR Code */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      <div className="w-full h-full rounded-2xl border-2 border-[#25D366]/40 overflow-hidden shadow-[0_0_20px_rgba(37,211,102,0.15)] bg-white p-2 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image src="/img/whatsapp.png" alt="WhatsApp QR" fill className="object-contain rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Click Hint Always Visible */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 text-[9px] text-accent px-2.5 py-1 rounded-full whitespace-nowrap z-10 font-mono tracking-widest uppercase shadow-lg pointer-events-none animate-bounce">
                    {t.opsFlipHint}
                  </div>
                </div>

               <div>
                  <div className="flex items-center gap-2">
                     <span className="font-bold text-lg text-white">{t.opsPortraitName}</span>
                     <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">{t.opsPortraitTag}</span>
                  </div>
                  <span className="text-sm text-slate-400 block mt-1">{t.opsPortraitDesc}</span>

                  <a 
                    href="https://wa.me/8617717404652" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#25D366] hover:text-[#25D366]/80 transition-colors bg-[#25D366]/10 px-3.5 py-2 rounded-xl border border-[#25D366]/20"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    <span>{t.opsWhatsApp}</span>
                  </a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl relative">
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-black text-foreground">{t.formTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.formSubtitle}</p>
            </div>
            
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading text-xl font-bold text-foreground">{t.formSuccessTitle}</h4>
                <p className="text-sm text-slate-400">{t.formSuccessDesc}</p>
                <button onClick={() => setFormSubmitted(false)} className="mt-6 text-xs text-accent hover:text-white underline underline-offset-4">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.formName} *</label>
                    <input type="text" required value={formName} onChange={e => setFormName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.formEmail} *</label>
                    <input type="email" required value={formEmail} onChange={e => setFormEmail(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder-slate-600" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.formCompany}</label>
                    <input type="text" value={formCompany} onChange={e => setFormCompany(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder-slate-600" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.formCountry}</label>
                    <input type="text" value={formCountry} onChange={e => setFormCountry(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder-slate-600" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.formMessage} <span className="text-accent">*</span></label>
                  <textarea required rows={4} value={formMessage} onChange={e => setFormMessage(e.target.value)} placeholder={t.formPlaceholder} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder-slate-600 resize-none" />
                </div>
                <button type="submit" disabled={formSubmitting} className="w-full py-4 mt-2 rounded-xl bg-accent hover:bg-accent/85 font-heading text-xs font-bold uppercase tracking-wider text-button-text transition-all flex justify-center items-center gap-2 disabled:opacity-70">
                  {formSubmitting ? (
                    <span className="w-4 h-4 border-2 border-button-text border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><span>{t.formSubmit}</span> <Send className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. THE BRAND STORY: THE TOTEM OF BUDORCAS */}
      <section id="totem" className="py-28 bg-[#0B0F17] border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-8 bg-accent" />
                  <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase font-mono">{t.storyBadge}</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
                  {t.storyTitle}
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                  {t.storyPara1}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                  {t.storyPara2}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <div className="absolute inset-0 border border-accent/30 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute inset-4 border border-border rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-full backdrop-blur-sm flex items-center justify-center p-8">
                     <Image src="/img/taxicolor_logo_flat.webp" alt="Taxicolor Totem" width={200} height={200} className="w-full h-full object-contain drop-shadow-[0_0_15px_var(--accent-glow-strong)] opacity-90" />
                  </div>
                  <div className="absolute bottom-0 w-full text-center pb-2">
                    <span className="bg-background/80 px-4 py-1 rounded-full text-[9px] font-mono text-accent tracking-widest uppercase border border-white/5 backdrop-blur-md">
                      {t.storyFooterText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border pt-16 pb-8 text-slate-500 dark:text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/img/taxicolor_logo_flat.webp" alt="Taxicolor Logo" width={32} height={32} className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(255,199,0,0.15)]" />
              <div className="flex flex-col leading-none">
                <div className="flex items-center">
                  <span className="font-heading text-sm font-black text-accent tracking-tight">taxi</span>
                  <span className="font-heading text-sm font-black text-foreground tracking-tight">color</span>
                </div>
                <span className="text-[6.5px] text-slate-500 font-extrabold tracking-[0.2em] uppercase mt-0.5 font-mono">GROUP</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              {t.footerDesc}
            </p>
            <div className="flex gap-2">
              <span className="text-[9px] font-bold px-2 py-1 bg-white/[0.03] border border-white/10 rounded uppercase font-mono text-slate-300">ISO 9001</span>
              <span className="text-[9px] font-bold px-2 py-1 bg-white/[0.03] border border-white/10 rounded uppercase font-mono text-slate-300">BSCI</span>
            </div>
          </div>

          {/* Hubs */}
          <div className="space-y-4">
            <h4 className="font-heading text-[10px] font-extrabold text-slate-800 dark:text-slate-300 uppercase tracking-widest">{t.footerCol1}</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="https://filtration.taxicolor.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5"><Database className="w-3 h-3" /> Filtration Division</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-4">
            <h4 className="font-heading text-[10px] font-extrabold text-slate-800 dark:text-slate-300 uppercase tracking-widest">{t.footerCol2}</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#hero" className="hover:text-accent transition-colors">{t.navPartner}</a></li>
              <li><a href="#certifications" className="hover:text-accent transition-colors">{t.navCerts}</a></li>
              <li><a href="#workflow" className="hover:text-accent transition-colors">{t.navWorkflow}</a></li>
              <li><a href="#totem" className="hover:text-accent transition-colors">{t.navStory}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-xs">
            <h4 className="font-heading text-[10px] font-extrabold text-slate-800 dark:text-slate-300 uppercase tracking-widest">{t.footerCol3}</h4>
            <div className="space-y-3 text-slate-500">
              <p className="flex items-start gap-2">
                <span className="font-semibold text-slate-400 shrink-0">HQ:</span>
                <span>{t.footerAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-slate-400 shrink-0">Email:</span>
                <a href="mailto:tunan@taxicolor.com" className="text-accent hover:underline">tunan@taxicolor.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-slate-400 shrink-0">WhatsApp:</span>
                <a href="https://wa.me/8617717404652" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">+86 177-1740-4652</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{t.footerCopy}</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">{t.footerSlogan}</p>
        </div>
      </footer>

    </div>
  );
}
