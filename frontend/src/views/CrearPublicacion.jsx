import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const CrearPublicacion = () => {
  const { user } = useAuth();
  const { createProduct } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const categories = [
    { id: 1, category: 'Electronica' },
    { id: 2, category: 'Libros' },
    { id: 3, category: 'Ropa' },
    { id: 4, category: 'Juguetes' },
    { id: 5, category: 'Electrodomesticos' },
    { id: 6, category: 'Otros' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      setError('No estás autenticado');
      return;
    }
  
    // Verifica que la categoría sea válida
    if (!category) {
      setError('Por favor, selecciona una categoría válida.');
      return;
    }
  
    const newProduct = {
      category_id: category,
      name,
      description,
      image,
      price,
      user_id: user.id,
    };
  
    try {
      await createProduct(newProduct, user.token);
      navigate('/productos');
    } catch (error) {
      setError('Error al crear el producto');
    }
  };
  
  return (
    <div>
      <h1>Crear Producto</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Categoría:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
