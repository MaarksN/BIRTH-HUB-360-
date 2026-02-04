export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  endpoint: string;
}

export const BDR_TOOLS: Tool[] = [
  { id: "map-buying-committee", name: "Mapeamento de Buying Committee", description: "Map key decision makers.", icon: "Users", endpoint: "/api/bdr/map-buying-committee" },
  { id: "org-chart", name: "Organograma Visual da Conta", description: "Visualize account hierarchy.", icon: "GitGraph", endpoint: "/api/bdr/org-chart" },
  { id: "deep-search-contact", name: "Deep Search de Contatos", description: "In-depth contact research.", icon: "Search", endpoint: "/api/bdr/deep-search-contact" },
  { id: "validate-email", name: "Validação de E-mail Real-time", description: "Verify email deliverability.", icon: "CheckCircle", endpoint: "/api/bdr/validate-email" },
  { id: "find-mobile-number", name: "Descoberta de Celulares Diretos", description: "Find direct phone numbers.", icon: "Phone", endpoint: "/api/bdr/find-mobile-number" },
  { id: "trigger-events", name: "Trigger Events de Mercado", description: "Track market signals.", icon: "Zap", endpoint: "/api/bdr/trigger-events" },
  { id: "buying-intent", name: "Detecção de Timing de Compra", description: "Score buying intent.", icon: "Clock", endpoint: "/api/bdr/buying-intent" },
  { id: "generate-script", name: "Scripts Outbound Contextuais", description: "Generate context-aware scripts.", icon: "FileText", endpoint: "/api/bdr/generate-script" },
  { id: "generate-message", name: "Gerador de Mensagens Personalizadas", description: "Write personalized messages.", icon: "MessageSquare", endpoint: "/api/bdr/generate-message" },
  { id: "battlecard", name: "Battlecards Automáticos", description: "Competitive intelligence cards.", icon: "Swords", endpoint: "/api/bdr/battlecard" },
  { id: "tech-stack", name: "Identificação de Stack Tecnológico", description: "Detect used technologies.", icon: "Code", endpoint: "/api/bdr/tech-stack" },
  { id: "competitor-analysis", name: "Análise de Concorrentes Instalados", description: "Analyze competitor presence.", icon: "Crosshair", endpoint: "/api/bdr/competitor-analysis" },
  { id: "account-history", name: "Registro Histórico por Conta", description: "View account timeline.", icon: "History", endpoint: "/api/bdr/account-history" },
  { id: "maturity-score", name: "Score de Maturidade da Conta", description: "Calculate account maturity.", icon: "BarChart", endpoint: "/api/bdr/maturity-score" },
  { id: "generate-account-plan", name: "Planejador de Entrada (Account Plan)", description: "Create account entry strategy.", icon: "Map", endpoint: "/api/bdr/generate-account-plan" },
  { id: "generate-sequence", name: "Sequência Outbound Inteligente", description: "Design outreach sequences.", icon: "List", endpoint: "/api/bdr/generate-sequence" },
  { id: "prioritize-accounts", name: "Priorização Automática de Contas", description: "Rank target accounts.", icon: "TrendingUp", endpoint: "/api/bdr/prioritize-accounts" },
  { id: "detect-blockers", name: "Detecção de Bloqueadores", description: "Identify potential blockers.", icon: "ShieldAlert", endpoint: "/api/bdr/detect-blockers" },
  { id: "attribute-influence", name: "Atribuição de Influência", description: "Map stakeholder influence.", icon: "UserCheck", endpoint: "/api/bdr/attribute-influence" },
  { id: "outbound-report", name: "Relatório de Eficiência Outbound", description: "Analyze outbound performance.", icon: "PieChart", endpoint: "/api/bdr/outbound-report" },
];
