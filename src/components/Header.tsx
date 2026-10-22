import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a
          className="header-brand"
          href="#inicio"
          aria-label="Breno Oliveira - início"
        >
          Breno<span>.</span>
        </a>
        <nav className="header-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}
