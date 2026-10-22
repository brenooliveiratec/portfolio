import "./About.css";

export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="about-heading">
        <p className="about-eyebrow">Sobre mim</p>

        <h2 id="about-title">É colocando em prática que eu aprendo melhor.</h2>
      </div>

      <div className="about-content">
        <p>
          Estou construindo minha trajetória no desenvolvimento de software.
          Aprendo rápido quando posso colocar a mão no código, experimentar e
          entender como resolver um problema real.
        </p>
        <p>
          O DOMU e o Sistema Bar fazem parte desse caminho. Com eles, transformo
          estudo em experiência, encontro novos desafios e descubro o que
          preciso aprender para dar o próximo passo.
        </p>
        <p>
          Quero crescer nessa profissão, aprender com pessoas mais experientes e
          contribuir em projetos que façam diferença. Ainda tenho muito para
          aprender e disposição para seguir evoluindo.
        </p>
      </div>
    </section>
  );
}
