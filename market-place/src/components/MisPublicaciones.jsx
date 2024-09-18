import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const MisPublicaciones = () => {
  const { products, error } = useContext(ProductsContext);

  console.log('Mis publicaciones:', products);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Validar que products.results sea un array antes de iterar sobre él
  const publicaciones = Array.isArray(products.results) ? products.results : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {publicaciones.length > 0 ? (
          publicaciones.map((publicacion) => (
            <div key={publicacion.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={publicacion.image}
                alt={publicacion.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{publicacion.name}</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Categoría:</strong> {publicacion.category}
                </p>
                <p className="text-gray-700 mb-4">{publicacion.description}</p>
                <p className="text-gray-800 font-bold">
                  <strong>Precio:</strong> ${publicacion.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No tienes publicaciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default MisPublicaciones;
