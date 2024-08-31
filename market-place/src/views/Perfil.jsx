import React from "react";
import ProfilePage from "../components/ProfilePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import MisPublicaciones from "../components/MisPublicaciones";

const Perfil = () => {
  return (
    <div className="flex flex-col justify-around">
      {/* Barra de navegación superior */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-1/4">
              <img src="logo.png" alt="Logo grupo 7" className="h-20 w-20" />
            </div>
            <div className="w-1/2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control block w-full py-2 pl-10 text-sm text-gray-700"
                  placeholder="Buscar"
                />
                <span className="input-group-addon absolute left-0 top-0 mt-2 ml-2">
                  <i className="fa fa-search text-gray-500" />
                </span>
              </div>
            </div>
            <div className="w-1/4 flex justify-end">
              <div className="perfil-info flex items-center">
                <img
                  src="perfil.png"
                  alt="Perfil"
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Nombre Apellido
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto p-4 mt-4">
        <div className="flex flex-row justify-around">
          <p className="text-lg font-bold mb-2">Mis publicaciones</p>
          <p className="text-lg font-bold mb-2">Fvorito</p>
          <p className="text-lg font-bold mb-2">Icono carrito</p>
        </div>
        <div className="flex flex-row">
          <section className="bg-white p-4 mb-4 w-full md:w-1/2">
            {/* Contenido de la sección 1 */}
            <img src="logo.png" alt="Logo grupo 7" className="h-200 w-200" />
          </section>
          <section className="bg-white p-4 w-full md:w-1/2">
            {/* Contenido del formulario */}

            <form>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Teléfono:
                </label>
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
        <section className="flex flex-wrap justify-center gap-4">
          <MisPublicaciones />
          <MisPublicaciones />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-700 fixed bottom-0 left-0 right-0">
        <FontAwesomeIcon icon="edit" />
        <FontAwesomeIcon icon="trash-alt" />
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        <p>&copy; 2023 Mi sitio web </p>
      </footer>
    </div>
  );
};

export default Perfil;
