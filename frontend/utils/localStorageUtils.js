const FAVORITES_KEY = 'favorites';

const getFavorites = () => {
  const favoritesString = localStorage.getItem(FAVORITES_KEY);
  return favoritesString ? JSON.parse(favoritesString) : [];
};

const setFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export default { getFavorites, setFavorites };