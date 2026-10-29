import { Send } from "lucide-react";
import { useState } from "react";

const formEndpoint = "https://formspree.io/f/xeaakbdj";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const isConfigured = formEndpoint.length > 0;
  const isSending = status === "sending";

  return (
    <form
      className="contact-form"
      aria-labelledby="contact-form-title"
      aria-busy={isSending}
      onSubmit={async (event) => {
        event.preventDefault();

        if (!isConfigured || isSending) return;

        const form = event.currentTarget;
        const data = new FormData(form);

        setStatus("sending");

        try {
          const response = await fetch(formEndpoint, {
            method: "POST",
            body: data,
            headers: {
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Não foi possível enviar a mensagem.");
          }

          form.reset();
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
    >
      <h3 id="contact-form-title">Envie uma mensagem</h3>

      <fieldset disabled={isSending}>
        <div className="contact-field">
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            required
            maxLength={100}
          />
        </div>

        <div className="contact-field">
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Seu email"
            required
            maxLength={254}
          />
        </div>

        <div className="contact-field contact-field--message">
          <textarea
            id="contact-message"
            name="message"
            placeholder="Sua mensagem"
            rows={6}
            required
            maxLength={5000}
          />
        </div>

        <button
          className="contact-submit"
          type="submit"
          disabled={!isConfigured || isSending}
          aria-describedby="contact-form-status"
        >
          {isSending ? "Enviando..." : "Enviar mensagem"}
          <Send size={18} aria-hidden="true" />
        </button>
      </fieldset>

      <p
        id="contact-form-status"
        className="contact-form-status"
        role="status"
        aria-atomic="true"
      >
        {!isConfigured
          ? "Por enquanto, entre em contato pelos canais ao lado."
          : status === "success"
            ? "Mensagem enviada. Obrigado pelo contato!"
            : status === "error"
              ? "Não foi possível enviar. Seus campos foram mantidos; tente novamente ou use um dos canais ao lado."
              : ""}
      </p>
    </form>
  );
}
