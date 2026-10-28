export type Technology = {
  name: string;
  description: string;
};

export type TechnologyGroup = {
  id: string;
  title: string;
  items: [Technology, ...Technology[]];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    title: "Front-end",
    items: [
      {
        name: "React",
        description:
          "Construção das interfaces dos meus projetos e conexão das telas com os serviços da aplicação.",
      },
      {
        name: "React Router",
        description: "Organização da navegação entre as telas do Sistema Bar.",
      },
      {
        name: "TypeScript",
        description:
          "Uso de tipos para descrever os dados e deixar mais claras as informações que circulam pelo código.",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-end e integrações",
    items: [
      {
        name: "Java",
        description:
          "Foco dos meus estudos na faculdade e da carreira que quero construir em back-end. Estou desenvolvendo minha base na linguagem e aprofundando esse conhecimento na prática.",
      },
      {
        name: "Node.js",
        description:
          "Desenvolvimento do lado do servidor e das integrações utilizadas nos meus projetos.",
      },
      {
        name: "APIs REST",
        description:
          "Contato com requisições HTTP e com a comunicação entre interface, serviços e dados.",
      },
      {
        name: "Webhooks",
        description:
          "Recebimento de eventos na integração de pagamentos do DOMU.",
      },
    ],
  },
  {
    id: "database",
    title: "Banco de dados e acesso",
    items: [
      {
        name: "PostgreSQL",
        description:
          "Armazenamento e conferência das informações utilizadas pelo Sistema Bar.",
      },
      {
        name: "Supabase",
        description:
          "Consultas e alterações pelo painel durante o desenvolvimento do DOMU.",
      },
      {
        name: "Prisma",
        description:
          "Acesso aos dados pela aplicação e aprendizado sobre a comunicação com o banco.",
      },
    ],
  },
  {
    id: "tools",
    title: "Ambiente e ferramentas",
    items: [
      {
        name: "Docker",
        description:
          "Meu contato com ambientes em contêineres começou durante o desenvolvimento do Sistema Bar.",
      },
      {
        name: "Git",
        description:
          "Versionamento do código e organização das mudanças durante o desenvolvimento.",
      },
      {
        name: "GitHub",
        description:
          "Organização dos repositórios e compartilhamento do código dos projetos.",
      },
    ],
  },
];
