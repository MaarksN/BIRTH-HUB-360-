export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const SUPPORT_TOOLS: Tool[] = [
  { id: "auto-classify", name: "Classificação Automática de Tickets", description: "Route tickets instantly.", icon: "Tag", endpoint: "/api/support/auto-classify" },
  { id: "prioritize-impact", name: "Priorização por Impacto Financeiro", description: "Focus on high-value issues.", icon: "DollarSign", endpoint: "/api/support/prioritize-impact" },
  { id: "systemic-crisis", name: "Detecção de Crises Sistêmicas", description: "Spot outages early.", icon: "AlertOctagon", endpoint: "/api/support/systemic-crisis" },
  { id: "auto-summary", name: "Resumo Automático do Problema", description: "Summarize long threads.", icon: "FileText", endpoint: "/api/support/auto-summary" },
  { id: "suggest-solution", name: "Sugestão de Solução (KB AI)", description: "Recommend fixes.", icon: "Lightbulb", endpoint: "/api/support/suggest-solution" },
  { id: "live-kb", name: "Base de Conhecimento Viva", description: "Dynamic KB updates.", icon: "BookOpen", endpoint: "/api/support/live-kb" },
  { id: "smart-escalation", name: "Escalonamento Inteligente", description: "Route to experts.", icon: "ArrowUp", endpoint: "/api/support/smart-escalation" },
  { id: "sla-predictor", name: "SLA Predictor", description: "Forecast breach risk.", icon: "Clock", endpoint: "/api/support/sla-predictor" },
  { id: "sentiment-analysis", name: "Análise de Sentimento do Cliente", description: "Detect frustration.", icon: "Frown", endpoint: "/api/support/sentiment-analysis" },
  { id: "auto-crisis-mode", name: "Modo Crise Automático", description: "Trigger emergency workflows.", icon: "Siren", endpoint: "/api/support/auto-crisis-mode" },
  { id: "cluster-tickets", name: "Agrupamento de Tickets Similares", description: "Group related issues.", icon: "Layers", endpoint: "/api/support/cluster-tickets" },
  { id: "dedupe-tickets", name: "Redução de Tickets Repetidos", description: "Merge duplicates.", icon: "Copy", endpoint: "/api/support/dedupe-tickets" },
  { id: "backlog-monitor", name: "Monitor de Backlog", description: "Track queue health.", icon: "BarChart", endpoint: "/api/support/backlog-monitor" },
  { id: "tech-history", name: "Histórico Técnico por Cliente", description: "View past issues.", icon: "History", endpoint: "/api/support/tech-history" },
  { id: "efficiency-eval", name: "Avaliação de Eficiência", description: "Score agent performance.", icon: "UserCheck", endpoint: "/api/support/efficiency-eval" },
  { id: "recurrence-alert", name: "Alertas de Falhas Recorrentes", description: "Flag regression bugs.", icon: "RotateCw", endpoint: "/api/support/recurrence-alert" },
  { id: "eng-integration", name: "Integração com Engenharia", description: "Sync with Jira/GitHub.", icon: "Code", endpoint: "/api/support/eng-integration" },
  { id: "product-feedback", name: "Feedback para Produto", description: "Send insights to PMs.", icon: "MessageCircle", endpoint: "/api/support/product-feedback" },
  { id: "stability-report", name: "Relatório de Estabilidade", description: "Uptime metrics.", icon: "Activity", endpoint: "/api/support/stability-report" },
  { id: "impact-metric", name: "Métrica de Impacto", description: "Measure business impact.", icon: "Target", endpoint: "/api/support/impact-metric" },
];
