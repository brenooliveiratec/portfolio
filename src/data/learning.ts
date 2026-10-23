export type ProjectId = "domu" | "sistema-bar";
export type LayerId = "interface" | "api" | "data";

type LearningEntry = {
  technologies: string[];
  application: string;
  learning: string;
};

export const learningContent: Record<
  ProjectId,
  Record<LayerId, LearningEntry>
> = {
  domu: {
    interface: {
      technologies: ["React", "TypeScript"],
      application:
        "Construção da interface do meu primeiro sistema e sua comunicação com os serviços da aplicação.",
      learning:
        "Comecei a compreender o caminho entre a interação na tela, a requisição e a apresentação dos dados.",
    },
    api: {
      technologies: ["Node.js", "TypeScript", "APIs REST", "Webhooks"],
      application:
        "Integração de pagamentos, com o desafio de tratar os eventos recebidos por webhook.",
      learning:
        "Passei a entender conceitos de APIs REST, requisições HTTP e métodos como GET durante a construção do projeto.",
    },
    data: {
      technologies: ["Supabase"],
      application:
        "Consultas e alterações no banco pelo painel do Supabase durante o desenvolvimento.",
      learning:
        "Tive meu primeiro contato mais próximo com os dados e comecei a compreender sua conexão com a API e a interface.",
    },
  },

  "sistema-bar": {
    interface: {
      technologies: ["React", "React Router", "TypeScript"],
      application:
        "Desenvolvimento do painel administrativo conectado ao cardápio, com configuração de produtos e edição de preços.",
      learning:
        "Avancei na integração entre as telas e na verificação de como as alterações do administrador chegavam ao restante do sistema.",
    },
    api: {
      technologies: ["Node.js", "TypeScript"],
      application:
        "Integração com impressão automática e comunicação entre a aplicação e o banco de dados.",
      learning:
        "Aprofundei meu entendimento das APIs e fiz diversos testes para acompanhar o fluxo e conferir o funcionamento das integrações.",
    },
    data: {
      technologies: ["PostgreSQL", "Prisma"],
      application:
        "Uso do banco com Prisma e conferência das informações utilizadas pelo sistema.",
      learning:
        "Ampliei meu entendimento de banco de dados e do papel do Prisma na comunicação da aplicação com os dados.",
    },
  },
};
