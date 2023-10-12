import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
// import stylesUrl from "./styles/local.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];

export default function IndexRoute() {
  return (
    <nav>
      <div className="h-screen flex justify-center items-center flex-col min-[320px]:text-center max-[600px]">
        <div className="shadow-xl bg-[#111821] rounded-xl">
          <h1 className="md:text-md text-9xl text-white">
            <span>Marcos Lopez</span>
          </h1>
          <ul>
            <div className="flex flex-row my-5 justify-center">
              <div className="mx-5">
                <li>
                  <Link to="portafolio">
                    <button className="bg-[#34b298]  rounded-xl px-1 py-2 text-xl tracking-widest hover:bg-black hover:bg-[#111821] hover:text-[#34b298]">Portafolio</button>
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link
                    to="https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link"
                    download="CV"
                    reloadDocument
                  >
                    <button className="bg-[#34b298]  rounded-xl px-1 py-2 text-xl tracking-widest hover:bg-black hover:bg-[#111821] hover:text-[#34b298]">CV.pdf</button>
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
