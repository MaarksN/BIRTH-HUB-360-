export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const ONBOARDING_TOOLS: Tool[] = [
  { id: "sales-dossier", name: "Dossiê Real da Venda", description: "Transfer context from sales.", icon: "Folder", endpoint: "/api/onboarding/sales-dossier" },
  { id: "smart-checklist", name: "Checklist Inteligente por Cliente", description: "Dynamic onboarding checklist.", icon: "CheckSquare", endpoint: "/api/onboarding/smart-checklist" },
  { id: "validate-prerequisites", name: "Validação Automática de Pré-requisitos", description: "Ensure customer is ready.", icon: "CheckCircle", endpoint: "/api/onboarding/validate-prerequisites" },
  { id: "delay-risk", name: "Detecção de Risco de Atraso", description: "Identify potential delays.", icon: "AlertTriangle", endpoint: "/api/onboarding/delay-risk" },
  { id: "manage-tasks", name: "Gestão Automática de Tarefas", description: "Auto-assign onboarding tasks.", icon: "List", endpoint: "/api/onboarding/manage-tasks" },
  { id: "assisted-integration", name: "Integração Assistida", description: "Guide technical integration.", icon: "Link", endpoint: "/api/onboarding/assisted-integration" },
  { id: "validate-migration", name: "Validação de Migração de Dados", description: "Check data integrity.", icon: "Database", endpoint: "/api/onboarding/validate-migration" },
  { id: "dynamic-playbooks", name: "Playbooks Dinâmicos", description: "Segment-specific playbooks.", icon: "BookOpen", endpoint: "/api/onboarding/dynamic-playbooks" },
  { id: "time-to-value", name: "Monitor de Time-to-Value", description: "Track TTV metrics.", icon: "Clock", endpoint: "/api/onboarding/time-to-value" },
  { id: "overpromising-alert", name: "Alerta de Overpromising", description: "Flag sales overpromises.", icon: "Flag", endpoint: "/api/onboarding/overpromising-alert" },
  { id: "deployment-history", name: "Histórico de Implantação", description: "Log deployment steps.", icon: "History", endpoint: "/api/onboarding/deployment-history" },
  { id: "tech-decisions-log", name: "Registro de Decisões Técnicas", description: "Document technical choices.", icon: "FileText", endpoint: "/api/onboarding/tech-decisions-log" },
  { id: "cs-comms", name: "Comunicação Automática com CS", description: "Update CS on progress.", icon: "MessageSquare", endpoint: "/api/onboarding/cs-comms" },
  { id: "readiness-assessment", name: "Avaliação de Prontidão", description: "Is customer ready to launch?", icon: "ClipboardCheck", endpoint: "/api/onboarding/readiness-assessment" },
  { id: "golive-gatekeeper", name: "Go-live Gatekeeper", description: "Final check before launch.", icon: "ShieldCheck", endpoint: "/api/onboarding/golive-gatekeeper" },
  { id: "activation-report", name: "Relatório de Ativação", description: "Post-onboarding report.", icon: "FileBarChart", endpoint: "/api/onboarding/activation-report" },
  { id: "initial-churn-prediction", name: "Previsão de Churn Inicial", description: "Early churn warning.", icon: "TrendingDown", endpoint: "/api/onboarding/initial-churn-prediction" },
  { id: "transition-checklist", name: "Checklist de Transição", description: "Handoff to CS.", icon: "ArrowRight", endpoint: "/api/onboarding/transition-checklist" },
  { id: "sales-feedback", name: "Feedback Automático para Vendas", description: "Improve sales alignment.", icon: "RefreshCw", endpoint: "/api/onboarding/sales-feedback" },
  { id: "quality-metrics", name: "Métrica de Qualidade de Onboarding", description: "Score onboarding success.", icon: "Star", endpoint: "/api/onboarding/quality-metrics" },
];
