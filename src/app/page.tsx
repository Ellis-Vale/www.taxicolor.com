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
  AlertCircle,
  Send
} from 'lucide-react';

const TRANSLATIONS = {
  en: {
    announcement: "70+ OE Cross-Reference Filter Catalog deployed at filtration.taxicolor.com for direct RFQ routing.",
    enterpriseBadge: "Enterprise Live",
    monogramTag: "BUDORCAS B2B",
    navEngines: "Capabilities",
    navTotem: "The Totem",
    navTransparency: "How We Work",
    navOps: "Ground Ops",
    navCalculator: "Inquire",
    btnCatalog: "Browse Catalog",

    // Hero
    heroBadge: "Budorcas taxicolor • Shanghai",
    heroSlogan: "Smart Sourcing from China's Factory Floor.",
    heroHighlight: "Engineer-Led. Factory-Verified.",
    heroDesc: "Custom code scans supplier databases to isolate verified manufacturers. On-site technical audits of production tolerances. Customs streamlined through Shanghai Waigaoqiao FTZ. A tech-native procurement partner on the ground in China.",
    btnExplore: "How We Work",
    btnCatalogHero: "Filter Catalog",
    statMapped: "OE Cross-Refs",
    statPort: "Shanghai Port",
    statMarkup: "Factory-Verified",
    statSync: "Response",
    
    // Address bar simulation
    addressBar: "www.taxicolor.com/showroom",
    
    // Hero Showcase
    heroShowcase: [
      {
        title: 'Digital Catalog & OEM Cross-Reference',
        badge: 'B2B SHOWROOM',
        desc: 'Blazing-fast automotive parts database with multi-field cross-referencing, deployed globally at Edge CDN.'
      },
      {
        title: 'ConsumerLens Demand Analytics',
        badge: 'TRADE RADAR',
        desc: 'Real-time global customs flow heatmaps and buyer sentiment intelligence to capture emergent product demands.'
      },
      {
        title: 'Ground Workshop Tolerances',
        badge: 'FACTORY INSPECTION',
        desc: 'On-site technical auditing, blue-print calibration, and robotic PLC testing at localized automotive clusters.'
      }
    ],
    step: "Step",
    
    // Brand Story
    storyBadge: "BEHIND THE NAME",
    storyTitle: "Taxicolor is not the color of a taxi.",
    storyPara1: "It is the scientific classification of the Takin (Budorcas taxicolor)—a legendary, robust beast that carves its path along the unforgiving, vertical cliffs of the Himalayas at altitudes of 3,000 meters.",
    storyPara2: "Strong, rare, and completely off-the-beaten-path, the Budorcas taxicolor is our spiritual totem. We approach global sourcing the same way the Takin navigates the Himalayas: resiliently scaling manufacturing barriers, auditing engineering specifications on the factory floor, and building robust supply lines directly from workshop to warehouse.",
    storyBullet1: "3,000m Alpine Totem",
    storyBullet2: "Absolute Resilience",
    storyFooterText: "BUDORCAS TAXICOLOR",
    
    // How We Work (replaces old transparency comparison)
    transBadge: "HOW WE WORK",
    transTitle: "A Sourcing Partner Who Actually Visits the Factory Floor.",
    transDesc: "Most sourcing happens over email. Ours happens in person. We combine boots-on-the-ground factory knowledge with custom software tools to find, verify, and deliver quality products from China's manufacturing clusters.",

    howStep1Title: "Find the Right Factory",
    howStep1Desc: "Custom code scans supplier registries to identify verified manufacturers — not trading companies posing as factories. We match your specs to the right production line.",
    howStep2Title: "Audit Before You Commit",
    howStep2Desc: "We walk the factory floor. We check mold quality, raw material grades, and assembly line tolerances. You get photos, measurements, and honest feedback before a single dollar leaves your account.",
    howStep3Title: "Ship With Confidence",
    howStep3Desc: "From production monitoring to pre-shipment inspection to customs documentation through Shanghai Waigaoqiao FTZ — we handle the logistics so you focus on selling.",
    
    // Engines Showcase
    engineBadge: "TAXICOLOR TRADE ENGINES",
    engineTitle: "Tools We Use to Keep Quality Consistent.",
    engineDesc: "Custom-built software that automates the tedious parts of global sourcing — supplier verification, document generation, compliance tracking — so we can focus on what matters: the factory floor.",
    engineSpec: "Engine Specifications",    
    // 6 Engines
    engines: [
      {
        name: 'Direct-to-Source (D2S) Factory Engine',
        badge: 'DISCOVERY INGEST',
        desc: 'Scans regional corporate databases and ex-factory registrations using semantic trade algorithms to isolate verified tier-1 manufacturers — skipping the middle layers.',        features: ['Tier-1 Manufacturer Verification rating', 'Real-time ex-works price baseline', 'Bilingual instant-translate dialogs']
      },
      {
        name: 'QA & Tolerance Prediction Engine',
        badge: 'RISK CALIBRATION',
        desc: 'Cross-checks manufacturing quality by analyzing high-resolution parts photos, pleat structures, and factory certificates against official laboratory standards and historic component failure datasets.',        features: ['Certificate authenticity verification', 'Materials & pleat tolerance heatmap analysis', 'Suggested on-site technical QA guidelines']
      },
      {
        name: 'Autonomous TradeDoc & Auditing Engine',
        badge: 'CUSTOMS AUTOMATION',
        desc: 'Generates export-ready, fully compliant shipping documentation (PI, PL, CO drafts) while auditing HS Codes and customs value statements to eliminate transit delays.',        features: ['Dynamic PI-PL-Customs valuation reconciliation', 'Automated EU/US custom template rendering', 'Direct integration with freight carrier APIs']
      },
      {
        name: 'Consolidated Supply Chain Control Center',
        badge: 'LOGISTICS CONTROL',
        desc: 'Consolidates 5-15 separate component factories into a single real-time dashboard. Uses predictive logistics models to forecast shipping bottlenecks and tracking delays.',        features: ['Multi-supplier assembly line pacing', 'Port-bottleneck & weather risk calculation', 'Autonomous local safety-stock alerts']
      },
      {
        name: 'Global Regulatory & Compliance Watchdog',
        badge: 'COMPLIANCE PATHWAYS',
        desc: 'Maps custom regulatory pathways based on destination market standards, sending automatic notifications on changes (REACH directives, EU Battery Passports, etc.).',
        features: ['Mandatory certificate compliance pathways', 'ECHA REACH / RoHS dynamic monitoring', 'Encrypted global compliance repository']
      },
      {
        name: 'Technical Cost-Modeling Copilot',
        badge: 'PROCUREMENT INTELLIGENCE',
        desc: 'Applies deep indexing of raw material index charts and localized manufacturing margins to establish target ex-works prices for high-precision business negotiations.',        features: ['Ex-factory raw material price baseline tracking', 'Contract payment structure risk scoring', 'Technical blueprint cost estimation models']
      }
    ],
    
    // Ground Operations
    opsBadge: "YOUR ON-SITE AUDIT LEADER",
    opsTitle: "A Systems Architect on the Factory Floor.",
    opsPara1: "Most sourcing agents operate from a desk. We operate from the factory floor. The difference matters when a production tolerance of 0.1mm determines whether your shipment passes customs inspection.",
    opsPara2: "Tunan, a veteran big-tech system architect, personally audits parts manufacturers. We analyze mold structures, inspect raw steel grades, and calibrate robotic assembly lines to guarantee every component batch adheres rigorously to digital blueprint standards.",
    opsTitle1: "Bilingual Engineering Dialogs",
    opsDesc1: "Seamless, fluent technical negotiation directly with foreign managers. Zero translations friction.",
    opsTitle2: "Waigaoqiao FTZ Consolidation",
    opsDesc2: "Consolidate multiple component batches at Waigaoqiao Free Trade Zone to optimize shipping density and duties.",
    opsPortraitName: "Tunan",
    opsPortraitTag: "ON-SITE PARTNER",
    opsPortraitDesc: "Former Big-Tech Full-Stack Architect",
    
    // Calculator
    calcBadge: "COST COMPARISON CALCULATOR",
    calcTitle: "Compare Sourcing Structures Instantly.",
    calcDesc: "Use the slider to set your catalog SKU volume. Estimate your total annual savings under Taxicolor's transparent subscription model against standard commission agents.",
    calcSkuLabel: "Catalog SKU Count",
    calcSkuCount: "SKUs",
    calcMonthlyToggle: "Monthly Subscription",
    calcAnnualToggle: "Annual Billing (-20% Off)",
    calcTradAgent: "Traditional Sourcing Agent",
    calcTradDesc: "Based on standard 5% commission markup calculated against average shipment volume values.",
    calcFlatFee: "Taxicolor Sourcing",
    calcFlatDesc: "Zero markup. Direct access to raw factory ex-works invoice + flat service retainer.",
    calcYearEst: "/ Year Est.",
    calcRetained: "Budget Safely Retained",
    calcRetainedDesc: "Bypassing trading markups directly strengthens your pricing competitiveness in foreign markets.",
    calcSaveText: "Save",
    
    // Inquiry Form
    formBadge: "START A CONVERSATION",
    formTitle: "Tell us about your sourcing needs.",
    formSubtitle: "No commitment. Just a direct line to an engineer on the ground in China.",
    formName: "Your Name",
    formEmail: "Work Email",
    formCompany: "Company",
    formCountry: "Target Market",
    formMessage: "What are you looking to source?",
    formPlaceholder: "e.g. 500 pcs cabin air filters for VW Golf Mk8, ECE certified, private label packaging...",
    formSubmit: "Send Inquiry",
    formSubmitting: "Sending...",
    formSuccessTitle: "Message Received",
    formSuccessDesc: "I'll review your inquiry and respond within 24 hours. Talk soon — Tunan",

    // CTA Callout
    ctaBadge: "Direct Factory Sourcing",
    ctaTitle: "Ready to Find Your Next Factory Partner. Let's Talk.",
    ctaDesc: "Tell us what you need. We'll find the right factory, audit the production line, and manage logistics through Shanghai Waigaoqiao FTZ. No guesswork — just a partner on the ground.",
    
    // Footer
    footerSlogan: "Global Sourcing Partner",
    footerCopy: "© 2026 TAXICOLOR. ALL RIGHTS RESERVED. PUDONG WAIGAOQIAO FREE TRADE ZONE, SHANGHAI."
  },
  zh: {
    announcement: "已在 filtration.taxicolor.com 部署 70+ 汽车滤清器 OE 交叉规格库，支持直连工厂询价。",
    enterpriseBadge: "企业级上线",
    monogramTag: "Taxicolor B2B Trade",
    navEngines: "交易引擎",
    navTotem: "品牌图腾",
    navTransparency: "工作方式",
    navOps: "地面运作",
    navCalculator: "询价",
    btnCatalog: "浏览规格库",
    
    // Hero
    heroBadge: "Budorcas taxicolor • 上海",
    heroSlogan: "来自中国工厂一线的智能采购。",
    heroHighlight: "工程师带队。工厂实地验证。",
    heroDesc: "自研代码扫描企业注册底册，直筛一级工厂。亲赴车间实地审计机械公差。上海外高桥自贸区一站式清关。一位懂技术的中国本土采购伙伴。",
    btnExplore: "我们的工作方式",
    btnCatalogHero: "滤清器规格库",
    statMapped: "跟踪 OE 型号",
    statPort: "上海外高桥港",
    statMarkup: "工厂实地验证",
    statSync: "小时响应",
    
    // Address bar simulation
    addressBar: "www.taxicolor.com/showroom",
    
    // Hero Showcase
    heroShowcase: [
      {
        title: '数字化规格库 & OEM 交叉查询',
        badge: 'B2B 展示厅',
        desc: '超高速汽车滤清器交叉检索规格库，部署在全球边缘 CDN 网络，支持多维度零件匹配。'
      },
      {
        title: 'ConsumerLens 市场需求雷达',
        badge: '贸易雷达',
        desc: '实时追踪全球海关进出口流向热力图和海外买家情感智能，捕捉蓝海市场新兴爆品。'
      },
      {
        title: '制造车间实地偏差校准',
        badge: '工厂实地审计',
        desc: '深入汽车制造产业带，开展实地技术审计、工程图纸比对和流水线 PLC 自动化调试。'
      }
    ],
    step: "步骤",
    
    // Brand Story
    storyBadge: "我们的品牌起源",
    storyTitle: "Taxicolor 不是出租车的颜色。",
    storyPara1: "它是羚牛的拉丁学名（*Budorcas taxicolor*）——一种生活在喜马拉雅山脉 3,000 米海拔悬崖峭壁上的珍稀野兽。",
    storyPara2: "强壮、罕见、不走寻常路，这正是我们的精神图腾。我们像 Taxicolor 一样行动：坚韧地跨越制造壁垒，深入车间审计每道工序，为你搭建直连源头的供应链。",
    storyBullet1: "3000米雪线精神图腾",
    storyBullet2: "极限坚韧与开路精神",
    storyFooterText: "BUDORCAS TAXICOLOR",
    
    // Transparency
    transBadge: "工作方式",
    transTitle: "一个真正走进车间的采购伙伴。",
    transDesc: "大多数采购靠邮件往来，我们的工作在工厂车间里完成。我们将一线工厂经验与自研软件工具结合，在中国制造业集群中为你找到、验证、交付优质产品。",
    
    // Engines Showcase
    engineBadge: "TAXICOLOR 数字化交易引擎",
    engineTitle: "自研工具，保证品质稳定。",
    engineDesc: '我们自研的软件工具自动处理全球采购中繁琐的环节——供应商验证、文件生成、合规追踪——让我们能把精力放在真正重要的事情上：工厂车间现场。',
    engineSpec: "引擎技术规格",    
    // 6 Engines
    engines: [
      {
        name: '直连工厂 D2S 发现引擎',
        badge: '源头探查',
        desc: '扫描各省市企业注册底册、海关备案和制造数据库，跨越多层中间环节，筛选出真正具备一级出厂资质的实体工厂。',
        cost: '月度 $99 - $249',        features: ['源头厂资质验证评估','实地出厂底价横向比对','跨国即时对话自动翻译']
      },
      {
        name: '工艺公差 & 质检预测引擎',
        badge: '风险量化',
        desc: '通过上传高分辨率零件细节照片、折褶结构数据和实验室报告，利用历史工艺缺陷数据集和物理公差分析，对潜在的批次材料问题提供提前预测和现场干预建议。',        features: ['权威检测证书真伪校验','材料及折褶公差热力图分析','车间实地量化质检卡生成']
      },
      {
        name: '自主外贸文档 & 报关审计引擎',
        badge: '报关自动化',
        desc: '全自动生成符合国际货运及海关标准的进出口单据草稿（PI, PL, 产地证等），同时根据目的港标准审查 HS Code 和申报价值，极大化减少清关扣留风险。',
        cost: '月度 $49 - $199',        features: ['PI-PL与海关申报价值比对','自动适配欧盟/美国合规模板','直连主流船务物流系统 APIs']
      },
      {
        name: '合并供应链实时调度中心',
        badge: '物流追踪',
        desc: '将你在 5-15 家独立零配件工厂的货期、排产进度和散装货运信息合并在同一个大屏仪表盘上。利用智能物流模型预测港口拥堵，确保多批次能同时装柜。',
        cost: '月度 $199 - $499',        features: ['多工序上下游配套排产分析','港口气候及拥堵时效预警','安全库存水位警戒智能推送']
      },
      {
        name: '全球准入及合规雷达',
        badge: '标准与法规',
        desc: '根据你要进入的销售国家，自动映射该产品的技术准入路径，对最新的电池护照法案、REACH毒物指令更新进行实时监测，避免发生越线召回。',
        cost: '免费基础版',        features: ['目的港强制认证路径导航','ECHA 限制准入目录动态监控','机密合规证书安全托管仓']
      },
      {
        name: '工艺拆解与成本测算副驾驶',
        badge: '精算评估',
        desc: '深度解析中国源头材料指数走势、电费成本和压铸件标准毛利，帮助你在和源头厂谈判前，生成客观精确的核价分析单，锁定最有力的谈判目标。',
        cost: '月度 $99',        features: ['上游原材料指数动态跟踪表','合同账期结构安全度评分','技术工程图纸智能核算评估']
      }
    ],
    
    // Ground Operations
    opsBadge: "你在中国的地面技术队长",
    opsTitle: "写过大厂架构的代码，也爬得下压铸车间的模具。",
    opsPara1: "绝大部分中介代理都是单纯的业务员，只会计算加价比例，对机械工程和材质规格一窍不通。我们提供真正的技术落地力。",
    opsPara2: "图南，曾任一线科技大厂的核心系统设计专家，亲自带领车间审核团队。我们现场审核模具抗压强度，检验原材料防锈等级，调试全自动螺纹 PLC 设备，用理性的工科规范把控每件产品，确保最终出货和数模图纸分毫不差。",
    opsTitle1: "双语技术直连对话",
    opsDesc1: "直接由具备开发和外贸背景的中高管和客户无缝对接技术图纸，拒绝沟通损耗。",
    opsTitle2: "外高桥保税区拼箱装柜",
    opsDesc2: "在浦东自贸区海运拼箱监管仓，帮助你的多个工厂批次实现合并装箱报关，大幅降低货代空运及散货堆存费。",
    opsPortraitName: "图南",
    opsPortraitTag: "中国区技术合伙人",
    opsPortraitDesc: "前大厂全栈系统设计架构师",
    
    // Calculator
    calcBadge: "采购预算对比计算器",
    calcTitle: "采购成本结构，一算便知。",
    calcDesc: "滑动滑块设置你的商品 SKU 规格数。估算在 Taxicolor 平价代采购订阅下，你每年能比传统代理节省多少采购预算。",
    calcSkuLabel: "商品 SKU 规格总数",
    calcSkuCount: "SKUs",
    calcMonthlyToggle: "月度订阅",
    calcAnnualToggle: "年度付款 (-20% 优惠)",
    calcTradAgent: "传统代理中介模式",
    calcTradDesc: "基于 5% 行业平均货值返点/隐性加价计算得出的年度预估加价成本。",
    calcFlatFee: "图南平价技术合伙人服务",
    calcFlatDesc: "零点数加价。100%直接付给工厂原始底价账单 + 纯粹固定月度服务费。",
    calcYearEst: "/ 年 预估服务费",
    calcRetained: "采购预算净留存",
    calcRetainedDesc: "完全过滤掉贸易商的加价成本，你的出海产品在海外市场将拥有无懈可击的价格竞争力。",
    calcSaveText: "每年省下",
    
    // Inquiry Form
    formBadge: "开启对话",
    formTitle: "告诉我们您的采购需求。",
    formSubtitle: "无需承诺。只是一条直通中国工厂现场工程师的直线。",
    formName: "您的名字",
    formEmail: "工作邮箱",
    formCompany: "公司名称",
    formCountry: "目标市场",
    formMessage: "您想采购什么产品？",
    formPlaceholder: "例如：500 个大众高尔夫 Mk8 空调滤芯，需 ECE 认证，定制彩盒包装...",
    formSubmit: "发送询价",
    formSubmitting: "发送中...",
    formSuccessTitle: "已收到您的消息",
    formSuccessDesc: "我会在 24 小时内查看并回复。回头聊 — 图南",

    // CTA Callout
    ctaBadge: "直连源头厂 掌控供应链",
    ctaTitle: "准备找到你的下一个工厂伙伴。我们谈谈。",
    ctaDesc: "告诉我们你的需求。帮你找到对口的工厂，审计生产线，通过上海外高桥自贸区管理物流。不用猜，不用赌——地面上有伙伴。",
    
    // Footer
    footerSlogan: "直连全球采购技术伙伴",
    footerCopy: "© 2026 TAXICOLOR. 版权所有. 上海浦东外高桥自由贸易区."
  }
};

const tradeEngines = [
  {
    appUi: '/img/tunan_app_foreign_wechat_ui.webp',
    buyerScene: '/img/director_app_foreign_wechat_scene.webp',
  },
  {
    appUi: '/img/tunan_app_compliance_assistant_ui.webp',
    buyerScene: '/img/director_app_assistant_scene.webp',
  },
  {
    appUi: '/img/tunan_app_trade_manager_ui.webp',
    buyerScene: '/img/director_app_trade_manager_scene.webp',
  },
  {
    appUi: '/img/tunan_app_director_assistant_ui.webp',
    buyerScene: '/img/director_app_operation_scene.webp',
  },
  {
    appUi: '/img/tunan_app_market_insight_ui.webp',
    buyerScene: '/img/director_app_market_insight_scene.webp',
  },
  {
    appUi: '/img/tunan_app_product_listing_ui.webp',
    buyerScene: '/img/director_app_video_factory_scene.webp',
  },
];

export default function GlobalSourcingHome() {
  const [mounted, setMounted] = useState(false);
  const [activeEngineTab, setActiveEngineTab] = useState(0);
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  // Inquiry form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setFormSubmitting(true);
    setTimeout(() => {
      console.log("B2B Inquiry:", { name: formName, email: formEmail, company: formCompany, country: formCountry, message: formMessage });
      setFormSubmitting(false);
      setFormSubmitted(true);
      setFormName(''); setFormEmail(''); setFormCompany(''); setFormCountry(''); setFormMessage('');
    }, 1000);
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

  // Active translation selector
  const t = TRANSLATIONS[lang];

  const heroShowcaseSlides = [
    {
      img: '/img/oem_catalog_app_mockup.webp',
      title: t.heroShowcase[0].title,
      badge: t.heroShowcase[0].badge,
      desc: t.heroShowcase[0].desc
    },
    {
      img: '/img/consumerlens_market_radar.webp',
      title: t.heroShowcase[1].title,
      badge: t.heroShowcase[1].badge,
      desc: t.heroShowcase[1].desc
    },
    {
      img: '/img/director_client_workshop.webp',
      title: t.heroShowcase[2].title,
      badge: t.heroShowcase[2].badge,
      desc: t.heroShowcase[2].desc
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans min-h-screen antialiased flex flex-col selection:bg-accent selection:text-background">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0B0F17] text-slate-400 text-center text-xs py-3 px-6 border-b border-white/5 tracking-wider font-medium flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-accent text-button-text uppercase tracking-widest animate-pulse font-mono">{t.enterpriseBadge}</span>
          <span>{t.announcement.split(' filtration.taxicolor.com')[0]} <a href="https://filtration.taxicolor.com" target="_blank" rel="noopener noreferrer" className="text-accent underline font-bold hover:text-white transition-colors">filtration.taxicolor.com</a> {t.announcement.split('filtration.taxicolor.com ')[1]}</span>
        </div>

        {/* Global Controls Panel (Theme & Lang Switcher) */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
          {/* Language select */}
          <div className="flex items-center gap-1 text-[9.5px] border-r border-white/10 pr-2">
            <button 
              onClick={() => setLang('en')} 
              className={`px-1.5 py-0.5 rounded font-black transition-colors ${lang === 'en' ? 'text-accent font-extrabold' : 'text-slate-500 hover:text-slate-350'}`}
            >
              EN
            </button>
            <span className="text-white/10 text-[9px]">|</span>
            <button 
              onClick={() => setLang('zh')} 
              className={`px-1.5 py-0.5 rounded font-black transition-colors ${lang === 'zh' ? 'text-accent font-extrabold' : 'text-slate-500 hover:text-slate-350'}`}
            >
              中文
            </button>
          </div>

          {/* Theme select */}
          <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider font-mono">
            <button 
              onClick={() => setTheme('dark')} 
              className={`w-3.5 h-3.5 rounded-full bg-[#080C14] border border-white/20 transition-all ${theme === 'dark' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(255,199,0,0.6)]' : 'opacity-65 hover:opacity-100'}`}
              title="Dark Theme"
            />
            <button 
              onClick={() => setTheme('light')} 
              className={`w-3.5 h-3.5 rounded-full bg-[#FAFAFA] border border-black/20 transition-all ${theme === 'light' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'opacity-65 hover:opacity-100'}`}
              title="Light Theme"
            />
            <button 
              onClick={() => setTheme('china-direct')} 
              className={`w-3.5 h-3.5 rounded-full bg-[#E60012] border border-white/20 transition-all ${theme === 'china-direct' ? 'ring-2 ring-accent scale-110 shadow-[0_0_8px_rgba(222,41,16,0.7)]' : 'opacity-65 hover:opacity-100'}`}
              title="China-Direct Theme"
            />
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 bg-nav-bg backdrop-blur-xl border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Minimalist SVG Emblem */}
            <Image 
              src="/img/taxicolor_logo_flat.webp" 
              alt="Taxicolor Logo" 
              width={36} 
              height={36} 
              className="w-9 h-9 drop-shadow-[0_0_8px_var(--accent-glow)] transform hover:scale-105 transition-transform duration-300 object-contain" 
            />
            <div>
              {/* Zero-space brand identity wordmark */}
              <div className="flex items-center leading-none">
                <span className="font-heading text-base font-black tracking-tight text-accent">taxi</span>
                <span className="font-heading text-base font-black tracking-tight text-foreground">color</span>
              </div>
              <span className="text-[8.5px] text-accent/80 font-black tracking-widest uppercase block mt-0.5 font-mono">{t.monogramTag}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[10.5px] font-bold uppercase tracking-wider text-[#64748B] dark:text-slate-400">
            <a href="#solutions" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navEngines}</a>
            <a href="#totem" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navTotem}</a>
            <a href="#transparency" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navTransparency}</a>
            <a href="#ops" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navOps}</a>
            <a href="#calculator" className="hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors">{t.navCalculator}</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://filtration.taxicolor.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2.5 rounded-lg border border-border hover:border-accent/40 font-heading text-[10px] font-bold uppercase tracking-wider transition-all text-foreground bg-white/5 hover:bg-accent/5 flex items-center gap-1.5 shadow-sm"
            >
              <Database className="w-3.5 h-3.5 text-accent" />
              <span>{t.btnCatalog}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. PREMIUM MINIMAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden cyber-grid">
        {/* Soft atmospheric ambient glows */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/[0.02] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent font-mono">{t.heroBadge}</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.08] tracking-tight">
              {t.heroSlogan}<br />
              <span className="bg-gradient-to-r from-accent via-accent/80 to-foreground bg-clip-text text-transparent">
                {t.heroHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 leading-relaxed font-body max-w-xl font-medium">
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-4 rounded-xl bg-accent hover:bg-accent/85 font-heading text-xs font-bold uppercase tracking-wider transition-all text-button-text flex items-center gap-2 shadow-lg shadow-accent/15 hover:shadow-accent/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.btnExplore}</span>
                <ArrowRight className="w-4 h-4 text-button-text" />
              </button>
              <a 
                href="https://filtration.taxicolor.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-4 rounded-xl border border-border hover:border-accent/30 bg-white/5 font-heading text-xs font-bold uppercase tracking-wider transition-all text-foreground flex items-center gap-1.5 shadow-sm hover:bg-white/[0.08]"
              >
                <span>{t.btnCatalogHero}</span>
              </a>
            </div>

            {/* Trust Bar — aligns with right edge of hero mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-7" />
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2 pt-6 border-t border-border">
                {[
                  { label: lang === 'en' ? '70+ OE Models' : '70+ OE 型号', desc: lang === 'en' ? 'Verified OEM catalog' : '已验证 OEM 目录' },
                  { label: lang === 'en' ? 'IATF / ISO 9001' : 'IATF / ISO 9001', desc: lang === 'en' ? 'Automotive OEM certified' : '汽车 OEM 认证' },
                  { label: lang === 'en' ? 'Shanghai FTZ' : '上海外高桥', desc: lang === 'en' ? 'Container pack Waigaoqiao' : '外高桥拼箱直装' },
                  { label: lang === 'en' ? '100% Batch QC' : '100% 批次全检', desc: lang === 'en' ? 'Dimensional & seal per order' : '每单尺寸与密封抽检' },
                  { label: lang === 'en' ? '12h Response' : '12h 响应', desc: lang === 'en' ? 'Direct to engineer' : '直连工厂工程师' },
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-3 border border-border text-center space-y-0.5">
                    <span className="text-[10px] font-extrabold text-foreground uppercase tracking-wider block font-heading">{item.label}</span>
                    <span className="text-[8px] text-slate-450 block font-mono">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Interactive Mockup Slider */}
          <div className="lg:col-span-5 relative group flex justify-center w-full">
            <div className="relative w-full max-w-[430px]">
              {/* Theme glow backing */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-45 transition duration-300" />
              
              <div className="relative bg-[#0F131C] dark:bg-panel border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4">
                
                {/* Simulated Web Address Header */}
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{t.addressBar}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/80 shadow-[0_0_8px_var(--accent-glow-strong)]" />
                </div>

                {/* Slideshow Display Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-border shadow-inner group">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                      
                      {/* Floating Indicator */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[8px] font-extrabold bg-accent text-button-text uppercase tracking-wider shadow font-mono">
                        {heroShowcaseSlides[activeHeroTab].badge}
                      </span>

                      {/* Title & Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                        <h4 className="font-heading text-xs font-black text-white tracking-wide uppercase">
                          {heroShowcaseSlides[activeHeroTab].title}
                        </h4>
                        <p className="text-[9.5px] text-slate-350 leading-relaxed font-body">
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
                          ? 'border-accent/40 bg-accent/10 text-foreground shadow-md' 
                          : 'border-border bg-white/[0.02] text-slate-400 hover:bg-white/5 hover:text-foreground'
                      }`}
                    >
                      <span className="text-[8px] block font-mono uppercase font-bold tracking-widest text-accent/80">{t.step} {idx + 1}</span>
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
      <section id="totem" className="py-28 bg-[#0B0F17] dark:bg-background/95 border-y border-border relative overflow-hidden">
        {/* Abstract lines or decorations for premium layout */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-80 h-80 bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 sm:p-16 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Brand Story Copy */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-8 bg-accent" />
                  <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase font-mono">{t.storyBadge}</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
                  {t.storyTitle}
                </h2>
                <p className="text-base text-slate-300 dark:text-slate-200 leading-relaxed font-body">
                  {t.storyPara1}
                </p>
                <p className="text-sm text-[#8E9AA8] dark:text-slate-400 leading-relaxed font-body">
                  {t.storyPara2}
                </p>
                
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-border text-[11px] font-bold text-slate-300">
                    <span className="text-accent">✓</span> {t.storyBullet1}
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-border text-[11px] font-bold text-slate-300">
                    <span className="text-accent">✓</span> {t.storyBullet2}
                  </div>
                </div>
              </div>

              {/* Brand Story Emblem/Visual presentation */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-72 h-72 rounded-full bg-white/[0.01] border border-border flex items-center justify-center group shadow-inner">
                  {/* Outer spinning hexagon */}
                  <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite]" />
                  
                  {/* Large Premium Golden SVG Emblem */}
                  <Image 
                    src="/img/taxicolor_logo_flat.webp" 
                    alt="Taxicolor Logo" 
                    width={176} 
                    height={176} 
                    className="w-44 h-44 drop-shadow-[0_0_20px_var(--accent-glow)] group-hover:scale-105 transition-transform duration-500 object-contain" 
                  />
                  
                  <span className="absolute bottom-6 font-mono text-[9px] tracking-widest text-accent uppercase font-bold">{t.storyFooterText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CAPABILITIES COMPARISON SECTION */}
      <section id="transparency" className="py-24 bg-gradient-to-b from-background to-[#0B0F17] dark:to-background/95 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase font-mono bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
              {t.transBadge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
              {t.transTitle}
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-400 font-body">
              {t.transDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Find */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/20 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/3 rounded-full blur-2xl group-hover:bg-accent/8 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">01</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-body relative z-10">{t.howStep1Desc}</p>
            </div>

            {/* Step 2: Audit */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/20 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/3 rounded-full blur-2xl group-hover:bg-accent/8 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">02</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-body relative z-10">{t.howStep2Desc}</p>
            </div>

            {/* Step 3: Ship */}
            <div className="glass-card rounded-3xl p-8 border border-border text-left space-y-4 relative overflow-hidden group hover:border-accent/20 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/3 rounded-full blur-2xl group-hover:bg-accent/8 transition-colors" />
              <span className="font-mono text-4xl font-black text-accent/20">03</span>
              <h3 className="font-heading text-lg font-black text-foreground relative z-10">{t.howStep3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-body relative z-10">{t.howStep3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SHOWCASE OF THE 6 AUTONOMOUS ENGINES */}
      <section id="solutions" className="py-24 bg-background cyber-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25 font-mono">
              {t.engineBadge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
              {t.engineTitle}
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-400 font-body">
              {t.engineDesc}
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {t.engines.map((engine, idx) => (
              <button
                key={idx}
                onClick={() => setActiveEngineTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading border transition-all duration-300 cursor-pointer ${
                  activeEngineTab === idx
                    ? 'bg-accent border-accent text-button-text shadow-md shadow-accent/10'
                    : 'bg-white/[0.02] border-border text-slate-400 hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {engine.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Product Info Description */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-accent bg-accent/10 border border-accent/25 rounded uppercase font-mono">
                  {t.engines[activeEngineTab].badge}
                </span>
                <h3 className="font-heading text-2xl font-black text-foreground leading-snug">
                  {t.engines[activeEngineTab].name}
                </h3>
                <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed font-body">
                  {t.engines[activeEngineTab].desc}
                </p>

                <div className="pt-4 border-t border-border space-y-3">
                  <span className="text-[9px] font-extrabold text-accent uppercase tracking-widest block font-heading font-mono">{t.engineSpec}</span>
                  <div className="space-y-2">
                    {t.engines[activeEngineTab].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Graphic Display Side: App UI + Buyer Scene Side-by-Side Carousel */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. App UI Mockup Display */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase font-heading block text-center font-mono">{t.engineControls}</span>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-[#080C14] shadow-lg relative group">
                    <Image 
                      src={tradeEngines[activeEngineTab].appUi} 
                      alt="App UI Controls" 
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#080C14]/10 pointer-events-none" />
                  </div>
                </div>

                {/* 2. Buyer Scene Photograph Display */}
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase font-heading block text-center font-mono">{t.engineAudit}</span>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-[#0F131C] shadow-lg relative group">
                    <Image 
                      src={tradeEngines[activeEngineTab].buyerScene} 
                      alt="Local Operations Scene" 
                      fill
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#080C14]/10 pointer-events-none" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. GROUND OPERATIONS SECTION */}
      <section id="ops" className="py-24 bg-[#0B0F17] dark:bg-background/95 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Grid */}
          <div className="lg:col-span-5 relative group flex justify-center w-full">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/30 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
              
              <div className="relative bg-panel border border-border rounded-3xl overflow-hidden shadow-2xl p-4 text-center space-y-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black/40 border border-border shadow-inner">
                  <Image 
                    src="/img/tunan_portrait.webp" 
                    alt="Tunan Portrait" 
                    fill
                    className="object-cover opacity-85"
                    onError={(e) => {
                      e.currentTarget.src = "/img/logo_dark_mode.webp";
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-sm font-black text-foreground font-heading">{t.opsPortraitName}</span>
                    <span className="text-[8px] font-extrabold tracking-widest text-button-text bg-accent px-1 py-0.5 rounded uppercase font-mono">
                      {t.opsPortraitTag}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold block mt-0.5">{t.opsPortraitDesc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-accent bg-accent/10 rounded-full uppercase border border-accent/20 inline-block font-heading font-mono">
              {t.opsBadge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
              {t.opsTitle}
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed font-body">
              {t.opsPara1}
            </p>
            <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed font-body">
              {t.opsPara2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-start gap-2.5 text-left">
                <div className="p-2 bg-white/[0.02] border border-border rounded-xl shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground block font-heading">{t.opsTitle1}</span>
                  <span className="text-[10px] text-slate-400 leading-relaxed font-body block mt-0.5">{t.opsDesc1}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-left">
                <div className="p-2 bg-white/[0.02] border border-border rounded-xl shrink-0">
                  <Anchor className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground block font-heading">{t.opsTitle2}</span>
                  <span className="text-[10px] text-slate-400 leading-relaxed font-body block mt-0.5">{t.opsDesc2}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7.5. FOUNDER'S MANIFESTO */}
      <section id="manifesto" className="py-24 bg-background relative overflow-hidden border-t border-border">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-accent bg-accent/10 rounded-full uppercase border border-accent/20 inline-block font-mono">
              {lang === 'en' ? "RAW & HONEST INTENT" : "坦诚宣言"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              {lang === 'en' ? "The Founder's Manifesto" : "创始人特立独行的白皮书"}
            </h2>
            <p className="text-xs text-slate-400 font-body max-w-lg mx-auto">
              {lang === 'en' 
                ? "No glossy corporate brochures. Just engineering discipline and 100% price transparency."
                : "没有精美的公关宣传册，只有严苛的工程纪律和 100% 的出厂底价穿透。"}
            </p>
          </div>

          {/* High-Fidelity Glassmorphic Terminal Card */}
          <div className="glass-card rounded-3xl border border-border shadow-2xl overflow-hidden backdrop-blur-xl bg-panel/40">
            {/* Terminal Top Bar */}
            <div className="bg-[#090D16] border-b border-border px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] text-slate-400 font-mono ml-3 font-semibold tracking-wider select-none">
                  tunan@taxicolor:~ $ cat manifesto.md
                </span>
              </div>
              <span className="text-[9px] text-accent font-mono font-bold tracking-wider animate-pulse uppercase">
                {lang === 'en' ? "LIVE CONSOLE" : "实时终端"}
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-8 sm:p-10 space-y-8 font-body text-slate-350 relative text-left leading-relaxed text-sm sm:text-base selection:bg-accent selection:text-button-text">
              {lang === 'en' ? (
                <>
                  <p className="font-semibold text-foreground text-base sm:text-lg">
                    I spent years as a full-stack engineer at big tech companies. Now I'm building something different: a sourcing partner that connects global buyers directly with Chinese factories, without the layers of middlemen.
                  </p>
                  
                  <p className="border-l-2 border-accent/40 pl-4 py-1 text-slate-400 italic bg-accent/5 rounded-r-xl">
                    <strong className="text-accent uppercase text-xs font-mono tracking-wider not-italic block mb-1">Fair honesty up front:</strong>
                    Taxicolor is a new venture. I'm not going to tell you we've shipped 10,000 containers or managed 500 suppliers. We haven't — yet.
                  </p>

                  <div className="space-y-4">
                    <p className="text-foreground font-bold tracking-wide font-heading">But here's what I do bring:</p>
                    
                    <ul className="space-y-3.5 pl-1">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">01.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">Engineering discipline:</strong>
                          <span className="text-slate-400 text-sm">I approach sourcing the way I approach system design: trace every step, find the inefficiencies, fix them at the root. No black boxes, no hand-waving.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">02.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">Boots on the ground:</strong>
                          <span className="text-slate-400 text-sm">I visit factories in person. I'm not sitting in an office repackaging supplier photos. If I recommend a factory, I've walked through it.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">03.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">Honest about what we know and what we don't:</strong>
                          <span className="text-slate-400 text-sm">You pay for the product. We earn our margin through competitive sourcing — not hidden fees.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-slate-300 sm:leading-relaxed">
                    My goal is simple: I build custom code tools to run our operations, and I personally audit the factory floor. When you partner with us, you get a direct, optimized path to verified factories — without the guesswork.
                  </p>

                  <p className="font-bold text-foreground">
                    If you want an honest, engineer-led partner in China, let's talk.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-foreground text-base sm:text-lg">
                    在大厂做了多年的全栈系统架构师之后，我现在在做一件完全不同的事情：建立一个真正透明的“技术型”采购合伙人服务，直接连接全球买家与中国源头工厂，彻底剥离层层中间商。
                  </p>
                  
                  <p className="border-l-2 border-accent/40 pl-4 py-1 text-slate-400 italic bg-accent/5 rounded-r-xl">
                    <strong className="text-accent uppercase text-xs font-mono tracking-wider not-italic block mb-1">说句大实在话：</strong>
                    Taxicolor 是一个全新的探索。我不想吹嘘我们已经运送了1万个集装箱或管理着500家工厂。我们还没有——至少目前还没有。
                  </p>

                  <div className="space-y-4">
                    <p className="text-foreground font-bold tracking-wide font-heading">但我能为您带来这些：</p>
                    
                    <ul className="space-y-3.5 pl-1">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">01.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">工程师的严苛纪律：</strong>
                          <span className="text-slate-400 text-sm">我用系统架构的思维来做采购：追踪每一步骤，找出低效环节，从底层根治。这里没有黑盒，没有敷衍。</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">02.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">扎根车间现场：</strong>
                          <span className="text-slate-400 text-sm">我亲自驻扎在工厂一线。我不会坐在办公室里用厂家发来的照片装点门面。如果我向您推荐一家工厂，那绝对是我亲自走过每一个车间的结果。</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-mono font-bold mt-1 text-xs">03.</span>
                        <div>
                          <strong className="text-foreground font-heading text-sm block sm:inline mr-1">100% 价格穿透：</strong>
                          <span className="text-slate-400 text-sm">固定月度服务费，没有隐形抽点，没有工厂回扣。</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-slate-300 sm:leading-relaxed">
                    我的目标非常简单：我编写定制代码来运行我们的所有采购流程，我亲自睡在车间审计公差。当您选择与我合作时，您不需要为昂贵的写字楼或销售团队买单。您支付的，是直通工厂底价与彻底优化的技术通道。
                  </p>

                  <p className="font-bold text-foreground">
                    如果您想在中国拥有一位诚实、由工程师亲自带队的技术采购合伙人，期待您的邮件。
                  </p>
                </>
              )}

              {/* Signature and B2B mailto Link */}
              <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-mono">MANIFESTO AUTHOR</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg font-black text-foreground font-heading">Tunan</span>
                    {/* Hand-written signature style */}
                    <span className="font-serif italic text-accent text-3xl font-light tracking-wide pl-2 border-l border-border select-none">
                      Tunan
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-450 font-bold block">{lang === 'en' ? "Founder, Taxicolor" : "Taxicolor 创始人 / 全栈系统架构师"}</span>
                </div>

                <a 
                  href="mailto:tunan@taxicolor.com?subject=B2B Sourcing Partnership Inquiry"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-accent hover:bg-accent/90 text-button-text font-black rounded-2xl shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-heading text-xs tracking-wider uppercase group"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>{lang === 'en' ? "Secure Direct Partnership" : "直连技术合伙人"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DYNAMIC SKU ELASTIC COST CALCULATOR — COMMENTED OUT; replaced with inquiry form */}
      {/*
      <section id="calculator" className="py-24 bg-background border-t border-border">
        ... CALCULATOR CODE PRESERVED IN GIT HISTORY ...
      </section>
      */}

      {/* 8. B2B INQUIRY FORM */}
      <section id="calculator" className="py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">

          <div className="space-y-3">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25 inline-block font-mono">
              {t.formBadge}
            </span>
            <h2 className="font-heading text-3xl font-black text-foreground leading-tight">
              {t.formTitle}
            </h2>
            <p className="text-xs text-slate-450 font-body max-w-lg mx-auto">
              {t.formSubtitle}
            </p>
          </div>

          {formSubmitted ? (
            /* Success State */
            <div className="glass-card rounded-3xl p-12 text-center border border-emerald-500/25 max-w-2xl mx-auto shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-heading text-xl font-black text-foreground mb-3">{t.formSuccessTitle}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-body">{t.formSuccessDesc}</p>
            </div>
          ) : (
            /* Form */
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-border shadow-xl text-left">
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">{t.formName} *</label>
                    <input
                      type="text" required value={formName} onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ellis Vale"
                      className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-600 outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">{t.formEmail} *</label>
                    <input
                      type="email" required value={formEmail} onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="purchasing@yourbrand.com"
                      className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-600 outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">{t.formCompany}</label>
                    <input
                      type="text" value={formCompany} onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="Global Parts Inc."
                      className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-600 outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">{t.formCountry}</label>
                    <input
                      type="text" value={formCountry} onChange={(e) => setFormCountry(e.target.value)}
                      placeholder="Germany / United States / UAE..."
                      className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-600 outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">{t.formMessage}</label>
                  <textarea
                    rows={4} value={formMessage} onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={t.formPlaceholder}
                    className="w-full bg-white/[0.03] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-600 outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent/90 disabled:bg-accent/60 text-button-text font-heading text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:translate-y-[-1px] shadow-lg shadow-accent/15 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{formSubmitting ? t.formSubmitting : t.formSubmit}</span>
                </button>
              </form>
            </div>
          )}

        </div>
      </section>

      {/* 8. B2B CTA VALUE CALLOUT */}
      <section className="py-24 bg-[#0B0F17] dark:bg-background/95 text-white relative overflow-hidden text-center border-t border-border">
        <div className="absolute inset-0 bg-accent/[0.01] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 uppercase font-mono">
            {t.ctaBadge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
            {t.ctaTitle.split('. ')[0]}<br />
            {t.ctaTitle.split('. ')[1]}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body max-w-xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:tunan@taxicolor.com" 
              className="px-6 py-3.5 rounded-xl bg-accent hover:bg-accent/85 text-button-text font-heading text-xs font-black uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_var(--accent-glow-strong)] block"
            >
              tunan@taxicolor.com
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-background text-slate-500 py-16 px-6 border-t border-border">
        
        {/* B2B Ecosystem Partners Grid */}
        <div className="max-w-7xl mx-auto mb-12 pb-12 border-b border-border grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Logistics Partners */}
          <div className="glass-card rounded-2xl p-6 border border-border bg-panel/30 space-y-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block font-mono">
              {lang === 'en' ? "Logistics Partners" : "货代与物流合伙人"}
            </span>
            <div className="flex flex-col justify-center items-center h-20 bg-black/20 rounded-xl border border-dashed border-border p-4 text-center space-y-1">
              <span className="text-[10px] font-black text-slate-350 tracking-wider font-heading">
                {lang === 'en' ? "COSCO SHIPPING" : "中远海运"}
              </span>
              <span className="text-[9px] text-slate-400 font-bold font-mono">
                {lang === 'en' ? "Maersk · MSC · CMA CGM" : "马士基 · MSC · 达飞"}
              </span>
              <span className="text-[8px] text-slate-500 font-body mt-0.5">
                {lang === 'en' ? "(Designated per shipment)" : "(按出货批次指定承运人)"}
              </span>
            </div>
          </div>

          {/* QC Partners */}
          <div className="glass-card rounded-2xl p-6 border border-border bg-panel/30 space-y-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block font-mono">
              {lang === 'en' ? "Quality Control Partners" : "第三方质检合伙人"}
            </span>
            <div className="grid grid-cols-2 gap-3 h-20 items-center">
              {/* SGS */}
              <a href="https://www.sgs.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white/5 border border-border rounded-xl p-3 h-full hover:bg-white/[0.08] transition-colors group cursor-pointer">
                <span className="text-sm font-black text-slate-350 tracking-wider group-hover:text-accent transition-colors font-heading">SGS</span>
              </a>
              {/* TÜV SÜD */}
              <a href="https://www.tuvsud.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white/5 border border-border rounded-xl p-3 h-full hover:bg-white/[0.08] transition-colors group cursor-pointer">
                <span className="text-sm font-black text-slate-350 tracking-wider group-hover:text-accent transition-colors font-heading">TÜV SÜD</span>
              </a>
            </div>
          </div>

          {/* Payment Partners */}
          <div className="glass-card rounded-2xl p-6 border border-border bg-panel/30 space-y-4">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block font-mono">
              {lang === 'en' ? "Payment & Settlement Partners" : "跨境结算收汇合伙人"}
            </span>
            <div className="grid grid-cols-2 gap-3 h-20 items-center">
              {/* XTransfer */}
              <a href="https://www.xtransfer.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white/5 border border-border rounded-xl p-2 h-full hover:bg-white/[0.08] transition-colors group cursor-pointer">
                <span className="text-xs font-black text-slate-350 group-hover:text-accent transition-colors font-heading">XTransfer</span>
                <span className="text-[8px] text-slate-500 font-mono mt-0.5">{lang === 'en' ? "B2B Trade Pay" : "大宗结算"}</span>
              </a>
              {/* Airwallex */}
              <a href="https://www.airwallex.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white/5 border border-border rounded-xl p-2 h-full hover:bg-white/[0.08] transition-colors group cursor-pointer">
                <span className="text-xs font-black text-slate-350 group-hover:text-accent transition-colors font-heading">Airwallex</span>
                <span className="text-[8px] text-slate-500 font-mono mt-0.5">{lang === 'en' ? "Global FX" : "空中云汇"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* Minimalist SVG Emblem */}
            <Image 
              src="/img/taxicolor_logo_flat.webp" 
              alt="Taxicolor Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 drop-shadow-[0_0_8px_var(--accent-glow)] transform hover:scale-105 transition-transform duration-300 object-contain" 
            />
            <div className="text-left">
              <span className="text-xs font-bold text-foreground tracking-widest block uppercase font-heading">taxicolor</span>
              <span className="text-[8px] font-bold text-accent block uppercase tracking-wider font-mono">{t.footerSlogan}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-[10px] font-mono tracking-widest uppercase text-slate-600">
              {t.footerCopy}
            </p>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="mailto:tunan@taxicolor.com" className="text-[10px] font-mono tracking-widest uppercase text-slate-600 hover:text-accent transition-colors">
              {lang === 'en' ? 'Privacy & Data Policy' : '隐私与数据政策'}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
