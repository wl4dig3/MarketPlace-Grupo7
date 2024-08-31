import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md my-3 p-4">
            <img 
                className="w-full h-48 object-cover rounded-t-lg"
                src={product.image} 
                alt={product.name} 
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-600 mb-2">
                    <strong>Category:</strong> {product.category}
                </p>
                <p className="text-gray-800 font-bold">
                    <strong>Price:</strong> ${product.price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default ProductItem;
