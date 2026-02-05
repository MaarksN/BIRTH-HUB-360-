export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const CRO_TOOLS: Tool[] = [
  { id: "unbiased-forecast", name: "Forecast AI sem Viés", description: "Objective forecasting.", icon: "BarChart", endpoint: "/api/cro/unbiased-forecast" },
  { id: "quarterly-projection", name: "Projeção Trimestral Automática", description: "Look ahead.", icon: "Calendar", endpoint: "/api/cro/quarterly-projection" },
  { id: "what-if-scenarios", name: "Simulador de Cenários What-if", description: "Test strategies.", icon: "Shuffle", endpoint: "/api/cro/what-if-scenarios" },
  { id: "pricing-impact", name: "Impacto de Pricing", description: "Analyze price changes.", icon: "DollarSign", endpoint: "/api/cro/pricing-impact" },
  { id: "headcount-impact", name: "Impacto de Headcount", description: "Hiring ROI.", icon: "Users", endpoint: "/api/cro/headcount-impact" },
  { id: "market-share", name: "Market Share Intelligence", description: "Track dominance.", icon: "PieChart", endpoint: "/api/cro/market-share" },
  { id: "vertical-penetration", name: "Análise de Penetração por Vertical", description: "Industry success.", icon: "Layers", endpoint: "/api/cro/vertical-penetration" },
  { id: "geo-analysis", name: "Análise Geográfica", description: "Map performance.", icon: "MapPin", endpoint: "/api/cro/geo-analysis" },
  { id: "systemic-bottlenecks", name: "Detecção de Gargalos Sistêmicos", description: "Find revenue blockers.", icon: "AlertOctagon", endpoint: "/api/cro/systemic-bottlenecks" },
  { id: "channel-roi", name: "ROI por Canal e Produto", description: "Investment efficiency.", icon: "TrendingUp", endpoint: "/api/cro/channel-roi" },
  { id: "machine-efficiency", name: "Monitor de Eficiência da Máquina", description: "CAC/LTV ratios.", icon: "Activity", endpoint: "/api/cro/machine-efficiency" },
  { id: "macro-risk", name: "Alerta de Risco Macroeconômico", description: "External threats.", icon: "Globe", endpoint: "/api/cro/macro-risk" },
  { id: "strategic-planning", name: "Planejamento Estratégico Assistido", description: "Build the roadmap.", icon: "Compass", endpoint: "/api/cro/strategic-planning" },
  { id: "sustainable-growth", name: "Análise de Crescimento Sustentável", description: "Long-term health.", icon: "Tree", endpoint: "/api/cro/sustainable-growth" },
  { id: "predictability-metric", name: "Métrica de Previsibilidade", description: "Forecast accuracy.", icon: "Target", endpoint: "/api/cro/predictability-metric" },
  { id: "human-dependency", name: "Avaliação de Dependência Humana", description: "Automation gaps.", icon: "User", endpoint: "/api/cro/human-dependency" },
  { id: "expansion-simulation", name: "Simulação de Cortes/Expansão", description: "Scale up or down.", icon: "Sliders", endpoint: "/api/cro/expansion-simulation" },
  { id: "incentive-audit", name: "Auditoria de Incentivos", description: "Comp plan check.", icon: "Award", endpoint: "/api/cro/incentive-audit" },
  { id: "executive-dashboard", name: "Dashboard Executivo Unificado", description: "Top-level view.", icon: "Layout", endpoint: "/api/cro/executive-dashboard" },
  { id: "strategic-memory", name: "Memória Estratégica Histórica", description: "Corporate brain.", icon: "Database", endpoint: "/api/cro/strategic-memory" },
];
