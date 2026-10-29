import { learningContent } from "../data/learning";
import type { LayerId, ProjectId } from "../data/learning";
import TechnologyIcon from "./TechnologyIcon";
import "./LayerDiagram.css";

type LayerDiagramProps = {
  project: ProjectId;
  layer: LayerId;
};

type DiagramContent = {
  interface: {
    title: string;
    areas: [string, string];
  };

  api: {
    title: string;
    steps: [
      { label: string; description: string },
      { label: string; description: string },
    ];
  };

  data: {
    rows: { name: string; description: string }[];
  };
};

const diagrams: Record<ProjectId, DiagramContent> = {
  domu: {
    interface: {
      title: "Interface da aplicação",
      areas: ["Construção das telas", "Conexão com os serviços"],
    },
    api: {
      title: "Integração de pagamentos",
      steps: [
        {
          label: "Recebimento",
          description: "Evento de pagamento via webhook",
        },
        {
          label: "Tratamento",
          description: "Lógica para lidar com o evento recebido",
        },
      ],
    },
    data: {
      rows: [
        { name: "Supabase", description: "Acesso pelo painel" },
        { name: "Consultas", description: "Pesquisa das informações" },
        { name: "Alterações", description: "Atualização dos dados" },
      ],
    },
  },

  "sistema-bar": {
    interface: {
      title: "Painel administrativo",
      areas: ["Produtos e preços", "Integração com o cardápio"],
    },
    api: {
      title: "Integração com impressão",
      steps: [
        {
          label: "Aplicação",
          description: "Comunicação com a integração de impressão",
        },
        {
          label: "Atendimento",
          description: "Impressão automática na operação",
        },
      ],
    },
    data: {
      rows: [
        { name: "PostgreSQL", description: "Armazenamento dos dados" },
        { name: "Prisma", description: "Acesso pela aplicação" },
        { name: "Conferência", description: "Verificação das informações" },
      ],
    },
  },
};

export default function LayerDiagram({ project, layer }: LayerDiagramProps) {
  const diagram = diagrams[project];
  const technologies = learningContent[project][layer].technologies;

  const technologyNames = (
    <span className="diagram-technologies">
      {technologies.map((technology) => (
        <span key={technology} className="diagram-technology">
          <span className="diagram-logo">
            <TechnologyIcon name={technology} />
          </span>

          <span className="diagram-technology-name">{technology}</span>
        </span>
      ))}
    </span>
  );

  if (layer === "interface") {
    return (
      <span className="layer-diagram diagram-interface">
        <span className="diagram-sidebar">
          <span className="diagram-caption">Stack</span>
          {technologyNames}
        </span>

        <span className="diagram-window-title">{diagram.interface.title}</span>

        {diagram.interface.areas.map((area) => (
          <span className="diagram-panel" key={area}>
            <span className="diagram-panel-mark" aria-hidden="true" />
            <span>{area}</span>
          </span>
        ))}
      </span>
    );
  }

  if (layer === "api") {
    return (
      <span className="layer-diagram diagram-api">
        {technologyNames}

        <span className="diagram-caption diagram-detail">
          {diagram.api.title}
        </span>

        <span className="diagram-flow">
          {diagram.api.steps.map((step, index) => (
            <span className="diagram-flow-step" key={step.label}>
              {index > 0 && (
                <span className="diagram-connector" aria-hidden="true">
                  ↓
                </span>
              )}

              <span className="diagram-node">
                <span className="diagram-node-label">
                  <span className="diagram-dot" aria-hidden="true" />
                  {step.label}
                </span>

                <span className="diagram-detail">{step.description}</span>
              </span>
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span className="layer-diagram diagram-data">
      {technologyNames}

      <span className="diagram-table">
        <span className="diagram-row diagram-table-heading">
          <span>Recurso</span>
          <span>Aplicação</span>
        </span>

        {diagram.data.rows.map((row) => (
          <span className="diagram-row" key={row.name}>
            <span className="diagram-field">{row.name}</span>
            <span>{row.description}</span>
          </span>
        ))}
      </span>
    </span>
  );
}
