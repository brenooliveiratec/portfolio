import { useState } from "react";
import "./About.css";

type AboutEntry = {
  id: string;
  label: string;
  title: string;
  institution: string;
  description: string;
};

type AboutChapter = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs?: string[];
  entries?: AboutEntry[];
};

const chapters: AboutChapter[] = [
  {
    id: "perfil",
    title: "Meu perfil",
    subtitle: "Curiosidade para entender. Vontade de construir.",
    paragraphs: [
      "Sou Breno Oliveira, estudante de Análise e Desenvolvimento de Sistemas, e estou construindo minha carreira em desenvolvimento back-end. Gosto de entender o que acontece por trás das aplicações e como suas partes se conectam.",
      "Aprendo melhor quando posso colocar a mão no código, investigar uma dificuldade e acompanhar o resultado funcionando. Meus projetos têm sido uma oportunidade de experimentar, corrigir e transformar estudo em experiência prática.",
      "Busco minha primeira oportunidade em tecnologia, com vontade de contribuir, aprender com a equipe e assumir novos desafios.",
    ],
  },

  {
    id: "formacao",
    title: "Formação",
    subtitle: "A base da carreira que estou construindo.",
    entries: [
      {
        id: "faculdade",
        label: "Desde agosto de 2024 · Em andamento",
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Unifametro",
        description:
          "Graduação em que desenvolvo minha base em tecnologia e direciono meus estudos para desenvolvimento back-end.",
      },
      {
        id: "java",
        label: "Foco de estudo",
        title: "Java e desenvolvimento back-end",
        institution: "Estudos acadêmicos e prática",
        description:
          "Java faz parte da minha formação e do caminho que quero aprofundar. Em paralelo, aplico conhecimentos de back-end em projetos pessoais com Node.js, APIs e bancos de dados.",
      },
    ],
  },

  {
    id: "experiencias",
    title: "Experiências",
    subtitle: "Vivências que também fazem parte de quem sou.",
    entries: [
      {
        id: "beach-park",
        label: "Dezembro de 2024 — atual",
        title: "Ajudante de garçom · Cumim",
        institution: "Beach Park Hotéis e Turismo",
        description:
          "Atuação em uma operação de alto fluxo, com organização, agilidade e comunicação constante com a equipe para atender às demandas do serviço.",
      },
      {
        id: "magazine-luiza",
        label: "2021 — 2022",
        title: "Vendedor",
        institution: "Magazine Luiza",
        description:
          "Atendimento e apoio aos clientes durante a compra, desenvolvendo comunicação, escuta e colaboração com a equipe.",
      },
      {
        id: "ifce",
        label: "2018",
        title: "Estagiário de Administração",
        institution: "Instituto Federal do Ceará · IFCE",
        description:
          "Apoio às atividades administrativas, organização de documentos e acompanhamento de registros acadêmicos.",
      },
    ],
  },
];

export default function About() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedChapter = chapters[selectedIndex] ?? chapters[0];

  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="about-heading">
        <h2 id="about-title">
          Um pouco <span>sobre mim.</span>
        </h2>

        <h2 id="about-title">
          Minha trajetória e o que me <span>move.</span>
        </h2>
      </div>

      <div
        className="about-navigation"
        role="group"
        aria-label="Explorar sobre mim"
      >
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            type="button"
            className="about-topic"
            aria-pressed={selectedIndex === index}
            aria-controls="about-panel"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setSelectedIndex(index);
              }
            }}
            onFocus={() => setSelectedIndex(index)}
            onClick={() => setSelectedIndex(index)}
          >
            <span className="about-topic-number" aria-hidden="true">
              0{index + 1}
            </span>

            <span>{chapter.title}</span>
          </button>
        ))}
        <span
          className="about-indicator"
          aria-hidden="true"
          style={{
            transform: `translateX(${selectedIndex * 100}%)`,
          }}
        />
      </div>

      <div
        id="about-panel"
        className="about-panel"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="about-panel-content" key={selectedChapter.id}>
          <div className="about-panel-heading">
            <span className="about-panel-index" aria-hidden="true">
              0{selectedIndex + 1}
            </span>

            <h3>{selectedChapter.subtitle}</h3>
          </div>

          <div className="about-details">
            {selectedChapter.paragraphs && (
              <div className="about-story">
                {selectedChapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {selectedChapter.entries && (
              <ol
                className={`about-timeline about-timeline--${selectedChapter.id}`}
                aria-label={selectedChapter.title}
              >
                {selectedChapter.entries.map((entry) => (
                  <li className="about-entry" key={entry.id}>
                    <span className="about-entry-marker" aria-hidden="true" />
                    <article className="about-entry-content">
                      <p className="about-entry-label">{entry.label}</p>

                      <h4>{entry.title}</h4>

                      <p className="about-entry-institution">
                        {entry.institution}
                      </p>

                      <p className="about-entry-description">
                        {entry.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
