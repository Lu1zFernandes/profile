/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */

import "./globals.css";

export const metadata = {
  title: "Luiz Fernandes | Portfólio",

  description:
    "Criado com next app e estruturado a partir do site https://startbootstrap.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body id="page-top">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <div style={{ display: "none" }}>
            <img src="/bocchi.gif" alt="bocchi-easter-egg" />
            Isso é apenas um easter-egg
          </div>
          <a className="navbar-brand" href="#page-top">
            <span className="d-block d-lg-none">Luiz Fernandes</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/Profile.jpg"
                alt="Profile"
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Educação
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Habilidades
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contacts">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
