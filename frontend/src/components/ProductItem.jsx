import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../context/FavoritesContext'; 

const ProductItem = ({ product, onClick }) => {
  const { favorites, toggleFavorite } = useFavorites();
  // console.log('[TOGGLE]', toggleFavorite);
  const isFavorite = Array.isArray(favorites) && favorites.includes(product.id);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Para evitar que click en el corazón dispare el onClick del contenedor
    console.log('object', product.id);
    toggleFavorite(product.id);
  };

  return (
    <div className="bg-cardColor border border-gray-300 rounded-lg shadow-md my-3 p-4" onClick={onClick}>
      <img
        className="w-full h-[70%] object-cover rounded-t-lg cursor-pointer"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-poppins mb-2 cursor-pointer" onClick={onClick}>{product.name}</h3>
        <p className="text-gray-700 mb-2 font-poppins">{product.description}</p>
        <p className="text-gray-800 font-bold">
          <strong>Price:</strong> ${product.price.toLocaleString()}
        </p>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={handleFavoriteClick}
          className={isFavorite ? 'text-red-500' : 'text-gray-500'}
        />
      </div>
    </div>
  );
};

export default ProductItem;
