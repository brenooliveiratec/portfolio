import type { PointerEvent } from "react";
import { Download, Mail } from "lucide-react";
import LinkedInIcon from "../components/LinkedInIcon";
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
            Meu foco está no back-end: entender, conectar e construir o que faz
            uma aplicação funcionar.
          </p>

          <div className="hero-description">
            <p>
              Estudo Análise e Desenvolvimento de Sistemas, com foco em Java.
              Nos meus projetos, também trabalho com Node.js, APIs e bancos de
              dados, transformando estudo em experiência prática.
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a
            className="hero-action hero-action--secondary hero-action--icon"
            href="mailto:brenooliveiraec@gmail.com"
            aria-label="Enviar e-mail para Breno"
            title="E-mail"
          >
            <Mail size={22} aria-hidden="true" />
          </a>

          <a
            className="hero-action hero-action--secondary hero-action--icon"
            href="https://www.linkedin.com/in/breno-oliveira-tec"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu LinkedIn (abre em nova aba)"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            className="hero-action hero-action--primary"
            href="/documents/curriculo-breno-oliveira.pdf"
            download="Curriculo_Breno_Oliveira.pdf"
            aria-label="Baixar currículo de Breno Oliveira em PDF"
          >
            <Download size={22} aria-hidden="true" />
            Currículo
          </a>
        </div>

        <a
          className="hero-action hero-action--primary hero-contact-link"
          href="#contato"
        >
          Vamos conversar
        </a>
      </div>

      <div className="hero-portrait">
        <img
          src="/images/profile/breno.jpeg"
          alt="Breno Oliveira"
          width={1179}
          height={2096}
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
