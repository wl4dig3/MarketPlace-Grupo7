import React from "react";
import ProfilePage from "../components/ProfilePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import MisPublicaciones from "../components/MisPublicaciones";
import NavBar from "../components/NavBar";

const Perfil = () => {
  return (
    <div className="flex flex-col justify-around ">
      <NavBar />
      {/* Contenido principal */}
      <main className="container mx-auto p-4 mt-4">       
        <div className="flex flex-row">
          <section className="bg-white p-4 mb-4 w-full md:w-1/2">
            {/* Contenido de la sección 1 */}
            <img src="/Perfil.png" alt="Logo grupo 7" className="h-200 w-200" />
          </section>
          <section className="bg-white p-4 w-full md:w-1/2">
            {/* Contenido del formulario */}

            <form>
              <div className="mb-4 flex flex-row">
                <FontAwesomeIcon icon={faUser} className="mt-3 mr-2"/>
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-4 flex flex-row">
              <FontAwesomeIcon icon={faEnvelope} className="mt-3 mr-2"/>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="mb-4 flex flex-row">
              <FontAwesomeIcon icon={faPhone} className="mt-3 mr-2"/>
                <input
                  type="tel"
                  id="telefono"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su teléfono"
                />
              </div>
            </form>
          </section>
        </div>
        <section className="p-4 mb-5">
          <h2>Mis Publicaciones</h2>
          <article className="flex flex-wrap justify-start gap-4">
            <MisPublicaciones />
            <MisPublicaciones />
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-700 fixed bottom-0 left-0 right-0">
        <p>&copy; 2023 Mi sitio web  Desafio Market </p>
      </footer>
    </div>
  );
};

export default Perfil;
