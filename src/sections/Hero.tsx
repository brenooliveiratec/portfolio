import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <p className="hero-eyebrow">
        Breno Oliveira · Desenvolvedor Back-end em formação
      </p>

      <h1 id="hero-title" className="hero-title">
        Aprendendo na prática.
        <span>Construindo para o mundo real.</span>
      </h1>

      <p className="hero-description">
        Transformo o que estudo em aplicações e evoluo a cada desafio. Estou
        construindo minha carreira em desenvolvimento, com vontade de aprender e
        criar soluções úteis.
      </p>

      <a className="hero-explore" href="#construcao">
        Explore minhas construções.
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
