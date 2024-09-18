import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import MisPublicaciones from "../components/MisPublicaciones";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext"; 
import ProductItem from "../components/ProductItem"; 

const Perfil = () => {
  const navigate = useNavigate();

  const handleCreatePublication = () => {
    navigate("/crear-publicacion");
  };

  const { products } = React.useContext(ProductsContext); 
  const latestProducts = [...products]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="flex flex-col justify-around bg-customColor">
      <NavBar />
      {/* Contenido principal */}
      <main className="container mx-auto p-4 mt-4">
        <div className="flex flex-row">
          {/* Sección del perfil */}
          <section className="bg-white p-4 mb-4 w-full md:w-1/2">
            <img src="/Perfil.png" alt="Logo grupo 7" className="h-200 w-200" />
          </section>

          {/* Formulario para datos de perfil */}
          <section className="bg-white p-4 w-full md:w-1/2">
            <form>
              <div className="mb-4 flex flex-row">
                <FontAwesomeIcon icon={faUser} className="mt-3 mr-2" />
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <FontAwesomeIcon icon={faEnvelope} className="mt-3 mr-2" />
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <FontAwesomeIcon icon={faPhone} className="mt-3 mr-2" />
                <input
                  type="tel"
                  id="telefono"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su teléfono"
                />
              </div>
              {/* Botón para crear publicación */}
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={handleCreatePublication}
              >
                Crear Publicación
              </button>
            </form>
          </section>
        </div>

        {/* Sección de Novedades */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4 font-poppins font-medium">Novedades</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {latestProducts.length > 0 ? (
              latestProducts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onClick={() => console.log("Detalle de producto")} // Manejo de clic de detalle
                />
              ))
            ) : (
              <p>No hay novedades disponibles.</p>
            )}
          </div>
        </section>

        {/* Sección de Mis Publicaciones */}
        <section className="p-4 mb-5">
          <h2 className="text-2xl mb-5 font-poppins font-medium">Mis Publicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MisPublicaciones />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Perfil;
