import React, { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext'; 

const AddProductForm = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(''); // URL de la imagen

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      category,
      price: parseFloat(price),
      image, // URL de la imagen
    };

    // Añadir producto al estado y también podrías enviarlo a una API si es necesario
    setProducts([...products, newProduct]);
    setName('');
    setDescription('');
    setCategory('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-lg shadow-md mb-8">
      <div>
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Add Product</button>
    </form>
  );
};

export default AddProductForm;
