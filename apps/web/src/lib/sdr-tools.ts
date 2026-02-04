export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const SDR_TOOLS: Tool[] = [
  { id: "lead-scoring", name: "Lead Scoring Comportamental", description: "Score leads based on behavior.", icon: "Target", endpoint: "/api/sdr/lead-scoring" },
  { id: "realtime-score", name: "Score em Tempo Real", description: "Live tracking of lead scores.", icon: "Activity", endpoint: "/api/sdr/realtime-score" },
  { id: "fast-track", name: "Fast Track Automático", description: "Route hot leads instantly.", icon: "Zap", endpoint: "/api/sdr/fast-track" },
  { id: "generate-cadence", name: "Cadência Multicanal Inteligente", description: "Create multi-channel sequences.", icon: "List", endpoint: "/api/sdr/generate-cadence" },
  { id: "buying-intent-detection", name: "Detecção de Intenção de Compra", description: "Analyze buying signals.", icon: "Eye", endpoint: "/api/sdr/buying-intent-detection" },
  { id: "objection-handling", name: "Copiloto de Objeções (Live)", description: "Real-time objection handling.", icon: "MessageCircle", endpoint: "/api/sdr/objection-handling" },
  { id: "dynamic-script", name: "Script Dinâmico por Lead", description: "Personalized call scripts.", icon: "FileText", endpoint: "/api/sdr/dynamic-script" },
  { id: "best-time-to-contact", name: "Detecção de Momento Ideal", description: "Optimal contact times.", icon: "Clock", endpoint: "/api/sdr/best-time-to-contact" },
  { id: "schedule-followup", name: "Gestão Automática de Follow-ups", description: "Automated follow-up scheduling.", icon: "Calendar", endpoint: "/api/sdr/schedule-followup" },
  { id: "ghosting-prevention", name: "Prevenção de Ghosting", description: "Re-engage silent leads.", icon: "Ghost", endpoint: "/api/sdr/ghosting-prevention" },
  { id: "auto-classify", name: "Classificação Automática", description: "Auto-categorize leads.", icon: "Tag", endpoint: "/api/sdr/auto-classify" },
  { id: "prioritize-agenda", name: "Priorização de Agenda", description: "Smart agenda management.", icon: "CheckSquare", endpoint: "/api/sdr/prioritize-agenda" },
  { id: "predict-no-show", name: "No-Show Predictor", description: "Predict meeting no-shows.", icon: "UserMinus", endpoint: "/api/sdr/predict-no-show" },
  { id: "auto-confirm-meeting", name: "Confirmação Automática de Reunião", description: "Automated confirmations.", icon: "CheckCircle", endpoint: "/api/sdr/auto-confirm-meeting" },
  { id: "handoff-ae", name: "Handoff Inteligente para AE", description: "Seamless transition to AE.", icon: "ArrowRight", endpoint: "/api/sdr/handoff-ae" },
  { id: "qualification-summary", name: "Resumo Automático de Qualificação", description: "AI qualification summaries.", icon: "FileText", endpoint: "/api/sdr/qualification-summary" },
  { id: "crm-sync", name: "Registro Automático no CRM", description: "Sync data to CRM.", icon: "Database", endpoint: "/api/sdr/crm-sync" },
  { id: "performance-analysis", name: "Análise de Performance Individual", description: "Track SDR metrics.", icon: "BarChart", endpoint: "/api/sdr/performance-analysis" },
  { id: "improve-approach", name: "Sugestão de Melhoria de Abordagem", description: "Coaching for improvement.", icon: "TrendingUp", endpoint: "/api/sdr/improve-approach" },
  { id: "lead-quality-report", name: "Relatório de Qualidade de Leads", description: "Analyze lead sources.", icon: "PieChart", endpoint: "/api/sdr/lead-quality-report" },
];
