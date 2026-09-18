import { ProjectCase } from '../types';

export const projectsData: ProjectCase[] = [
  {
    id: 'grafica-erp',
    title: 'GraficaERP Multi-Tenant',
    category: 'saas',
    categoryLabel: 'SaaS Corporativo',
    description: 'Sistema ERP completo de gestão industrial e comercial gráfica, operando em modelo multi-tenant seguro com faturamento, ordens de serviço e precificação em tempo real.',
    challenge: 'A empresa necessitava substituir um sistema legado lento, descentralizado e com alto índice de erros na precificação de orçamentos complexos.',
    solution: 'Desenvolvemos uma SPA de altíssima performance em Next.js e TypeScript, isolamento de inquilinos com controle RBAC granular, motor de precificação dinâmica instantânea e dashboard executivo.',
    impact: [
      '+400% de velocidade no fechamento de orçamentos',
      'Zero perda de pedidos com sincronização contínua',
      '99.98% de uptime em infraestrutura conteinerizada'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    mockupType: 'dashboard',
    status: 'Em Produção'
  },
  {
    id: 'enterprise-finance',
    title: 'FinTech Intelligence & Analytics',
    category: 'saas',
    categoryLabel: 'Fintech & Analytics',
    description: 'Plataforma analítica e preditiva para conciliação bancária automática, controle de fluxo de caixa multi-empresa e relatórios gerenciais interativos.',
    challenge: 'Processar centenas de milhares de lançamentos financeiros diários com consolidação em tempo real sem degradação visual.',
    solution: 'Implementação de arquitetura reativa com TanStack Query e WebSockets, tabelas virtualizadas com carregamento em milissegundos e gráficos analíticos interativos.',
    impact: [
      'Economia de mais de 35 horas semanais da equipe financeira',
      'Conciliação automatizada de 98% dos extratos bancários',
      'Auditoria completa de logs para conformidade fiscal'
    ],
    techStack: ['TypeScript', 'React.js', 'Tailwind CSS', 'Recharts', 'Prisma ORM'],
    mockupType: 'dashboard',
    status: 'Concluído'
  },
  {
    id: 'barber-ai-service',
    title: 'BarberAI Service & WhatsApp Automation',
    category: 'ai',
    categoryLabel: 'IA & Automação',
    description: 'Agente autônomo baseado em IA integrado ao WhatsApp para agendamentos, pagamentos automáticos via PIX e atendimento humanizado 24 horas por dia.',
    challenge: 'Alto índice de no-shows (faltas), atendimento manual saturado aos finais de semana e perda de clientes fora do horário comercial.',
    solution: 'Agente conversacional com processamento de linguagem natural (LLM) conectado à agenda e ao gateway bancário, enviando lembretes inteligentes e cobrando confirmações.',
    impact: [
      'Redução de 72% nas ausências de clientes com lembretes automáticos',
      'Atendimento instantâneo 24/7 sem necessidade de atendente humano',
      '+35% no faturamento médio mensal das unidades conectadas'
    ],
    techStack: ['Python / Node.js', 'LLM Agent (Gemini/OpenAI)', 'WhatsApp Business API', 'PostgreSQL'],
    mockupType: 'ai-chat',
    status: 'Em Produção'
  },
  {
    id: 'gestao-obras-mobile',
    title: 'Gestão de Obras & Vistorias Mobile',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description: 'Aplicativo móvel para engenheiros e mestres de obras com diário de obra em campo, envio de relatórios fotográficos e sincronização offline-first.',
    challenge: 'Canteiros de obra frequentemente não possuem sinal estável de internet 4G/5G, impossibilitando preenchimento em sistemas web convencionais.',
    solution: 'App nativo em React Native / Expo com banco de dados local SQLite, sincronização em background quando a rede volta e compactação automática de fotos.',
    impact: [
      'Operação 100% contínua mesmo sem sinal de internet',
      'Geração de relatórios de vistoria em PDF direto do celular com 1 clique',
      'Adoção de 100% pelos fiscais de campo pela extrema facilidade de uso'
    ],
    techStack: ['React Native', 'Expo', 'SQLite Offline', 'TypeScript', 'Tailwind'],
    mockupType: 'mobile',
    status: 'Concluído'
  }
];
