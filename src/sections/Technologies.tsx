import { useState } from "react";
import TechnologyIcon from "../components/TechnologyIcon";
import { technologyGroups } from "../data/technologies";
import type { TechnologyGroup } from "../data/technologies";
import { useHeroProgress } from "../hooks/useHeroProgress";
import "./Technologies.css";

type TechnologyCardProps = {
  group: TechnologyGroup;
  index: number;
};

function TechnologyCard({ group, index }: TechnologyCardProps) {
  const [selected, setSelected] = useState(group.items[0]);

  const titleId = `technology-title-${group.id}`;
  const detailId = `technology-detail-${group.id}`;

  return (
    <article className="technology-card" aria-labelledby={titleId}>
      <div className="technology-card-heading">
        <span className="technology-card-number" aria-hidden="true">
          0{index + 1}
        </span>

        <h3 id={titleId}>{group.title}</h3>
      </div>

      <div
        className="technology-list"
        role="group"
        aria-label={`Tecnologias de ${group.title}`}
      >
        {group.items.map((technology) => (
          <button
            key={technology.name}
            className="technology-item"
            type="button"
            aria-pressed={selected.name === technology.name}
            aria-controls={detailId}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setSelected(technology);
              }
            }}
            onFocus={() => setSelected(technology)}
            onClick={() => setSelected(technology)}
          >
            <span className="technology-item-icon">
              <TechnologyIcon name={technology.name} size={32} />
            </span>

            <span>{technology.name}</span>
          </button>
        ))}
      </div>

      <div
        id={detailId}
        className="technology-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <strong>{selected.name}</strong>
        <p>{selected.description}</p>
      </div>
    </article>
  );
}

export default function Technologies() {
  const technologiesRef = useHeroProgress();

  return (
    <section
      ref={technologiesRef}
      id="tecnologias"
      className="technologies"
      aria-labelledby="technologies-title"
    >
      <div className="technologies-heading">
        <p className="technologies-eyebrow">Minha base técnica</p>

        <h2 id="technologies-title">
          Tecnologias que fazem parte do meu <span>trabalho.</span>
        </h2>

        <p className="technologies-introduction">
          Ferramentas e conceitos que utilizo nos projetos e continuo
          aprofundando na prática. Explore cada tecnologia para conhecer meu
          contato com ela.
        </p>
      </div>

      <div className="technologies-grid">
        {technologyGroups.map((group, index) => (
          <TechnologyCard key={group.id} group={group} index={index} />
        ))}
      </div>

      <div className="hero-navigation">
        <a className="hero-explore" href="#construcao">
          <span className="hero-explore-copy">
            <span className="hero-explore-label">Explore meu trabalho</span>

            <span className="hero-explore-detail">
              Veja como essas tecnologias se conectam nos meus projetos.
            </span>
          </span>

          <span className="hero-arrow" aria-hidden="true">
            ↓
          </span>
        </a>

        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-fill" />
        </div>
      </div>
    </section>
  );
}
