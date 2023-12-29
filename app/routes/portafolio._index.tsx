{
  /*Home*/
}
import { LinksFunction } from "@remix-run/node";
import perfile from "../../public/img/perfile.png";
import stylesUrl from "./styles/portaIndex.css";
import { FaReact, FaJava, FaFileCode, FaMdb } from "react-icons/fa6";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafolioIndexRoute() {
  return (
    <main>
      <div className="portafolio_acerca">
        <div className="portafolio__acerca">
          <h1 className="text-white flex justify-center font-sans">
            Marcos Lopez Sanchez
          </h1>
          <h3 className="text-white flex justify-center font-sans">
            Junior Developer
          </h3>
        </div>
        <section id="portafolio_index">
          <div className="portafolio-section">
            <img className="perfile-img " src={perfile} alt="Marcos_Lopez" />
            <div className="about-content">
              <div className="about-container-card">
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Habilidades</h3>
                      <p>
                        <span className="text-lg">Experiencia en:</span>
                        <br />
                        <br /> <FaReact className="text-lg" />
                        React
                        <FaJava className="text-lg" />
                        java <br />
                        <FaFileCode className="text-lg" />
                        Spring Boot
                        <br />
                        <FaMdb className="text-lg" /> Mongo DB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Disponibilidad</h3>
                      <p>
                        La experiencia obtenida es por el aprendizaje
                        autodidacta con ayuda de las tecnología de la
                        informacion. Cuento con toda la disponibilidad de
                        esfuerzo, dedicación y tiempo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="card-conteiner">
                      <span></span>
                      <h3 className="portafolio-h3">Compromiso</h3>
                      <p>
                        Enfrento situaciones poco comunes, bajo presión
                        desarrollando habilidades tanto responsabilidad para un
                        crecimiento propio, con una curva de aprendizaje en base
                        a mi experiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
