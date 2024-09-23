import React, { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children, userId }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/favorites?userId=${userId}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setFavorites(data);
        } else {
          setError('Invalid response from server.');
        }
      } catch (error) {
        setError('Error fetching favorites: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) { 
      fetchFavorites();
    }
  }, [userId]);

  const toggleFavorite = async (productId) => {
    setIsLoading(true);
    try {
      const isFavorite = favorites.includes(productId);
      const method = isFavorite ? 'DELETE' : 'POST';

      await fetch(`${import.meta.env.VITE_API_URL}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId }),
      });

      setFavorites((prev) =>
        isFavorite ? prev.filter((id) => id !== productId) : [...prev, productId]
      );
    } catch (error) {
      setError('Error updating favorite: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isLoading, error }}>
      {children}
    </FavoritesContext.Provider>
  );
};