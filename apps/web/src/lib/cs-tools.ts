export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const CS_TOOLS: Tool[] = [
  { id: "health-score", name: "Health Score AI", description: "Monitor customer health.", icon: "Activity", endpoint: "/api/cs/health-score" },
  { id: "silent-churn", name: "Detector de Churn Silencioso", description: "Identify hidden churn risk.", icon: "Ghost", endpoint: "/api/cs/silent-churn" },
  { id: "feature-adoption", name: "Monitor de Adoção de Features", description: "Track product usage.", icon: "BarChart", endpoint: "/api/cs/feature-adoption" },
  { id: "sentiment-analysis", name: "Análise de Sentimento em Tickets", description: "Gauge customer mood.", icon: "Smile", endpoint: "/api/cs/sentiment-analysis" },
  { id: "financial-score", name: "Score Financeiro do Cliente", description: "Assess payment health.", icon: "DollarSign", endpoint: "/api/cs/financial-score" },
  { id: "risk-alerts", name: "Alertas Proativos de Risco", description: "Early warning system.", icon: "AlertTriangle", endpoint: "/api/cs/risk-alerts" },
  { id: "whitespace-detector", name: "White Space Detector (Upsell)", description: "Find expansion room.", icon: "Maximize", endpoint: "/api/cs/whitespace-detector" },
  { id: "upsell-suggestion", name: "Sugestão de Upsell Contextual", description: "Recommend upgrades.", icon: "Gift", endpoint: "/api/cs/upsell-suggestion" },
  { id: "auto-qbr", name: "QBR Automático", description: "Generate QBR reports.", icon: "FileText", endpoint: "/api/cs/auto-qbr" },
  { id: "value-history", name: "Histórico de Valor Entregue", description: "Track ROI delivery.", icon: "TrendingUp", endpoint: "/api/cs/value-history" },
  { id: "stakeholder-change", name: "Detecção de Troca de Stakeholders", description: "Monitor champion turnover.", icon: "Users", endpoint: "/api/cs/stakeholder-change" },
  { id: "success-plan-manager", name: "Gestão de Plano de Sucesso", description: "Track joint goals.", icon: "Target", endpoint: "/api/cs/success-plan-manager" },
  { id: "portfolio-prioritization", name: "Priorização Automática de Carteira", description: "Who to call next.", icon: "List", endpoint: "/api/cs/portfolio-prioritization" },
  { id: "ltv-segmentation", name: "Segmentação por LTV", description: "Group by value.", icon: "PieChart", endpoint: "/api/cs/ltv-segmentation" },
  { id: "renewal-forecast", name: "Previsão de Renovação", description: "Forecast renewal rates.", icon: "RefreshCw", endpoint: "/api/cs/renewal-forecast" },
  { id: "churn-impact", name: "Simulador de Impacto de Churn", description: "Calculate revenue loss.", icon: "Calculator", endpoint: "/api/cs/churn-impact" },
  { id: "scope-manager", name: "Gestão de Limites de Escopo", description: "Prevent scope creep.", icon: "Shield", endpoint: "/api/cs/scope-manager" },
  { id: "commitment-log", name: "Registro de Compromissos", description: "Track promises made.", icon: "Book", endpoint: "/api/cs/commitment-log" },
  { id: "expansion-report", name: "Relatório de Expansão", description: "Track upsell metrics.", icon: "BarChart2", endpoint: "/api/cs/expansion-report" },
  { id: "value-metric", name: "Métrica de Valor por Cliente", description: "Quantify customer value.", icon: "Award", endpoint: "/api/cs/value-metric" },
];
