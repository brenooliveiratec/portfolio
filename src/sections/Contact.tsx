import { ArrowUpRight, ContactRound, Mail } from "lucide-react";
import "./Contact.css";

const contacts = [
  {
    id: "email",
    label: "E-mail",
    title: "Vamos conversar",
    detail: "brenooliveiraec@gmail.com",
    href: "mailto:brenooliveiraec@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    title: "Conheça meu perfil",
    detail: "Breno Oliveira",
    href: "https://www.linkedin.com/in/breno-oliveira-tec",
    icon: ContactRound,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="contact-content">
        <div className="contact-heading">
          <p className="contact-eyebrow">Contato</p>

          <h2 id="contact-title">
            Uma conversa pode ser o <span>próximo passo.</span>
          </h2>

          <p className="contact-description">
            Estou construindo minha carreira em desenvolvimento back-end e busco
            minha primeira oportunidade na área. Se quiser conhecer melhor meu
            trabalho ou conversar sobre uma oportunidade, estes são meus canais.
          </p>

          <p className="contact-location">Fortaleza, Ceará · Brasil</p>
        </div>

        <div className="contact-links">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.id}
                className="contact-card"
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                aria-label={
                  contact.external
                    ? `${contact.label}: ${contact.detail} (abre em nova aba)`
                    : `Enviar e-mail para ${contact.detail}`
                }
              >
                <span className="contact-card-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>

                <span className="contact-card-copy">
                  <span className="contact-card-label">{contact.label}</span>

                  <span className="contact-card-title">{contact.title}</span>

                  <span className="contact-card-detail">{contact.detail}</span>
                </span>

                <ArrowUpRight
                  className="contact-card-arrow"
                  size={22}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="contact-closing">
        <span>Breno Oliveira</span>

        <a href="#inicio">
          Voltar ao início <span aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  );
}
