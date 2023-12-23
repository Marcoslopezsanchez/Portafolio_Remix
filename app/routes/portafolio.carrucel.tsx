import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/carrucel.css";
import Avatar1 from "../../public/img/avatar-1.png";
import Avatar2 from "../../public/img/avatar-2.png";
import Avatar3 from "../../public/img/avatar-3.png";
import Avatar4 from "../../public/img/avatar-4.png";

import { FaReact, FaJava, FaFileCode, FaMdb } from "react-icons/fa6";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function carrucel() {
  return (
    <html>
      <body>
        <section className="container">
          <div className="card__container">
            <div className="card__content">
              <div className="card__carrucel">
                <article className="card__article">
                  <div className="card__image">
                    <img src={Avatar1} alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>
                  <div className="card__data">
                    <h3 className="card__name">Habilidades</h3>
                    <p className="card__description">
                      Experiencia en: React <FaReact className="text-lg" />
                      java <FaJava className="text-lg" />
                      Spring Boot
                      <FaFileCode className="text-lg" />
                      Mongo DB
                      <FaMdb className="text-lg" />
                    </p>
                    <a href="#" className="card__button">
                      View More
                    </a>
                  </div>
                </article>

                <article className="card__article">
                  <div className="card__image">
                    <img src={Avatar2} alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>
                  <div className="card__data">
                    <h3 className="card__name">Diego</h3>
                    <p className="card__description">
                      This text is styled with some of the text formatting
                      properties.
                    </p>
                    <a href="#" className="card__button">
                      View More
                    </a>
                  </div>
                </article>

                <article className="card__article">
                  <div className="card__image">
                    <img src={Avatar3} alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>
                  <div className="card__data">
                    <h3 className="card__name">Jesica</h3>
                    <p className="card__description">
                      This text is styled with some of the text formatting
                      properties.
                    </p>
                    <a href="#" className="card__button">
                      View More
                    </a>
                  </div>
                </article>

                <article className="card__article">
                  <div className="card__image">
                    <img src={Avatar4} alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>
                  <div className="card__data">
                    <h3 className="card__name">Estefania</h3>
                    <p className="card__description">
                      This text is styled with some of the text formatting
                      properties.
                    </p>
                    <a href="#" className="card__button">
                      View More
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="container__carrucel">
          <div className="carrucel">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                    height="100"
                    width="250"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
