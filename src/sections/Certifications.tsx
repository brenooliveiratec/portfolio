import { certifications } from "../data/certifications";
import "./Certifications.css";

export default function Certifications() {
  const hasCertifications = certifications.length > 0;

  return (
    <section
      id="certificacoes"
      className="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="certifications-heading">
        <p className="certifications-eyebrow">Formação complementar</p>

        <h2 id="certifications-title">
          Conhecimento em <span>construção.</span>
        </h2>

        <p className="certificacoes-introduction">
          Cursos e estudos que complementam minha graduação e meu
          desenvolvimento em back-end.
        </p>
      </div>

      {hasCertifications ? (
        <ul className="certifications-grid">
          {certifications.map((certification) => (
            <li key={certification.id} className="certification-card">
              <article>
                <div className="certification-meta">
                  <span>{certification.institution}</span>
                  <span>{certification.completedAt}</span>
                </div>

                <h3>{certification.title}</h3>

                <p className="certification-description">
                  {certification.description}
                </p>

                {certification.credentialUrl && (
                  <a
                    className="certification-link"
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver certificado de ${certification.title} (abre em nova aba)`}
                  >
                    Ver certificado
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="certifications-empty">
          <div className="certifications-empty-symbol" aria-hidden="true">
            {"</>"}
          </div>

          <div>
            <p className="certifications-status">Formação em andamento</p>

            <h3>Aprender também faz parte da rotina.</h3>

            <p className="certifications-empty-description">
              Estou concluindo cursos para aprofundar minha base técnica.
              Conforme finalizar, compartilharei aqui as certificações e os
              conhecimentos desenvolvidos.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
