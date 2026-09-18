import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'saas-platforms',
    title: 'Plataformas Web & SaaS Corporativos',
    tagline: 'Aplicações web escaláveis com arquitetura multi-tenant e alta disponibilidade.',
    description: 'Projetamos e construímos softwares como serviço (SaaS) completos, desde portais administrativos complexos até painéis analíticos em tempo real, com controle de acesso granular (RBAC), faturamento recorrente e integrações avançadas.',
    iconName: 'LayoutGrid',
    badge: 'Mais Procurado',
    features: [
      'Arquitetura Multi-Tenant isolada e segura',
      'Dashboards analíticos interativos de alta fidelidade',
      'Integração com gateways (Stripe, Asaas, Mercado Pago)',
      'Controle granular de permissões e perfis de usuários (RBAC)',
      'Otimização extrema para SEO e Core Web Vitals'
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    deliverables: ['Código-fonte com 100% de propriedade', 'Pipeline CI/CD configurada', 'Documentação de APIs']
  },
  {
    id: 'mobile-apps',
    title: 'Aplicativos Mobile Nativos (iOS & Android)',
    tagline: 'Experiências móveis fluidas, rápidas e com padrão visual de classe mundial.',
    description: 'Desenvolvemos apps móveis corporativos e de consumo em React Native / Expo, garantindo máxima performance, suporte offline-first, integração com recursos nativos do aparelho (câmera, biometria, GPS, push notifications) e publicação nas lojas.',
    iconName: 'Smartphone',
    badge: 'Alta Performance',
    features: [
      'Base única de código para iOS e Android com performance nativa',
      'Sincronização de dados offline-first com cache inteligente',
      'Integração completa com biometria, câmera e push notifications',
      'Acompanhamento e homologação na Apple App Store & Google Play',
      'Design adaptativo e responsivo para tablets e smartphones'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Native APIs'],
    deliverables: ['Builds de produção assinados', 'Configuração nas lojas Apple/Google', 'Monitoramento Sentry']
  },
  {
    id: 'ai-solutions',
    title: 'Inteligência Artificial & Automação Inteligente',
    tagline: 'Potencialize suas operações com agentes autônomos e modelos de linguagem de ponta.',
    description: 'Integramos modelos de linguagem avançados (OpenAI, Anthropic Claude, Google Gemini) aos processos da sua empresa. Desenvolvemos agentes autônomos de atendimento, assistentes de triagem, análise preditiva e automações de fluxos com IA generativa.',
    iconName: 'Cpu',
    badge: 'Tecnologia Exclusiva',
    features: [
      'Agentes autônomos integrados a WhatsApp e sistemas ERP',
      'RAG (Retrieval-Augmented Generation) sobre dados privados e bases de conhecimento',
      'Extração inteligente de dados em documentos e notas fiscais',
      'Pipelines de automação com LLMs para redução de custos operacionais',
      'Segurança e privacidade de dados com conformidade LGPD'
    ],
    techStack: ['OpenAI / Gemini APIs', 'LangChain', 'Python', 'Vector DBs (pgvector)', 'FastAPI'],
    deliverables: ['Agente homologado e calibrado', 'Banco vetorial indexado', 'Dashboard de consumo de tokens']
  },
  {
    id: 'backend-apis',
    title: 'Engenharia de Backend & Microsserviços',
    tagline: 'Sistemas resilientes, APIs de baixa latência e modelagem robusta de dados.',
    description: 'Criamos a espinha dorsal de sistemas críticos com APIs RESTful e GraphQL, arquiteturas orientadas a eventos, filas de processamento assíncrono (Redis/BullMQ) e bancos de dados relacionais e NoSQL de alta performance.',
    iconName: 'Database',
    badge: 'Missão Crítica',
    features: [
      'APIs RESTful e GraphQL documentadas via Swagger/OpenAPI',
      'Processamento assíncrono e mensageria de alta vazão com Redis',
      'Modelagem relacional otimizada e índices de alto desempenho',
      'Autenticação corporativa com JWT, OAuth2, 2FA e Sessions seguras',
      'Auditoria de logs, rate limiting e defesa contra ataques comuns (OWASP)'
    ],
    techStack: ['Node.js', 'NestJS', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Redis'],
    deliverables: ['Documentação Swagger interativa', 'Testes automatizados unitários/e2e', 'Scripts de migração']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Modernização de Sistemas',
    tagline: 'Infraestrutura moderna conteinerizada, observabilidade e zero downtime.',
    description: 'Migramos sistemas legados para arquiteturas modernas na nuvem (AWS, GCP, DigitalOcean), implementamos containers Docker, orquestração, pipelines de deploy contínuo (CI/CD) e monitoramento proativo para eliminar gargalos e instabilidades.',
    iconName: 'Cloud',
    badge: 'Escalabilidade',
    features: [
      'Conteinerização com Docker e ambientes isolados de teste e produção',
      'Pipelines automatizados de CI/CD com GitHub Actions',
      'Arquitetura em nuvem (AWS S3, CloudFront, ECS, RDS)',
      'Observabilidade avançada com métricas, alertas e rastreamento de erros',
      'Estratégias de backup automático e recuperação de desastres'
    ],
    techStack: ['Docker', 'AWS', 'GitHub Actions', 'Cloudflare', 'Linux / NGINX'],
    deliverables: ['Ambiente em nuvem configurado', 'Scripts de automação IaC', 'Manual de operação']
  },
  {
    id: 'ui-ux-design',
    title: 'Design de Produto Digital (UI / UX)',
    tagline: 'Interfaces elegantes, intuitivas e projetadas matematicamente para conversão.',
    description: 'Transformamos ideias brutas em interfaces encantadoras e funcionais. Criamos protótipos de alta fidelidade no Figma com Design Systems padronizados, arquitetura da informação centrada no usuário e hand-off técnico impecável para desenvolvimento.',
    iconName: 'Sparkles',
    badge: 'Design System',
    features: [
      'Pesquisa de usuário, mapeamento de jornadas e wireframes interativos',
      'Design Systems completos com componentes reutilizáveis e tokens',
      'Prototipagem interativa navegável no Figma para validação pré-código',
      'Conformidade com padrões modernos de acessibilidade (WCAG)',
      'Design mobile-first com transições e microinterações pensadas para engajamento'
    ],
    techStack: ['Figma', 'Design Tokens', 'Tailwind Guidelines', 'Component Driven Dev'],
    deliverables: ['Arquivo Figma completo editável', 'Design System documentado', 'Assets exportados']
  }
];
