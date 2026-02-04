export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const AE_TOOLS: Tool[] = [
  { id: "meeting-assistant", name: "Assistente de Reunião Inteligente", description: "AI notes and transcriptions.", icon: "Mic", endpoint: "/api/ae/meeting-assistant" },
  { id: "meddic-coach", name: "MEDDIC Coach Real-time", description: "Live coaching on MEDDIC methodology.", icon: "GraduationCap", endpoint: "/api/ae/meddic-coach" },
  { id: "speech-dominance", name: "Detecção de Dominância de Fala", description: "Analyze speaking ratios.", icon: "Volume2", endpoint: "/api/ae/speech-dominance" },
  { id: "engagement-analysis", name: "Análise de Engajamento", description: "Track prospect engagement.", icon: "Activity", endpoint: "/api/ae/engagement-analysis" },
  { id: "generate-proposal", name: "Gerador de Propostas Dinâmicas", description: "Create tailored proposals.", icon: "FileText", endpoint: "/api/ae/generate-proposal" },
  { id: "auto-pricing", name: "Precificação Automática Validada", description: "Calculate optimal pricing.", icon: "DollarSign", endpoint: "/api/ae/auto-pricing" },
  { id: "discount-approval", name: "Gestão de Descontos (Regras)", description: "Automated discount approvals.", icon: "Percent", endpoint: "/api/ae/discount-approval" },
  { id: "track-stakeholders", name: "Stakeholder Tracking", description: "Track key decision makers.", icon: "Users", endpoint: "/api/ae/track-stakeholders" },
  { id: "churn-risk", name: "Detecção de Risco de Perda", description: "Identify at-risk deals.", icon: "AlertTriangle", endpoint: "/api/ae/churn-risk" },
  { id: "predict-close", name: "Análise Preditiva de Fechamento", description: "Predict closing probability.", icon: "TrendingUp", endpoint: "/api/ae/predict-close" },
  { id: "forecast-deal", name: "Forecast Probabilístico", description: "Deal-level forecasting.", icon: "BarChart2", endpoint: "/api/ae/forecast-deal" },
  { id: "generate-followup", name: "Gerador de Follow-up Contextual", description: "Smart follow-up emails.", icon: "Mail", endpoint: "/api/ae/generate-followup" },
  { id: "competitor-battle", name: "Comparador com Concorrentes", description: "Competitive battle cards.", icon: "Swords", endpoint: "/api/ae/competitor-battle" },
  { id: "log-call", name: "Registro Automático de Calls", description: "Auto-log calls to CRM.", icon: "Phone", endpoint: "/api/ae/log-call" },
  { id: "extract-next-steps", name: "Extração de Próximos Passos", description: "Identify action items.", icon: "List", endpoint: "/api/ae/extract-next-steps" },
  { id: "stagnation-alert", name: "Alertas de Estagnação", description: "Alert on stalled deals.", icon: "Clock", endpoint: "/api/ae/stagnation-alert" },
  { id: "simulate-deal", name: "Simulador de Cenários do Deal", description: "Simulate deal outcomes.", icon: "PlayCircle", endpoint: "/api/ae/simulate-deal" },
  { id: "win-loss-analysis", name: "Análise de Win/Loss", description: "Understand deal outcomes.", icon: "PieChart", endpoint: "/api/ae/win-loss-analysis" },
  { id: "clean-pipeline", name: "Limpeza Automática de Pipeline", description: "Keep pipeline healthy.", icon: "Trash2", endpoint: "/api/ae/clean-pipeline" },
  { id: "predictability-report", name: "Relatório de Previsibilidade", description: "Forecast accuracy report.", icon: "ClipboardCheck", endpoint: "/api/ae/predictability-report" },
];
