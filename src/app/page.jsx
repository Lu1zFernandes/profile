/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Project from "@/components/Project";
import "./globals.css";

export default function Home() {
  return (
    <div className="container-fluid p-0 mainContainter">
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h2 className="mb-0">
            Luiz Fernandes
            <span className="text-primary"> Matos Neves</span>
          </h2>
          <div className="subheading mb-5">
            Desenvolvedor Full stack
            <br />
            <a
              className="subanchor text-decoration-none"
              href="mailto:luiz.fernandes31matos@gmail.com"
            >
              luiz.fernandes31matos@gmail.com
            </a>
          </div>
          <p className="lead mb-5">
            Minha jornada começa ao ingressar em biotecnologia na Universidade
            Federal de São Carlos(UFSCar) em 2020. Após ter aulas de Python,
            fiquei fascinado pela programação, e com a pandemia, aproveitei para
            ir cada vez mais fundo na área. Desenvolvi minhas habilidades
            concluindo um curso de desenvolvimento Full Stack. E agora, cursando
            Engenharia da Computação, estou comprometido em me tornar um
            desenvolvedor excepcional e versátil, preparado para enfrentar
            quaisquer obstáculos no mundo da tecnologia.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              target="_blank"
              href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
            </a>
            <a
              className="social-icon"
              target="_blank"
              href="https://github.com/Lu1zFernandes"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0 line" />

      <section className="resume-section" id="projects">
        <div className="resume-section-content ">
          <h2 className="mb-5">Projetos</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <Project
                img="/ReactStock.jpg"
                nameImg="ReactStock"
                name="React Stock"
                description="Site para estocagem de itens, usando React e React
                    Router."
                site="https://exercicio-final.vercel.app/"
                git="https://github.com/Lu1zFernandes/ExercicioFinal"
              />
            </div>
            <div className="col">
              <Project
                img="/nextstore.jpg"
                nameImg="nextstore"
                name="Next Store"
                description="Uma loja com produtos da Apple utilizando o 
                    Next.js."
                site="https://newteste-ten.vercel.app//"
                git="https://github.com/Lu1zFernandes/nextstore"
              />
            </div>
            <div className="col">
              <Project
                img="/CalculatorJS.jpg"
                nameImg="CalculatorJS"
                name="Calculadora com JavaScript"
                description="Uma simples calculador usando apenas JavaScript."
                site="https://lu1zfernandes.github.io/CalculatorJS/"
                git="https://github.com/Lu1zFernandes/CalculatorJS"
              />
            </div>
            <div className="col">
              <Project
                img="/WikiSports.jpg"
                nameImg="WikiSports"
                name="Wiki Sports"
                description="Uma wiki de esportes, usando css e html"
                site="https://lu1zfernandes.github.io/SportsWiki/"
                git="https://github.com/Lu1zFernandes/SportsWiki"
              />
            </div>
            <div className="col">
              <Project
                name="Projeto em andamento"
                description="Desculpe, espere mais um pouco para a postagem desse projeto."
                site="#projects"
                git="#projects"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0 line" />

      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Educação</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">DESCOMPLICA FACULDADE DIGITAL</h3>
              <div className="subheading mb-3">Engenharia da Computação</div>
              <p>Em andamento | 2º semestre</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                Junho de 2023 - Junho de 2027
              </span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Universidade Federal de São Carlos</h3>
              <div className="subheading mb-3">
                Bacharelado em Biotecnologia
              </div>
              <p>Incompleta</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                Janeiro de 2020 - Janeiro de 2022
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0 line" />

      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Habilidades</h2>
          <div className="subheading mb-3 skillsText">
            Linguagens de programação e outras ferramentas
          </div>

          <div className="subheading mb-2">
            <a
              className="text-decoration-none"
              target="_blank"
              href="https://drive.google.com/file/d/1574Z0hEYCdEwP1yAsD-Uo-zRrfxekyWH/view?usp=sharing"
            >
              Full Stack
            </a>
          </div>
          <ul className="fa-ul mb-0 devText">
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1te-TE6jA9xO7-CSvGyYmGXa4zlntNUwu/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  />
                  HTML5
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1WVTDlcMwbptNzXPvYleG_rygZ0tGlgMw/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  />
                  CSS3
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1MROgHhbw65ALQrJ23uRWl8W8prpkwciT/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  />
                  CSS Moderno
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Qy6Pv2Tl6nf6mpHw3vd1TpDVvoTHRchG/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />
                  JavaScript
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1AMUWmRfc9FlNBe1-N56SlVEqdlKIT6Ep/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  />
                  TypeScript
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1xkiIF3KAmcNrMvJwYN3duMmVRKYZm8pT/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  />
                  Sass
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1bvS86e7ftluUogu4SIuFm1cpVRs1AYL0/view?usp=sharings"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  />
                  Bootstrap
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1J1VgTZS148mnNYd_nL9izbzqUDIhhhDa/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
                  />
                  Bulma
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/19q5YAv6jENcbz51LDBPhNPCOje3pyQvT/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                  React
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1hh_nr4QsTTKDotXejzpeOaCSUsz5VDvO/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  />
                  Next.js
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1nfwUJb_m-IC1EYIiiWUnTQmg52fhljgn/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  />
                  Node.js
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1j8N0zRaioamldXxxshxdu6eovIMn-u1f/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  />
                  MongoDB
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1RDuhINf-eblP3yJZefSn0r7FFBMCsuE4/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    className="mb-2 me-2 devIcons"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                  />
                  Banco de Dados SQL
                </a>
              </span>
            </li>
          </ul>
          <div className="subheading mb-2">Outras ferramentas</div>
          <ul className="fa-ul mb-0 devText">
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1iuP3AuTTOSvlLGjTYf5m0F02HJWAr8ZM/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    src="/Cybersecurity.svg"
                    alt="cybersecurity"
                    className="mb-2 me-2 devIcons"
                  />
                  Cybersecurity Essentials
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1XEM9i67WmY6HuBsX2ZrHP31mNvBIe6hE/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    src="/excel.svg"
                    alt="excel"
                    className="mb-2 me-2 devIcons"
                  />
                  Excel Básico
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1fqsOvRnNFjTpRLzjk_H26i0oUA1CxYoK/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    src="/excel.svg"
                    alt="excel"
                    className="mb-2 me-2 devIcons"
                  />
                  Excel Intermediário
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1FGVvsVJ71v4fhYN5GQnvR5RnfqSKphc2/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="mb-2 me-2 devIcons"
                  />
                  Git e GitHub
                </a>
              </span>
            </li>
            <li>
              <span className="fa-li">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1dGww687Tor6KRTDvLbDvha6CQUZzKsZC/view?usp=sharing"
                  className="me-2 text-decoration-none"
                >
                  <img
                    src="/informationTechnology.svg"
                    alt="informationTechnology"
                    className="mb-2 me-2 devIcons"
                  />
                  Competência transversal - Tecnologia da Informação e
                  Comunicação
                </a>
              </span>
            </li>
          </ul>
          <div>
            <p className="h6"> - Conhecimento completo do pacote Office</p>
            <p className="h6"> - Inglês básico</p>
          </div>
        </div>
      </section>
      <hr className="m-0 line" />

      <section className="resume-section" id="contacts">
        <div className="resume-section-content">
          <h2 className="mb-5">Contato</h2>
          <ul className="fa-ul mb-0">
            <li className="h4 contactItem">
              Email:
              <a
                className="subanchor mx-2 text-decoration-none"
                href="mailto:luiz.fernandes31matos@gmail.com"
              >
                luiz@gmail.com
              </a>
            </li>
            <li className="h4 contactItem">Número: (16) 99639-2245</li>
            <li className="h4 contactItem">
              GITHUB:
              <a
                className="subanchor mx-2 text-decoration-none"
                target="_blank"
                href="https://github.com/Lu1zFernandes"
              >
                Luiz Fernandes de Matos Neves
              </a>
            </li>
            <li className="h4 contactItem">
              linkedin:
              <a
                className="subanchor mx-2 text-decoration-none"
                target="_blank"
                href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
              >
                Luiz Fernandes de Matos Neves
              </a>
            </li>
            <li className="h4 contactItem">
              Localização:
              <a
                className="subanchor mx-2 text-decoration-none"
                href="https://maps.app.goo.gl/L5ZpRLyCQm1mt26Y7"
                target="_blank"
              >
                São Carlos - São Paulo
              </a>
            </li>
            <li className="h4 contactItem">
              <a
                className="subanchor text-decoration-none"
                href="https://drive.google.com/file/d/1aunxuhGlZdNjA0ku-JWeVoNK7HB3oh4o/view?usp=sharing"
                target="_blank"
              >
                Meu currículo completo
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
