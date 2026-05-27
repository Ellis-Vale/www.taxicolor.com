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

const TRANSLATIONS = {
  en: {
    announcement: "Verified 6,000+ Auto Filter OEM Catalog deployed at filtration.taxicolor.com for direct RFQ routing.",
    enterpriseBadge: "Enterprise Live",
    monogramTag: "BUDORCAS B2B",
    navEngines: "Trade Engines",
    navTotem: "The Totem",
    navTransparency: "Flat-Fee Sourcing",
    navOps: "Ground Operations",
    navCalculator: "Cost Calculator",
    btnCatalog: "Browse Catalog",
    
    // Hero
    heroBadge: "Budorcas taxicolor • Direct-to-Source",
    heroSlogan: "High-Altitude Sourcing Precision.",
    heroHighlight: "Direct Sourcing Saffron.",
    heroDesc: "We automate supplier discovery, run laboratory tolerance prediction models, audit industrial specifications, and orchestrate customs logistics directly from Waigaoqiao FTZ — all for a flat, transparent subscription. Zero middleman markup.",
    btnExplore: "Explore Sourcing Engines",
    btnCatalogHero: "Automotive OEM Catalog",
    statMapped: "Auto SKU Mapped",
    statMarkup: "Billing Markup",
    statSync: "Edge CDN Sync",
    
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
    storyBadge: "OUR BRAND ORIGIN",
    storyTitle: "Taxicolor is not the color of a taxi.",
    storyPara1: "It is the scientific classification of the Takin (Budorcas taxicolor)—a legendary, robust beast that carves its path along the unforgiving, vertical cliffs of the Himalayas at altitudes of 3,000 meters.",
    storyPara2: "Strong, rare, and completely off-the-beaten-path, the Budorcas taxicolor is our spiritual totem. Standard trading corporations rely on simple email markups and crowded wholesale markets. We operate like the Takin: resiliently scaling high-altitude manufacturing barriers, auditing engineering specifications on the factory floor, and securing robust supply lines directly to you.",
    storyBullet1: "3,000m Alpine Totem",
    storyBullet2: "Absolute Resilience",
    storyFooterText: "BUDORCAS TAXICOLOR",
    
    // Transparency
    transBadge: "DEEP TRANSPARENCY",
    transTitle: "100% Price Penetration. Pure Sourcing.",
    transDesc: "Traditional trade agents claim '0% commission' yet collect opaque factory kickbacks, inflating direct unit costs by 5% to 15%. Taxicolor aligns strictly with your profitability.",
    
    opaqueBadge: "Traditional Import Agent",
    opaqueModel: "OPAQUE COMMISSION",
    opaqueTitle: "Hidden Invoice Inflation & Conflicted Interests",
    opaqueText: "Traditional agents restrict ex-works invoice visibility. They control supplier contacts, manipulate batch prices, and secure hidden manufacturer rebates while claiming simple flat fees. You ultimately bear the inflated cost margins.",
    opaqueBullet1: "Opaque Unit Pricing: Direct factory raw invoices are strictly withheld.",
    opaqueBullet2: "Opaque Quality Auditing: Standard sourcing sales agents lack engineering assets to audit physical tolerances.",
    opaqueBullet3: "Supplier Lock-in: They hide factory identities, denying you real-time supply chain sovereignty.",
    
    transparentBadge: "Taxicolor Flat-Fee Engine",
    transparentModel: "100% TRANSPARENT",
    transparentTitle: "Direct Factory Billing & Complete Tech Sovereignty",
    transparentText: "We act as your local engineering arm and software interface in China. Factory billings go directly to you with 0% markup. You pay a transparent, highly predictable monthly subscription or project fee.",
    transparentBullet1: "100% Price Penetration: Original ex-works invoices. You pay precisely what the manufacturer charges.",
    transparentBullet2: "Hands-On Workshop QA: Run by former big-tech software and process architects, auditing assembly line PLC controls.",
    transparentBullet3: "Self-Custodial Databases: Direct ownership of all supplier coordinates, technical specifications, and shipping documentation.",
    
    // Engines Showcase
    engineBadge: "TAXICOLOR TRADE ENGINES",
    engineTitle: "Real-World Operations. Encapsulated in Software.",
    engineDesc: "Click through our custom digital trade modules. Observe how each software interface is backed by rigorous, physical operations on the manufacturing workshop floors.",
    engineSpec: "Engine Specifications",
    engineBilling: "Transparent Billing",
    engineSelfService: "Self-Service Module",
    engineControls: "📱 ENGINE CONTROLS INTERFACE",
    engineAudit: "🌍 LOCALIZED LOGISTICS AUDIT",
    
    // 6 Engines
    engines: [
      {
        name: 'Direct-to-Source (D2S) Factory Engine',
        badge: 'DISCOVERY INGEST',
        desc: 'Bypasses markup-heavy trading agencies by scanning regional corporate databases and ex-factory registrations using semantic trade algorithms to isolate verified tier-1 manufacturers.',
        cost: '$99 - $249 / Mo',
        buyerName: 'Sophia Lin',
        buyerTitle: 'E-commerce Seller, New York',
        features: ['Tier-1 Manufacturer Verification rating', 'Real-time ex-works price baseline', 'Bilingual instant-translate dialogs']
      },
      {
        name: 'QA & Tolerance Prediction Engine',
        badge: 'RISK CALIBRATION',
        desc: 'Cross-checks manufacturing quality by analyzing high-resolution parts photos, pleat structures, and factory certificates against official laboratory standards and historic component failure datasets.',
        cost: '$149 / Report',
        buyerName: 'Aarav Patel',
        buyerTitle: 'Procurement Director, London',
        features: ['Certificate authenticity verification', 'Materials & pleat tolerance heatmap analysis', 'Suggested on-site technical QA guidelines']
      },
      {
        name: 'Autonomous TradeDoc & Auditing Engine',
        badge: 'CUSTOMS AUTOMATION',
        desc: 'Generates export-ready, fully compliant shipping documentation (PI, PL, CO drafts) while auditing HS Codes and customs value statements to eliminate transit delays.',
        cost: '$49 - $199 / Mo',
        buyerName: 'Mateo Silva',
        buyerTitle: 'Logistics Lead, Miami Port',
        features: ['Dynamic PI-PL-Customs valuation reconciliation', 'Automated EU/US custom template rendering', 'Direct integration with freight carrier APIs']
      },
      {
        name: 'Consolidated Supply Chain Control Center',
        badge: 'LOGISTICS CONTROL',
        desc: 'Consolidates 5-15 separate component factories into a single real-time dashboard. Uses predictive logistics models to forecast shipping bottlenecks and tracking delays.',
        cost: '$199 - $499 / Mo',
        buyerName: 'Lars Lindqvist',
        buyerTitle: 'VP Supply Chain, Stockholm',
        features: ['Multi-supplier assembly line pacing', 'Port-bottleneck & weather risk calculation', 'Autonomous local safety-stock alerts']
      },
      {
        name: 'Global Regulatory & Compliance Watchdog',
        badge: 'COMPLIANCE PATHWAYS',
        desc: 'Maps custom regulatory pathways based on destination market standards, sending automatic notifications on changes (REACH directives, EU Battery Passports, etc.).',
        cost: 'Free Basic Tier',
        buyerName: 'Amara Diop',
        buyerTitle: 'Compliance Counsel, Paris',
        features: ['Mandatory certificate compliance pathways', 'ECHA REACH / RoHS dynamic monitoring', 'Encrypted global compliance repository']
      },
      {
        name: 'Technical Cost-Modeling Copilot',
        badge: 'PROCUREMENT INTELLIGENCE',
        desc: 'Applies deep indexing of raw material index charts and localized manufacturing margins to establish target ex-works prices for high-precision business negotiations.',
        cost: '$99 / Mo',
        buyerName: 'Zayd Al-Mansoori',
        buyerTitle: 'Managing Partner, Dubai',
        features: ['Ex-factory raw material price baseline tracking', 'Contract payment structure risk scoring', 'Technical blueprint cost estimation models']
      }
    ],
    
    // Ground Operations
    opsBadge: "YOUR ON-SITE AUDIT LEADER",
    opsTitle: "An Elite Software Mind in the Molding Workshops.",
    opsPara1: "Standard import intermediaries act purely as brokers, focused entirely on markup percentages while remaining blind to technical specifications. We approach global sourcing differently.",
    opsPara2: "Dalong, a veteran big-tech system architect, personally audits parts manufacturers. We analyze mold structures, inspect raw steel grades, and calibrate robotic assembly lines to guarantee every component batch adheres rigorously to digital blueprint standards.",
    opsTitle1: "Bilingual Engineering Dialogs",
    opsDesc1: "Seamless, fluent technical negotiation directly with foreign managers. Zero translations friction.",
    opsTitle2: "Waigaoqiao FTZ Consolidation",
    opsDesc2: "Consolidate multiple component batches at Waigaoqiao Free Trade Zone to optimize shipping density and duties.",
    opsPortraitName: "DALONG",
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
    calcFlatFee: "Taxicolor Flat-Fee Tech Model",
    calcFlatDesc: "Calculated via flat-rate dashboard subscription + direct ex-works factory data loading.",
    calcYearEst: "/ Year Est.",
    calcRetained: "Budget Safely Retained",
    calcRetainedDesc: "Bypassing trading markups directly strengthens your pricing competitiveness in foreign markets.",
    calcSaveText: "Save",
    
    // CTA Callout
    ctaBadge: "Direct-to-Source Supply Chains",
    ctaTitle: "Stop Overpaying Intermediaries. Secure Your Direct Industrial Supply Line.",
    ctaDesc: "Acquire a dynamic digital catalog for your SKUs. Monitor manufacturing tolerances, verify international certifications, and trace shipments on-site for a single predictable subscription.",
    
    // Footer
    footerSlogan: "Global Sourcing Partner",
    footerCopy: "© 2026 TAXICOLOR. ALL RIGHTS RESERVED. PUDONG WAIGAOQIAO FREE TRADE ZONE, SHANGHAI."
  },
  zh: {
    announcement: "已在 filtration.taxicolor.com 部署 6,000+ 汽车滤清器规格规格库，支持直连工厂询价。",
    enterpriseBadge: "企业级上线",
    monogramTag: "羚牛 B2B 智能",
    navEngines: "交易引擎",
    navTotem: "品牌图腾",
    navTransparency: "平价采购",
    navOps: "地面运作",
    navCalculator: "成本计算器",
    btnCatalog: "浏览规格库",
    
    // Hero
    heroBadge: "Budorcas taxicolor • 直连工厂",
    heroSlogan: "高海拔采购精准度，",
    heroHighlight: "重塑供应链毛利结构。",
    heroDesc: "我们自动进行工厂探索，运行实验室质量预测模型，审计工业规格，并在上海外高桥保税区直接调配集装箱物流——一切仅需一份平价、透明的订阅服务。彻底斩断中间商加价。",
    btnExplore: "探索采购引擎",
    btnCatalogHero: "汽车零件规格库",
    statMapped: "已映射零件规格",
    statMarkup: "账单中间加价",
    statSync: "边缘计算加速",
    
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
    storyPara2: "强壮、罕见、不走寻常路，这正是我们的精神图腾。传统的贸易中介只会在邮件里赚取差价，在喧闹的批发市场里倒手。我们像羚牛一样行动：坚韧地跨越 3000 米的工厂技术壁垒，直接驻扎在制造车间审计每道工序的精密公差，为你搭建直连源头的高清透明供应链。",
    storyBullet1: "3000米雪线精神图腾",
    storyBullet2: "极限坚韧与开路精神",
    storyFooterText: "BUDORCAS TAXICOLOR 羚牛",
    
    // Transparency
    transBadge: "极致透明",
    transTitle: "100% 穿透原厂底价，纯粹代采购。",
    transDesc: "传统外贸中介宣称“0% 佣金”，却在暗中收取工厂回扣，将设备或产品出厂价抬高 5% 至 15%。Taxicolor 坚定捍卫你的最终毛利。",
    
    opaqueBadge: "传统进出口代理中介模式",
    opaqueModel: "灰色加价模式",
    opaqueTitle: "暗箱加价与利益冲突",
    opaqueText: "传统代理会将真实的工厂出厂发票层层包裹，限制你与源头工厂直接对话，甚至操纵批量单价赚取隐性返利。所有的多余溢价，最终全部压在你的采购预算上。",
    opaqueBullet1: "加价出厂账单：拒绝提供原始出厂增值税发票，层层信息阻断。",
    opaqueBullet2: "空洞的质量把控：仅为业务员对接，缺乏工科背景和工具去现场量化工艺公差。",
    opaqueBullet3: "供应商绑定：严密防范你获得工厂联系方式，剥夺你的供应链自主权。",
    
    transparentBadge: "Taxicolor 透明采购订阅",
    transparentModel: "100% 穿透真实",
    transparentTitle: "直付工厂 & 拥有完整的供应链主权",
    transparentText: "我们是你在中国本土的工程师眼睛和系统软件界面。所有采购款项直接向工厂支付，0% 加价。你只需付出一份透明、可预测的月度订阅费或定制包干费。",
    transparentBullet1: "100% 底价穿透：直面出厂原始底价，你付的每一分钱都付给价值本身。",
    transparentBullet2: "实地技术质检：由前大厂资深全栈系统设计架构师带队，到车间现场对 PLC 流水线参数进行调试。",
    transparentBullet3: "自主掌握数据库：所有的源头工厂联系人、工程图纸、海运发票均保存在你自己的云端，永不流失。",
    
    // Engines Showcase
    engineBadge: "TAXICOLOR 数字化交易引擎",
    engineTitle: "用软件封装的工厂地面作业力。",
    engineDesc: "点击下方的数字贸易模块。观察我们是如何用先进的代码，将远在中国的制造流水线实地工作流程，完美呈现在你的电脑端仪表盘中的。",
    engineSpec: "引擎技术规格",
    engineBilling: "透明订阅计费",
    engineSelfService: "自助应用模块",
    engineControls: "📱 引擎操控端后台",
    engineAudit: "🌍 实地海运及合规现场",
    
    // 6 Engines
    engines: [
      {
        name: '直连工厂 D2S 发现引擎',
        badge: '源头探查',
        desc: '利用语义化贸易解析算法，扫描中国各省市的企业注册底册、海关备案、Made-in-China等数据库，直接穿透重重中介，筛选出真正具备一级出厂资质的实体工厂。',
        cost: '月度 $99 - $249',
        buyerName: 'Sophia Lin',
        buyerTitle: '亚马逊大卖家, 纽约',
        features: ['源头厂资质验证评估','实地出厂底价横向比对','跨国即时对话自动翻译']
      },
      {
        name: '工艺公差 & 质检预测引擎',
        badge: '风险量化',
        desc: '通过上传高分辨率零件细节照片、折褶结构数据和实验室报告，利用历史工艺缺陷数据集和物理公差分析，对潜在的批次材料问题提供提前预测和现场干预建议。',
        cost: '$149 / 报告',
        buyerName: 'Aarav Patel',
        buyerTitle: '采购总监, 伦敦',
        features: ['权威检测证书真伪校验','材料及折褶公差热力图分析','车间实地量化质检卡生成']
      },
      {
        name: '自主外贸文档 & 报关审计引擎',
        badge: '报关自动化',
        desc: '全自动生成符合国际货运及海关标准的进出口单据草稿（PI, PL, 产地证等），同时根据目的港标准审查 HS Code 和申报价值，极大化减少清关扣留风险。',
        cost: '月度 $49 - $199',
        buyerName: 'Mateo Silva',
        buyerTitle: '物流负责人, 迈阿密港',
        features: ['PI-PL与海关申报价值比对','自动适配欧盟/美国合规模板','直连主流船务物流系统 APIs']
      },
      {
        name: '合并供应链实时调度中心',
        badge: '物流追踪',
        desc: '将你在 5-15 家独立零配件工厂的货期、排产进度和散装货运信息合并在同一个大屏仪表盘上。利用智能物流模型预测港口拥堵，确保多批次能同时装柜。',
        cost: '月度 $199 - $499',
        buyerName: 'Lars Lindqvist',
        buyerTitle: '供应链副总裁, 斯德哥尔摩',
        features: ['多工序上下游配套排产分析','港口气候及拥堵时效预警','安全库存水位警戒智能推送']
      },
      {
        name: '全球准入及合规雷达',
        badge: '标准与法规',
        desc: '根据你要进入的销售国家，自动映射该产品的技术准入路径，对最新的电池护照法案、REACH毒物指令更新进行实时监测，避免发生越线召回。',
        cost: '免费基础版',
        buyerName: 'Amara Diop',
        buyerTitle: '合规法律顾问, 巴黎',
        features: ['目的港强制认证路径导航','ECHA 限制准入目录动态监控','机密合规证书安全托管仓']
      },
      {
        name: '工艺拆解与成本测算副驾驶',
        badge: '精算评估',
        desc: '深度解析中国源头材料指数走势、电费成本和压铸件标准毛利，帮助你在和源头厂谈判前，生成客观精确的核价分析单，锁定最有力的谈判目标。',
        cost: '月度 $99',
        buyerName: 'Zayd Al-Mansoori',
        buyerTitle: '管理合伙人, 迪拜',
        features: ['上游原材料指数动态跟踪表','合同账期结构安全度评分','技术工程图纸智能核算评估']
      }
    ],
    
    // Ground Operations
    opsBadge: "你在中国的地面技术队长",
    opsTitle: "写过大厂架构的代码，也爬得下压铸车间的模具。",
    opsPara1: "绝大部分中介代理都是单纯的业务员，只会计算加价比例，对机械工程和材质规格一窍不通。我们提供真正的技术落地力。",
    opsPara2: "Dalong，曾任一线科技大厂的核心系统设计专家，亲自带领车间审核团队。我们现场审核模具抗压强度，检验原材料防锈等级，调试全自动螺纹 PLC 设备，用理性的工科规范把控每件产品，确保最终出货和数模图纸分毫不差。",
    opsTitle1: "双语技术直连对话",
    opsDesc1: "直接由具备开发和外贸背景的中高管和客户无缝对接技术图纸，拒绝沟通损耗。",
    opsTitle2: "外高桥保税区拼箱装柜",
    opsDesc2: "在浦东自贸区海运拼箱监管仓，帮助你的多个工厂批次实现合并装箱报关，大幅降低货代空运及散货堆存费。",
    opsPortraitName: "DALONG",
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
    calcFlatFee: "Taxicolor 穿透式代采模式",
    calcFlatDesc: "基于月度平价系统订阅 + 原始工厂出厂发票数据维护计算得出的全部服务成本。",
    calcYearEst: "/ 年 预估服务费",
    calcRetained: "采购预算净留存",
    calcRetainedDesc: "完全过滤掉贸易商的加价成本，你的出海产品在海外市场将拥有无懈可击的价格竞争力。",
    calcSaveText: "每年省下",
    
    // CTA Callout
    ctaBadge: "直连源头厂 掌控供应链",
    ctaTitle: "告别层层代理剥削。拥有自主受控的工业供应链。",
    ctaDesc: "即刻为你的 SKU 锁定源头出厂底价。监控车间公差，验证国际准入，全程物流可视，只需一份透明可预测的订阅。",
    
    // Footer
    footerSlogan: "直连全球采购技术伙伴",
    footerCopy: "© 2026 TAXICOLOR. 版权所有. 上海浦东外高桥自由贸易区."
  }
};

export default function GlobalSourcingHome() {
  const [mounted, setMounted] = useState(false);
  const [activeEngineTab, setActiveEngineTab] = useState(0);
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [skuCount, setSkuCount] = useState(1500);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
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

  // Sourcing cost comparison parameters
  const traditionalAgencyFee = Math.round(skuCount * 45); 
  const taxicolorFlatFee = billingCycle === 'monthly' 
    ? 299 * 12 + Math.round(skuCount * 5)
    : Math.round((249 * 12 + skuCount * 4.5));
  const moneySaved = traditionalAgencyFee - taxicolorFlatFee;

  const heroShowcaseSlides = [
    {
      img: '/img/oem_catalog_app_mockup.png',
      title: t.heroShowcase[0].title,
      badge: t.heroShowcase[0].badge,
      desc: t.heroShowcase[0].desc
    },
    {
      img: '/img/consumerlens_market_radar.png',
      title: t.heroShowcase[1].title,
      badge: t.heroShowcase[1].badge,
      desc: t.heroShowcase[1].desc
    },
    {
      img: '/img/director_client_workshop.png',
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg shadow-black/40">
              <svg viewBox="0 0 100 100" className="w-6.5 h-6.5">
                <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                <polygon points="50,42 50,75 35,53" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                <polygon points="50,42 50,75 65,53" fill={theme === 'china-direct' ? '#B31A05' : '#D99B00'} />
                <polygon points="35,53 50,75 38,78 24,58" fill={theme === 'china-direct' ? '#FF5A43' : '#F5B041'} />
                <polygon points="65,53 50,75 62,78 76,58" fill={theme === 'china-direct' ? '#991100' : '#B77900'} />
                <polygon points="50,75 38,78 50,88" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                <polygon points="50,75 62,78 50,88" fill={theme === 'china-direct' ? '#B31A05' : '#B77900'} />
              </svg>
            </div>
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

            {/* Credibility Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border max-w-lg">
              <div>
                <span className="text-2xl font-black text-foreground block">6,000+</span>
                <span className="text-[9px] text-accent font-extrabold uppercase tracking-wider block mt-0.5 font-mono">{t.statMapped}</span>
              </div>
              <div>
                <span className="text-2xl font-black text-foreground block">0%</span>
                <span className="text-[9px] text-accent font-extrabold uppercase tracking-wider block mt-0.5 font-mono">{t.statMarkup}</span>
              </div>
              <div>
                <span className="text-2xl font-black text-foreground block">&lt;18ms</span>
                <span className="text-[9px] text-accent font-extrabold uppercase tracking-wider block mt-0.5 font-mono">{t.statSync}</span>
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
                  <svg viewBox="0 0 100 100" className="w-44 h-44 drop-shadow-[0_0_20px_var(--accent-glow)] group-hover:scale-105 transition-transform duration-500">
                    <polygon points="50,3 90,26 90,74 50,97 10,74 10,26" fill="none" stroke={theme === 'china-direct' ? '#DE2910' : '#FFC700'} stroke-width="1.5" stroke-opacity="0.3" />
                    
                    <g id="big-emblem">
                      {/* Left Horn */}
                      <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                      <polygon points="30,22 12,28 32,32" fill="#E65100" opacity="0.4" />

                      {/* Right Horn */}
                      <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                      <polygon points="70,22 88,28 68,32" fill="#E65100" opacity="0.6" />

                      {/* Forehead */}
                      <polygon points="50,42 50,75 35,53" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                      <polygon points="50,42 50,75 65,53" fill={theme === 'china-direct' ? '#B31A05' : '#D99B00'} />

                      {/* Cheeks */}
                      <polygon points="35,53 50,75 38,78 24,58" fill={theme === 'china-direct' ? '#FF5A43' : '#F5B041'} />
                      <polygon points="65,53 50,75 62,78 76,58" fill={theme === 'china-direct' ? '#991100' : '#B77900'} />

                      <polygon points="50,42 35,53 24,58 30,22" fill="#FFE082" />
                      <polygon points="50,42 65,53 76,58 70,22" fill={theme === 'china-direct' ? '#FF5A43' : '#F5B041'} opacity="0.85" />
                      
                      <polygon points="50,75 38,78 50,88" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                      <polygon points="50,75 62,78 50,88" fill={theme === 'china-direct' ? '#B31A05' : '#B77900'} />
                    </g>
                  </svg>
                  
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* The Traditional Agent Model */}
            <div className="bg-white/[0.01] rounded-3xl p-8 sm:p-10 border border-border text-left space-y-6">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-red-400 bg-red-950/20 border border-red-900/30 rounded uppercase font-mono">
                  {t.opaqueBadge}
                </span>
                <span className="text-xs font-bold text-slate-500 font-mono">{t.opaqueModel}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{t.opaqueTitle}</h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed font-body">
                {t.opaqueText}
              </p>
              <ul className="space-y-3 pt-4 border-t border-border font-body text-xs text-[#64748B] dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{t.opaqueBullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{t.opaqueBullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{t.opaqueBullet3}</span>
                </li>
              </ul>
            </div>

            {/* The Taxicolor Flat-Fee Tech Sourcing Model */}
            <div className="bg-[#0F131C] dark:bg-panel rounded-3xl p-8 sm:p-10 border border-white/10 text-left space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex justify-between items-center relative z-10">
                <span className="px-3 py-1 text-[9px] font-extrabold tracking-widest text-button-text bg-accent rounded uppercase font-mono">
                  {t.transparentBadge}
                </span>
                <span className="text-xs font-bold text-accent font-mono">{t.transparentModel}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white relative z-10">{t.transparentTitle}</h3>
              <p className="text-xs text-slate-300 dark:text-slate-200 leading-relaxed font-body relative z-10">
                {t.transparentText}
              </p>
              <ul className="space-y-3 pt-4 border-t border-white/5 font-body text-xs text-slate-350 dark:text-slate-300 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                  <span>{t.transparentBullet1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                  <span>{t.transparentBullet2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                  <span>{t.transparentBullet3}</span>
                </li>
              </ul>
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

                <div className="pt-4 flex items-center justify-between bg-white/[0.02] rounded-2xl p-4 border border-border">
                  <div>
                    <span className="text-[8px] font-extrabold uppercase text-slate-400 font-heading block font-mono">{t.engineBilling}</span>
                    <span className="text-sm font-black text-foreground font-heading">{t.engines[activeEngineTab].cost}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">{t.engineSelfService}</span>
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
                    
                    {/* Buyer Label */}
                    <div className="absolute bottom-3 left-3 right-3 bg-panel backdrop-blur-md rounded-xl p-2.5 text-left border border-border shadow">
                      <span className="text-[9px] font-bold text-foreground block font-heading">{t.engines[activeEngineTab].buyerName}</span>
                      <span className="text-[8px] font-medium text-slate-400 block font-body">{t.engines[activeEngineTab].buyerTitle}</span>
                    </div>
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
                    src="/img/tunan_portrait.png" 
                    alt="Dalong Portrait" 
                    fill
                    className="object-cover opacity-85"
                    onError={(e) => {
                      e.currentTarget.src = "/img/logo_dark_mode.png";
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

      {/* 8. DYNAMIC SKU ELASTIC COST CALCULATOR */}
      <section id="calculator" className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-3">
            <span className="font-heading text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/25 inline-block font-mono">
              {t.calcBadge}
            </span>
            <h2 className="font-heading text-3xl font-black text-foreground leading-tight">
              {t.calcTitle}
            </h2>
            <p className="text-xs text-slate-450 font-body max-w-lg mx-auto">
              {t.calcDesc}
            </p>
          </div>

          {/* Calculator Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-border shadow-xl space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="sku-slider" className="text-xs font-bold text-foreground uppercase tracking-wide font-heading font-mono">{t.calcSkuLabel}</label>
                <span className="text-lg font-black text-accent font-heading">{skuCount.toLocaleString()} {t.calcSkuCount}</span>
              </div>
              <input
                id="sku-slider"
                type="range"
                min="100"
                max="5000"
                step="50"
                value={skuCount}
                onChange={(e) => setSkuCount(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>100 {t.calcSkuCount}</span>
                <span>2,500 {t.calcSkuCount}</span>
                <span>5,000 {t.calcSkuCount}</span>
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center">
              <div className="bg-white/[0.02] p-1 rounded-xl flex gap-1 border border-border">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider font-heading cursor-pointer transition-all ${
                    billingCycle === 'monthly' ? 'bg-accent text-button-text shadow-sm' : 'text-slate-400 hover:text-foreground'
                  }`}
                >
                  {t.calcMonthlyToggle}
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider font-heading cursor-pointer transition-all ${
                    billingCycle === 'annual' ? 'bg-accent text-button-text shadow-sm' : 'text-slate-400 hover:text-foreground'
                  }`}
                >
                  {t.calcAnnualToggle}
                </button>
              </div>
            </div>

            {/* Calculations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-heading font-mono">{t.calcTradAgent}</span>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-foreground font-heading">
                    ${traditionalAgencyFee.toLocaleString()} <span className="text-xs text-slate-500 font-bold font-body">{t.calcYearEst}</span>
                  </div>
                  <span className="text-[10px] leading-relaxed font-body text-slate-450 block">{t.calcTradDesc}</span>
                </div>
              </div>

              <div className="space-y-2 bg-white/[0.02] p-6 rounded-2xl border border-border shadow-md">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block font-heading font-mono">{t.calcFlatFee}</span>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-foreground font-heading">
                    ${taxicolorFlatFee.toLocaleString()} <span className="text-xs text-slate-500 font-bold font-body">{t.calcYearEst}</span>
                  </div>
                  <span className="text-[10px] leading-relaxed font-body text-slate-400 block">{t.calcFlatDesc}</span>
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
                  <span className="text-xs font-bold text-white block font-heading">{t.calcRetained}</span>
                  <span className="text-[10px] text-slate-400 font-body">{t.calcRetainedDesc}</span>
                </div>
              </div>
              <span className="text-xl font-black text-emerald-400 font-heading shrink-0">{t.calcSaveText} ${moneySaved.toLocaleString()} / Year</span>
            </div>

          </div>

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
              href="mailto:driver@taxicolor.com" 
              className="px-6 py-3.5 rounded-xl bg-accent hover:bg-accent/85 text-button-text font-heading text-xs font-black uppercase tracking-wider transition-all hover:translate-y-[-2px] hover:shadow-[0_0_20px_var(--accent-glow-strong)] block"
            >
              driver@taxicolor.com
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-background text-slate-500 py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 100 100" className="w-5 h-5">
                <polygon points="50,42 30,22 12,28 28,42" fill="#FFE57F" />
                <polygon points="50,42 70,22 88,28 72,42" fill="#FFE57F" />
                <polygon points="50,42 50,75 35,53" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                <polygon points="50,42 50,75 65,53" fill={theme === 'china-direct' ? '#B31A05' : '#D99B00'} />
                <polygon points="35,53 50,75 38,78 24,58" fill={theme === 'china-direct' ? '#FF5A43' : '#F5B041'} />
                <polygon points="65,53 50,75 62,78 76,58" fill={theme === 'china-direct' ? '#991100' : '#B77900'} />
                <polygon points="50,75 38,78 50,88" fill={theme === 'china-direct' ? '#DE2910' : '#FFC700'} />
                <polygon points="50,75 62,78 50,88" fill={theme === 'china-direct' ? '#B31A05' : '#B77900'} />
              </svg>
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-foreground tracking-widest block uppercase font-heading">taxicolor</span>
              <span className="text-[8px] font-bold text-accent block uppercase tracking-wider font-mono">{t.footerSlogan}</span>
            </div>
          </div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-slate-600">
            {t.footerCopy}
          </p>
        </div>
      </footer>

    </div>
  );
}
