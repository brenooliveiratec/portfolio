import { useHeroProgress } from "../hooks/useHeroProgress";
import "./Hero.css";

export default function Hero() {
  const heroRef = useHeroProgress();

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <p className="hero-eyebrow">Desenvolvedor Back-end em formação</p>

        <p className="hero-greeting">Olá, eu sou o</p>

        <h1 id="hero-title" className="hero-title">
          Breno <span>Oliveira.</span>
        </h1>

        <div className="hero-introduction">
          <p className="hero-lead">
            Estou construindo minha carreira em desenvolvimento, uma experiência
            de cada vez.
          </p>

          <div className="hero-description">
            <p>
              Meu caminho começou com o DOMU e ganhou novos desafios com o
              Sistema Bar. Construindo esses projetos, passei a entender melhor
              APIs, integrações e bancos de dados.
            </p>

            <p>
              Aprendo melhor quando posso experimentar, investigar um problema e
              acompanhar a solução funcionando. Quero continuar evoluindo,
              aprender com outras pessoas e contribuir em projetos reais.
            </p>
          </div>
        </div>
      </div>

      <a className="hero-explore" href="#construcao">
        <span className="hero-explore-copy">
          <span className="hero-explore-label">Conheça meu trabalho</span>
          <span className="hero-explore-detail">
            Domu, Sistema Bar e o que aprendi construindo.
          </span>
        </span>

        <span className="hero-arrow" aria-hidden="true">
          ↓
        </span>
      </a>

      <div className="hero-progress" aria-hidden="true">
        <span className="hero-progress-fill" />
      </div>
    </section>
  );
}
