import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    category: 'contratacao',
    question: 'O código-fonte e a propriedade intelectual serão 100% da minha empresa?',
    answer: 'Sim, com certeza! Na Eliora Software prezamos pela total transparência. Todo o código-fonte, repositórios, documentação de arquitetura, banco de dados e ativos desenvolvidos durante o projeto são de sua exclusiva propriedade intelectual, sem taxas de licenciamento ocultas ou "aprisionamento tecnológico" (vendor lock-in).'
  },
  {
    category: 'seguranca',
    question: 'Vocês assinam Acordo de Confidencialidade (NDA) antes de eu compartilhar minha ideia ou regras de negócio?',
    answer: 'Absolutamente. Resguardar o segredo comercial e a propriedade intelectual da sua empresa é nossa prioridade número um. Assinamos um Acordo de Não Divulgação (NDA) com validade jurídica antes mesmo de você detalhar os segredos e requisitos do projeto.'
  },
  {
    category: 'prazos',
    question: 'Quanto tempo leva para desenvolver e colocar um projeto no ar?',
    answer: 'O prazo varia de acordo com o escopo e complexidade: MVPs (produtos mínimos viáveis) e landing pages de alta conversão costumam ser entregues entre 2 a 4 semanas. Já plataformas corporativas completas, SaaS multi-tenant ou aplicativos com IA integrada geralmente levam de 6 a 12 semanas. Trabalhamos com metodologia ágil (sprints semanais), portanto você vê e testa o produto evoluindo a cada 7 dias.'
  },
  {
    category: 'contratacao',
    question: 'Como funcionam os modelos de contratação e pagamento?',
    answer: 'Atuamos com dois modelos transparentes: 1) Escopo Fechado (valor fixo parcelado por marcos de entrega aprovados por você) ou 2) Squad / Dedicação Contínua (desenvolvimento ágil sob demanda para evolução contínua de produtos). O pagamento pode ser realizado via faturamento corporativo, PIX ou boleto com emissão de nota fiscal.'
  },
  {
    category: 'tecnico',
    question: 'Vocês oferecem garantia, suporte e manutenção após o lançamento?',
    answer: 'Sim! Todos os nossos projetos contam com garantia legal contra bugs e período de homologação assistida. Além disso, disponibilizamos planos de suporte contínuo (SLA), evolução de funcionalidades, monitoramento de infraestrutura em nuvem e backups automatizados para que sua operação nunca pare.'
  },
  {
    category: 'tecnico',
    question: 'E se a minha empresa já tiver um sistema legado ou banco de dados antigo?',
    answer: 'Temos ampla experiência em modernização de sistemas legados e migração de dados. Conseguimos criar camadas de API modernas sobre seu banco de dados atual, refatorar a interface para React/Next.js de forma gradual (sem paralisar a empresa) ou planejar a migração segura para uma nova arquitetura em nuvem.'
  }
];
