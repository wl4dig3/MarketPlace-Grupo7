import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductItem from '../components/ProductItem';

const Productos = () => {
    const { products, error } = useContext(ProductsContext);

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }
    const latestProducts = [...products]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    
    return (
        <div className="container mx-auto px-4">
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Novedades</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {latestProducts.length > 0 ? (
                        latestProducts.map(product => (
                            <div
                                key={product.id}
                                className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4"
                            >
                                <img 
                                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    src={product.image} 
                                    alt={product.name} 
                                />
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-700 mb-2">{product.description}</p>
                                <p className="text-gray-600 mb-2">
                                    <strong>Category:</strong> {product.category}
                                </p>
                                <p className="text-gray-800 font-bold">
                                    <strong>Price:</strong> ${product.price.toLocaleString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No hay novedades disponibles.</p>
                    )}
                </div>
            </section>
            <h1 className="text-3xl font-bold my-8">Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map(product => (
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
