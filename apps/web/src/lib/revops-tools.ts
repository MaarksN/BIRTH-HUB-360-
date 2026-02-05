export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const REVOPS_TOOLS: Tool[] = [
  { id: "data-hygiene", name: "Data Hygiene Autopilot", description: "Clean data automatically.", icon: "Sparkles", endpoint: "/api/revops/data-hygiene" },
  { id: "deduplication", name: "Deduplicação Automática", description: "Merge duplicate records.", icon: "Copy", endpoint: "/api/revops/deduplication" },
  { id: "field-normalization", name: "Normalização de Campos", description: "Standardize field formats.", icon: "AlignJustify", endpoint: "/api/revops/field-normalization" },
  { id: "realtime-commission", name: "Cálculo de Comissões Real-time", description: "Track earnings live.", icon: "DollarSign", endpoint: "/api/revops/realtime-commission" },
  { id: "simulate-commission", name: "Simulador de Comissão", description: "Forecast payouts.", icon: "Calculator", endpoint: "/api/revops/simulate-commission" },
  { id: "audit-rules", name: "Auditoria Automática de Regras", description: "Check compliance.", icon: "ShieldCheck", endpoint: "/api/revops/audit-rules" },
  { id: "distribute-leads", name: "Distribuição Meritocrática de Leads", description: "Fair lead assignment.", icon: "Users", endpoint: "/api/revops/distribute-leads" },
  { id: "territory-management", name: "Gestão de Territórios Dinâmica", description: "Optimize territories.", icon: "Map", endpoint: "/api/revops/territory-management" },
  { id: "live-reports", name: "Relatórios Vivos", description: "Real-time dashboards.", icon: "Activity", endpoint: "/api/revops/live-reports" },
  { id: "operational-forecast", name: "Forecast Operacional", description: "Predict operations.", icon: "BarChart", endpoint: "/api/revops/operational-forecast" },
  { id: "crm-integrity", name: "Monitor de Integridade do CRM", description: "Health check your CRM.", icon: "Database", endpoint: "/api/revops/crm-integrity" },
  { id: "broken-data-alerts", name: "Alertas de Dados Quebrados", description: "Spot data issues.", icon: "AlertTriangle", endpoint: "/api/revops/broken-data-alerts" },
  { id: "pipeline-governance", name: "Governança de Pipelines", description: "Enforce process.", icon: "Lock", endpoint: "/api/revops/pipeline-governance" },
  { id: "process-versioning", name: "Controle de Versões de Processos", description: "Track process changes.", icon: "GitBranch", endpoint: "/api/revops/process-versioning" },
  { id: "sla-management", name: "Gestão de SLAs Internos", description: "Monitor internal agreements.", icon: "Clock", endpoint: "/api/revops/sla-management" },
  { id: "efficiency-monitor", name: "Monitor de Eficiência por Etapa", description: "Find funnel bottlenecks.", icon: "TrendingUp", endpoint: "/api/revops/efficiency-monitor" },
  { id: "metric-explainability", name: "Explicabilidade de Métricas", description: "Understand the 'why'.", icon: "HelpCircle", endpoint: "/api/revops/metric-explainability" },
  { id: "permission-management", name: "Gestão de Permissões", description: "Manage access controls.", icon: "Key", endpoint: "/api/revops/permission-management" },
  { id: "change-log", name: "Histórico de Mudanças", description: "Audit trail.", icon: "FileText", endpoint: "/api/revops/change-log" },
  { id: "ops-roi", name: "ROI da Área de Ops", description: "Measure Ops value.", icon: "PieChart", endpoint: "/api/revops/ops-roi" },
];
