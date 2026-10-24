import type { PointerEvent } from "react";
import "./Hero.css";

export default function Hero() {
  function handleHeroPointerMove(event: PointerEvent<HTMLElement>) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (event.pointerType !== "mouse" || reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty(
      "--hero-light-x",
      `${(x - 0.5) * 240}px`,
    );

    event.currentTarget.style.setProperty(
      "--hero-light-y",
      `${(y - 0.5) * 120}px`,
    );
  }

  function resetHeroLight(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--hero-light-x", "0px");
    event.currentTarget.style.setProperty("--hero-light-y", "0px");
  }

  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-title"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={resetHeroLight}
      onPointerCancel={resetHeroLight}
    >
      <div className="hero-content">
        <p className="hero-eyebrow">Desenvolvedor Back-end em formação</p>

        <p className="hero-greeting">Olá, eu sou o</p>

        <h1 id="hero-title" className="hero-title">
          Breno <span>Oliveira.</span>
        </h1>

        <div className="hero-introduction">
          <p className="hero-lead">
            Tenho curiosidade pelo que acontece por trás de cada aplicação. É
            nessa parte que quero construir minha carreira
          </p>

          <div className="hero-description">
            <p>
              Sou Breno, desenvolvedor back-end em formação, com interesse em
              APIs, bancos de dados e integrações. Nos projetos que desenvolvo,
              busco entender como cada parte se conecta, da interface às regras
              que fazem o sistema funcionar.
            </p>

            <p>
              Aprendo melhor colocando a mão na massa: investigando problemas,
              testando possibilidades e acompanhando o resultado. Quero
              aprofundar meus conhecimentos, trocar experiências e contribuir
              com o desenvolvimento de soluções úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
