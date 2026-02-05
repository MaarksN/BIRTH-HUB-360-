export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const HEAD_TOOLS: Tool[] = [
  { id: "burnout-detector", name: "Detector de Burnout", description: "Monitor team stress.", icon: "Thermometer", endpoint: "/api/head/burnout-detector" },
  { id: "workload-analysis", name: "Análise de Carga de Trabalho", description: "Balance team effort.", icon: "Scale", endpoint: "/api/head/workload-analysis" },
  { id: "zombie-deals", name: "Zombie Deals Detector", description: "Find dead deals.", icon: "Skull", endpoint: "/api/head/zombie-deals" },
  { id: "pipeline-audit", name: "Auditoria de Pipeline", description: "Review pipeline health.", icon: "Search", endpoint: "/api/head/pipeline-audit" },
  { id: "data-coaching", name: "Coaching Baseado em Dados", description: "Fact-based coaching.", icon: "TrendingUp", endpoint: "/api/head/data-coaching" },
  { id: "skill-gaps", name: "Identificação de Gaps de Habilidade", description: "Spot training needs.", icon: "Target", endpoint: "/api/head/skill-gaps" },
  { id: "training-recommendation", name: "Recomendação de Treinamento", description: "Suggest courses.", icon: "BookOpen", endpoint: "/api/head/training-recommendation" },
  { id: "rep-performance", name: "Análise de Performance por Vendedor", description: "Rank your reps.", icon: "BarChart2", endpoint: "/api/head/rep-performance" },
  { id: "quota-simulator", name: "Simulador de Metas", description: "Set realistic quotas.", icon: "Target", endpoint: "/api/head/quota-simulator" },
  { id: "motivation-manager", name: "Gestão de Motivação", description: "Keep morale high.", icon: "Smile", endpoint: "/api/head/motivation-manager" },
  { id: "performance-drop-alert", name: "Alertas de Queda de Performance", description: "Spot slumps early.", icon: "ArrowDown", endpoint: "/api/head/performance-drop-alert" },
  { id: "tactical-report", name: "Relatórios Táticos Diários", description: "Daily action plan.", icon: "Clipboard", endpoint: "/api/head/tactical-report" },
  { id: "rep-comparison", name: "Comparativo entre Vendedores", description: "Benchmarking.", icon: "Users", endpoint: "/api/head/rep-comparison" },
  { id: "capacity-planning", name: "Planejamento de Capacity", description: "Headcount needs.", icon: "UserPlus", endpoint: "/api/head/capacity-planning" },
  { id: "cadence-management", name: "Gestão de Cadência do Time", description: "Monitor activity rhythm.", icon: "Activity", endpoint: "/api/head/cadence-management" },
  { id: "team-health", name: "Monitor de Saúde do Time", description: "Overall team vibe.", icon: "Heart", endpoint: "/api/head/team-health" },
  { id: "one-on-one-feedback", name: "Feedback Estruturado 1:1", description: "Guide 1:1s.", icon: "MessageSquare", endpoint: "/api/head/one-on-one-feedback" },
  { id: "evolution-history", name: "Histórico de Evolução Individual", description: "Track rep growth.", icon: "TrendingUp", endpoint: "/api/head/evolution-history" },
  { id: "predictability-indicators", name: "Indicadores de Previsibilidade", description: "Forecast confidence.", icon: "Crosshair", endpoint: "/api/head/predictability-indicators" },
  { id: "leadership-dashboard", name: "Painel de Liderança Real-time", description: "Command center.", icon: "Monitor", endpoint: "/api/head/leadership-dashboard" },
];
