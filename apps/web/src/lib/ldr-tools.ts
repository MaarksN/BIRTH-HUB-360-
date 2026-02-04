import { LucideIcon, Search, Database, Shield, BarChart2, Users, FileText, AlertTriangle, RefreshCw } from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string; // Storing icon name as string for now, or could map to component
  endpoint: string;
}

export const LDR_TOOLS: Tool[] = [
  { id: "enrich-cnpj", name: "Enriquecimento Automático de CNPJ", description: "Enrich corporate data from CNPJ.", icon: "Search", endpoint: "/api/ldr/enrich-cnpj" },
  { id: "validate-sources", name: "Validação Cruzada de Fontes", description: "Cross-reference multiple data sources.", icon: "Database", endpoint: "/api/ldr/validate-sources" },
  { id: "data-reliability-score", name: "Score de Confiabilidade de Dados", description: "Calculate confidence score for data.", icon: "BarChart2", endpoint: "/api/ldr/data-reliability-score" },
  { id: "detect-inactive-companies", name: "Detecção de Empresas Inativas", description: "Identify inactive companies.", icon: "AlertTriangle", endpoint: "/api/ldr/detect-inactive-companies" },
  { id: "dynamic-icp", name: "ICP Dinâmico Versionado", description: "Manage dynamic Ideal Customer Profiles.", icon: "Users", endpoint: "/api/ldr/dynamic-icp" },
  { id: "cluster-segments", name: "Clusterização de Segmentos", description: "Cluster market segments using AI.", icon: "PieChart", endpoint: "/api/ldr/cluster-segments" },
  { id: "normalize-cnae", name: "Normalização de CNAE", description: "Standardize CNAE codes.", icon: "FileText", endpoint: "/api/ldr/normalize-cnae" },
  { id: "detect-generic-roles", name: "Detecção de Cargos Genéricos", description: "Flag generic job titles.", icon: "UserMinus", endpoint: "/api/ldr/detect-generic-roles" },
  { id: "auto-update-contacts", name: "Atualização Automática de Contatos", description: "Keep contact info up to date.", icon: "RefreshCw", endpoint: "/api/ldr/auto-update-contacts" },
  { id: "lgpd-guard", name: "LGPD Guard (Compliance)", description: "Ensure data compliance.", icon: "Shield", endpoint: "/api/ldr/lgpd-check" },
  { id: "detect-sensitive-data", name: "Detecção de Dados Sensíveis", description: "Scan for sensitive PII.", icon: "Lock", endpoint: "/api/ldr/detect-sensitive-data" },
  { id: "sales-feedback-loop", name: "Feedback Loop com Vendas", description: "Integrate feedback from sales team.", icon: "MessageCircle", endpoint: "/api/ldr/sales-feedback-loop" },
  { id: "analyze-list-quality", name: "Análise de Qualidade por Lista", description: "Analyze lead list quality.", icon: "ClipboardCheck", endpoint: "/api/ldr/analyze-list-quality" },
  { id: "rank-lists", name: "Ranking de Listas por Conversão", description: "Rank lists by conversion rates.", icon: "TrendingUp", endpoint: "/api/ldr/rank-lists" },
  { id: "intelligence-history", name: "Histórico de Inteligência", description: "View history of intelligence actions.", icon: "History", endpoint: "/api/ldr/intelligence-history" },
  { id: "detect-duplicates", name: "Detecção de Duplicidade", description: "Find and merge duplicates.", icon: "Copy", endpoint: "/api/ldr/detect-duplicates" },
  { id: "monitor-turnover", name: "Monitor de Turnover Executivo", description: "Track executive changes.", icon: "UserX", endpoint: "/api/ldr/monitor-turnover" },
  { id: "suggest-niches", name: "Sugestão de Novos Nichos", description: "AI suggestions for new markets.", icon: "Lightbulb", endpoint: "/api/ldr/suggest-niches" },
  { id: "data-degradation-alerts", name: "Alertas de Degradação de Dados", description: "Alerts for decaying data.", icon: "Bell", endpoint: "/api/ldr/data-degradation-alerts" },
  { id: "impact-report", name: "Relatório de Impacto de Inteligência", description: "Report on intelligence ROI.", icon: "FileBarChart", endpoint: "/api/ldr/impact-report" },
];
