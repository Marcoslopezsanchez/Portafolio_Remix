import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

import portafolio from "../../public/svg/icon-portafolio.svg";
import about from "../../public/img/about.jpg";
import navigationstylesUrl from "~/stylesGlobal/navigation.css";
import {
  RiAccountBoxFill,
  RiAccountBoxLine,
  RiCloseCircleFill,
  RiCodeBoxFill,
  RiHome4Fill,
  RiMenuUnfoldLine,
  RiPhoneLine,
} from "react-icons/ri";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: navigationstylesUrl },
];
export default function PortafolioRoute() {
  return (
    <>
      <div className="portafolio-layout">
        <header>
          <div className="portafolio__header">
            <img src={portafolio} alt="Portafolio" />
            <h2 className="home-link">
              <Link to="/" title="Portafolio" aria-label="Remix Portafolio">
                <span className="logo-medium">Developed with Remix Tsx</span>
              </Link>
            </h2>
          </div>
        </header>
        <body>
          <nav className="nav">
            <div className="nav__container">
              <h1 className="nav__title">Marcos Lopez</h1>
              <a href="#menu" className="nav__menu">
                <RiMenuUnfoldLine className="nav__icon" />
              </a>
              <a href="#" className="nav__menu nav__menu--second">
                <RiCloseCircleFill className="nav__icon" />
              </a>
              <ul className="dropdown" id="menu">
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                    <RiHome4Fill />
                    <span className="dropdown__span">HOME</span>
                  </a>
                </li>
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                  <RiAccountBoxFill />
                    <span className="dropdown__span">ACERCA DE</span>
                  </a>
                </li>
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                  <RiCodeBoxFill />
                    <span className="dropdown__span">EXPERIENCIA</span>
                  </a>
                </li>
                <li className="dropdown__list">
                  <a href="#" className="dropdown__link">
                  <RiPhoneLine />
                    <span className="dropdown__span">CONTACTO</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </body>

        {/* <main className="portafolio-main">
          <div className="portafolio__container-perfile">
            <div className="portafolio-perfile">
              <div className="portafolio__perfile-data">
                <img src={about} />
                <h5 className="portafolio-perfile-h5">Marcos Lopez</h5>
                <p>
                  Ingeniero en sistemas computacionales, enfocado en Desarrollo
                  de Software.
                  <br />
                  <span>Junior Developer</span>
                </p>
              </div>
              <div className="portafolio-card-content">
                <ul className="portafolio-card-links">
                  <li>
                    <Link to="mailto:ing.marcoslopezsanchez@gmail.com?Subject=Oferta%20de%20trabajo">
                      <BiLogoGmail />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/programmer-lopez/portafolio-html.git">
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/MARCOS_LOPEZ492">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="portafolio__links">
                <li className="column hover">
                  <Link to=".">
                    <button>
                      <span></span>Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="about">
                    <button>
                      <span></span>Acerca de mi
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="experiencia">
                    <button>
                      <span></span>Experiencia
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="contacto">
                    <button>
                      <span></span>Contacto
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="portafolio-outlet">
            <Outlet />
          </div>
        </main> */}
      </div>
    </>
  );
}
