import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductItem from "../components/ProductItem";
import Filter from "../components/Filter";
import NavBar from "../components/NavBar";

const Productos = () => {
  const { products, error } = useContext(ProductsContext);
  const [sortOrder, setSortOrder] = useState("default");

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const latestProducts = [...sortedProducts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 bg-customColor">
      <section className="mb-8">
        <NavBar />
        <div className="mt-5 mb-5 flex justify-between">
          <h2 className="text-2xl mb-4 font-poppins font-medium">Novedades</h2>
          <Filter onSortChange={handleSortChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {latestProducts.length > 0 ? (
            latestProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No hay novedades disponibles.</p>
          )}
        </div>
      </section>
      <h1 className="text-3xl font-bold my-8">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  p-4">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Productos;
