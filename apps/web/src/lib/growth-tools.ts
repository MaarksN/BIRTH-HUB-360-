export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const GROWTH_TOOLS: Tool[] = [
  { id: "multitouch-attribution", name: "Atribuição Multitouch Full-Funnel", description: "Track every touchpoint.", icon: "GitMerge", endpoint: "/api/growth/multitouch-attribution" },
  { id: "unified-data-layer", name: "Unified Data Layer", description: "Single source of truth.", icon: "Database", endpoint: "/api/growth/unified-data-layer" },
  { id: "realtime-roi", name: "ROI por Canal Real-time", description: "Live ad performance.", icon: "DollarSign", endpoint: "/api/growth/realtime-roi" },
  { id: "experiment-sandbox", name: "Experiments Sandbox (No-code A/B)", description: "Test ideas fast.", icon: "FlaskConical", endpoint: "/api/growth/experiment-sandbox" },
  { id: "cohort-analysis", name: "Análise de Cohort Automática", description: "Retention patterns.", icon: "Users", endpoint: "/api/growth/cohort-analysis" },
  { id: "lead-source-truth", name: "Lead Source Truth", description: "Verify origins.", icon: "Search", endpoint: "/api/growth/lead-source-truth" },
  { id: "cac-calculator", name: "Calculadora de CAC Real-time", description: "Cost per customer.", icon: "Calculator", endpoint: "/api/growth/cac-calculator" },
  { id: "ltv-cac-monitor", name: "Monitor de LTV/CAC", description: "Unit economics.", icon: "Scale", endpoint: "/api/growth/ltv-cac-monitor" },
  { id: "channel-quality", name: "Predição de Qualidade de Canal", description: "Best performing channels.", icon: "Star", endpoint: "/api/growth/channel-quality" },
  { id: "budget-optimizer", name: "Otimização de Budget AI", description: "Smart allocation.", icon: "TrendingUp", endpoint: "/api/growth/budget-optimizer" },
  { id: "conversion-heatmap", name: "Mapa de Calor de Conversão", description: "Visual funnel data.", icon: "Map", endpoint: "/api/growth/conversion-heatmap" },
  { id: "fraud-detection", name: "Detecção de Fraude em Ads", description: "Save budget.", icon: "ShieldAlert", endpoint: "/api/growth/fraud-detection" },
  { id: "personalize-lp", name: "Personalização de Landing Pages", description: "Dynamic content.", icon: "LayoutTemplate", endpoint: "/api/growth/personalize-lp" },
  { id: "retargeting-automation", name: "Automação de Retargeting", description: "Bring them back.", icon: "Repeat", endpoint: "/api/growth/retargeting-automation" },
  { id: "customer-journey", name: "Análise de Jornada do Cliente", description: "Path to purchase.", icon: "MapPin", endpoint: "/api/growth/customer-journey" },
  { id: "marketing-sales-loop", name: "Feedback Loop Marketing-Vendas", description: "Align teams.", icon: "RefreshCcw", endpoint: "/api/growth/marketing-sales-loop" },
  { id: "content-scoring", name: "Scoring de Conteúdo", description: "Rate your assets.", icon: "FileText", endpoint: "/api/growth/content-scoring" },
  { id: "virality-monitor", name: "Monitor de Viralidade", description: "K-factor tracking.", icon: "Share2", endpoint: "/api/growth/virality-monitor" },
  { id: "traffic-alerts", name: "Alertas de Queda de Tráfego", description: "Website health.", icon: "Activity", endpoint: "/api/growth/traffic-alerts" },
  { id: "growth-efficiency", name: "Relatório de Eficiência de Growth", description: "Marketing ROI.", icon: "BarChart", endpoint: "/api/growth/growth-efficiency" },
];
