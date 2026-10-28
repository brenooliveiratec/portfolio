import { useActiveSection } from "../hooks/useActiveSection";
import "./Header.css";

const navigationItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "construcao", label: "Projetos" },
  { id: "certificacoes", label: "Certificações" },
  { id: "contato", label: "Contato" },
];

const sectionIds = navigationItems.map((item) => item.id);

export default function Header() {
  const { activeId, headerRef } = useActiveSection(sectionIds);

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-content">
        <a
          className="header-brand"
          href="#inicio"
          aria-label="Breno Oliveira - início"
        >
          Breno<span>.</span>
        </a>
        <nav className="header-nav" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
