import { useEffect, useRef, useState } from "react";
import { useSceneMotion } from "../hooks/useSceneMotion";
import { learningContent } from "../data/learning";
import type { LayerId, ProjectId } from "../data/learning";
import LayerDiagram from "./LayerDiagram";
import "./ConstructionScene.css";

const layers: { id: LayerId; label: string }[] = [
  { id: "interface", label: "Front-end" },
  { id: "api", label: "Back-end" },
  { id: "data", label: "Dados" },
];

const projects: Record<ProjectId, { name: string; description: string }> = {
  domu: {
    name: "DOMU",
    description:
      "Meu primeiro sistema. Foi construindo o DOMU que comecei a compreender APIs, integração de pagamentos, banco de dados e publicação.",
  },
  "sistema-bar": {
    name: "Sistema Bar",
    description:
      "Um novo passo na prática: painel administrativo, integração com o cardápio, impressão automática e mais contato com banco de dados.",
  },
};

export default function ConstructionScene() {
  const [expanded, setExpanded] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<LayerId | null>(null);
  const [project, setProject] = useState<ProjectId>("domu");

  const layoutRef = useRef<HTMLDivElement>(null);
  const pointerInside = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [focusedLayer, setFocusedLayer] = useState<LayerId | null>(null);

  const { sectionRef, stageRef, handlePointerMove, resetPointer } =
    useSceneMotion();

  const content = selectedLayer
    ? learningContent[project][selectedLayer]
    : null;

  function cancelClose() {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function previewLayer(layer: LayerId) {
    cancelClose();
    if (focusedLayer) return;

    setExpanded(true);
    setSelectedLayer(layer);
  }

  function selectLayer(layer: LayerId) {
    cancelClose();
    setExpanded(true);
    setSelectedLayer(layer);
    setFocusedLayer(layer);
  }

  function selectProject(id: ProjectId) {
    setProject(id);
    selectLayer("interface");
  }

  function gatherLayers() {
    cancelClose();
    setExpanded(false);
    setFocusedLayer(null);
  }

  function scheduleClose() {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      closeTimer.current = null;

      const keyboardFocus = layoutRef.current?.querySelector(":focus-visible");

      if (pointerInside.current || keyboardFocus) return;

      setExpanded(false);
      setFocusedLayer(null);
    }, 200);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="construcao"
      className="construction"
      aria-labelledby="construction-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      <div className="construction-heading">
        <p className="construction-eyebrow">Aprendizado em construção</p>
        <h2 id="construction-title">
          Por dentro dos meus <span>projetos.</span>
        </h2>
      </div>

      <div
        ref={layoutRef}
        className="construction-layout"
        onFocusCapture={cancelClose}
        onBlurCapture={(event) => {
          const next = event.relatedTarget;

          if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
            scheduleClose();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            gatherLayers();
          }
        }}
      >
        <div className="construction-copy">
          <div
            className="construction-projects"
            role="group"
            aria-label="Escolher projeto"
          >
            {(["domu", "sistema-bar"] as const).map((id) => (
              <button
                key={id}
                type="button"
                className="construction-project"
                onClick={() => selectProject(id)}
                aria-pressed={project === id}
                aria-controls="construction-story"
              >
                {projects[id].name}
              </button>
            ))}
          </div>

          <div
            id="construction-story"
            className="construction-story"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              key={`${project}-${selectedLayer}`}
              className="construction-detail-body"
            >
              <h3>
                {projects[project].name}
                {selectedLayer &&
                  ` / ${layers.find((layer) => layer.id === selectedLayer)?.label}`}
              </h3>

              {content ? (
                <>
                  <ul className="construction-technologies">
                    {content.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <h4>Aplicação</h4>
                  <p>{content.application}</p>

                  <h4>Aprendizado</h4>
                  <p>{content.learning}</p>
                </>
              ) : (
                <>
                  <p>{projects[project].description}</p>
                  <p className="construction-invitation">
                    Escolha uma camada para explorar as tecnologias e o que
                    aprendi usando cada uma.
                  </p>
                </>
              )}
            </div>
          </div>

          <button
            className="construction-toggle"
            type="button"
            onClick={gatherLayers}
            disabled={!expanded}
          >
            Reunir as peças
          </button>
        </div>

        <div className="construction-visual">
          <div
            ref={stageRef}
            className={[
              "construction-stage",
              expanded ? "is-expanded" : "",
              expanded && selectedLayer ? "has-selection" : "",
              focusedLayer ? "has-front" : "",
            ].join(" ")}
            onPointerEnter={(event) => {
              if (event.pointerType !== "mouse") return;

              pointerInside.current = true;
              cancelClose();
              setExpanded(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType !== "mouse") return;

              pointerInside.current = false;
              scheduleClose();
            }}
            onPointerCancel={() => {
              pointerInside.current = false;
              scheduleClose();
            }}
          >
            <div className="construction-deck">
              {layers.map((layer, index) => {
                const isFront = focusedLayer === layer.id;

                return (
                  <button
                    key={layer.id}
                    type="button"
                    className={[
                      "construction-layer",
                      `layer-${layer.id}`,
                      expanded && selectedLayer === layer.id ? "is-active" : "",
                      isFront ? "is-front" : "",
                    ].join(" ")}
                    onClick={() => selectLayer(layer.id)}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") {
                        previewLayer(layer.id);
                      }
                    }}
                    onFocus={(event) => {
                      if (event.currentTarget.matches(":focus-visible")) {
                        selectLayer(layer.id);
                      }
                    }}
                    aria-pressed={selectedLayer === layer.id}
                    aria-expanded={isFront}
                    aria-controls="construction-story"
                  >
                    <span className="layer-heading">
                      <span>
                        0{index + 1} / {layer.label}
                      </span>
                      <span className="layer-project">
                        {projects[project].name}
                      </span>
                    </span>

                    <LayerDiagram project={project} layer={layer.id} />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="construction-options"
            role="group"
            aria-label="Escolher área de desenvolvimento"
          >
            {layers.map((layer) => (
              <button
                key={layer.id}
                className="construction-option"
                type="button"
                onClick={() => selectLayer(layer.id)}
                aria-pressed={selectedLayer === layer.id}
                aria-controls="construction-story"
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    selectLayer(layer.id);
                  }
                }}
                onFocus={(event) => {
                  if (event.currentTarget.matches(":focus-visible")) {
                    selectLayer(layer.id);
                  }
                }}
              >
                {layer.label}
              </button>
            ))}
          </div>

          <p className="construction-hint">
            Explore as camadas com o mouse ou selecione uma área.
          </p>
        </div>
      </div>
    </section>
  );
}
